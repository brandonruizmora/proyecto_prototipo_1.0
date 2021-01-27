var express = require("express");
var router = express.Router();
let puppeteer = require("puppeteer");
let cheerio = require("cheerio");

let lugar = {
  nombre: "",
};

router.get("/", function (req, res, next) {
  wsasync().then((v) => {
    res.send("API is working properly " + v);
  });
});

router.post("/", function (req, res) {
  if (!req.body.nombre_lugar) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: "El campo nombre_lugar es requerido",
    };
    res.send(respuesta);
  } else {
    if (lugar.nombre !== "") {
      respuesta = {
        error: true,
        codigo: 503,
        mensaje: "El lugar ya fue buscado previamente",
      };
      res.send(respuesta);
    } else {
      lugar = {
        nombre: req.body.nombre_lugar,
      };
      wsasync(req.body.lugar).then((v) => {
        respuesta = {
          error: false,
          codigo: 200,
          mensaje: "OK",
          respuesta: v,
        };
        res.send(respuesta);
      });
    }
  }
});

module.exports = router;

async function wsasync(text) {
  const a = await wspromise('oxxo');
  return a;
}

function wspromise(word) {
  return new Promise((resolve) => {
    const EMAIL_SELECTOR = "#username";
    const PASSWORD_SELECTOR = "#password";
    const SUBMIT_SELECTOR =
      "#app__container > main > div > form > div.login__form_action_container > button";
    const LINKEDIN_LOGIN_URL =
      "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin";

    if (word !== undefined) {
      (() => {
        puppeteer
          .launch({ headless: false })
          .then(async (browser) => {
            let page = await browser.newPage();
            page.setViewport({ width: 1366, height: 768 });
            await page.goto(LINKEDIN_LOGIN_URL, {
              waitUntil: "domcontentloaded",
            });
            await page.click(EMAIL_SELECTOR);
            await page.keyboard.type("st1522@utr.edu.mx");
            await page.click(PASSWORD_SELECTOR);
            await page.keyboard.type("linkepass0117");
            await page.click(SUBMIT_SELECTOR);
            await page.waitForNavigation();
            await page
              .goto(`https://www.linkedin.com/company/${word}/about`, {
                waitUntil: "domcontentloaded",
              })
              .then(() => {
                const content = page.content();
                content.then((success) => {
                  const $ = cheerio.load(success);
                  const textExtracted = $(
                    ".link-without-visited-state.inline-block.ember-view"
                  ).text();
                  if (textExtracted !== undefined) {
                    const extractedWords = textExtracted.trim().split(" ");
                    resolve(extractedWords[2] + " Employees");
                    browser.close();
                  } else {
                    console.log("Unable to fetch results. Please try again!");
                  }
                });
              });
          })
          .catch((err) => {
            console.log(" CAUGHT WITH AN ERROR ", err);
          });
      })();
    }
  });
}
