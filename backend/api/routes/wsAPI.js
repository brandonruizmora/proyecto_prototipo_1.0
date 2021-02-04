var express = require("express");
var router = express.Router();
let puppeteer = require("puppeteer");
let cheerio = require("cheerio");

let lugar = {
  nombre: "",
};

let establecimiento = {
  nombre: "",
  empleados: [],
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

async function wsasync(text) {
  const a = await wspromise("oxxo");
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

router.post("/personas", function (req, res) {
  if (!req.body.nombre) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: "El campo nombre es requerido",
    };
    res.send(respuesta);
  } else {
    if (establecimiento.nombre !== "") {
      respuesta = {
        error: true,
        codigo: 503,
        mensaje: "El lugar ya fue buscado previamente",
      };
      res.send(respuesta);
    } else {
      establecimiento = {
        nombre: req.body.nombre,
      };
      wsasyncp(req.body.lugar).then((v) => {
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

async function wsasyncp(text) {
  const a = await wspromisep("oxxo");
  return a;
}

function wspromisep(word) {
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
              .goto(
                `https://www.linkedin.com/search/results/people/?keywords=${word}`,
                {
                  waitUntil: "domcontentloaded",
                }
              )
              .then(() => {
                const content = page.content();
                content.then((success) => {
                  const $ = cheerio.load(success);
                  // const persona = $('.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light').find('a').find('span').find('span');
                  // console.log(persona.html());

                  // const thirdPersona = $('.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light').next();
                  // console.log(thirdPersona.html());

                  // const container = $('.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light .mb1 .linked-area.cursor-pointer');
                  // console.log(container.html());

                  // const persona = $('div.linked-area.cursor-pointer').find('a').find('span').find('span').each((index, element) => {
                  //   console.log(index, $(element).text())
                  // });
                  // console.log(persona.html());

                  const personas = $('div.entity-result div.entity-result__content div.mb1 div.linked-area').each((index, el) => {
                    const nombre = $(el).find('a.app-aware-link').find('span[aria-hidden="true"]');
                    const empleo = $(el).find('div.entity-result__primary-subtitle.t-14.t-black');
                    const recide = $(el).find('div.entity-result__secondary-subtitle.t-14')
                    // console.log(index, nombre)
                    
                    console.log(index, $(nombre).text(), $(empleo).text().trim(), $(recide).text().trim())
                  });
                  // console.log(personas.html())

                  
                  const textExtracted = $(
                    ".reusable-search__entity-results-list.list-style-none"
                  ).text();
                  if (textExtracted !== undefined) {
                    const extractedWords = textExtracted.trim().split(" ");
                    resolve(extractedWords + " Employees");
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

module.exports = router;
