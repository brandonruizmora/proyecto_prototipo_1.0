let puppeteer = require('puppeteer')
let cheerio = require('cheerio')

const EMAIL_SELECTOR = '#username';
const PASSWORD_SELECTOR = '#password';
const SUBMIT_SELECTOR = '#app__container > main > div > form > div.login__form_action_container > button';
const LINKEDIN_LOGIN_URL = 'https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin';

if (process.argv[2] !== undefined) {
    (() => {
        puppeteer.launch({ headless: false })
            .then(async (browser) => {
                let page = await browser.newPage()
                page.setViewport({ width: 1366, height: 768 });
                await page.goto(LINKEDIN_LOGIN_URL, { waitUntil: 'domcontentloaded' })
                await page.click(EMAIL_SELECTOR)
                await page.keyboard.type('st1522@utr.edu.mx');
                await page.click(PASSWORD_SELECTOR);
                await page.keyboard.type('linkepass0117');
                await page.click(SUBMIT_SELECTOR);
                await page.waitForNavigation();
                await page.goto(`https://www.linkedin.com/company/${process.argv[2]}/about`, { waitUntil: 'domcontentloaded' })
                    .then(() => {
                        const content = page.content();
                        content
                            .then((success) => {
                                const $ = cheerio.load(success)
                                const textExtracted = $('.link-without-visited-state.inline-block.ember-view').text();
                                if (textExtracted !== undefined) {
                                    const extractedWords = textExtracted.trim().split(' ');
                                    console.log(extractedWords[2] + ' Employees');
                                } else {
                                    console.log("Unable to fetch results. Please try again!")
                                }
                            })
                    })
            })
            .catch((err) => {
                console.log(" CAUGHT WITH AN ERROR ", err);
            })
    })()
}