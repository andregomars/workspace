import puppeteer from 'puppeteer';
const email = 'andregomars.aws02@gmail.com';
const password = '';
const screenshot = 'loggedin.png';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({ width: 1920, height: 1080});

    await page.goto('https://www.papermart.com/login', { waitUntil: 'networkidle0' });
    await page.type('#mat-input-2', email); // email input
    await page.type('#mat-input-3', password); // password input
    await page.click('[type=submit]'); // sign in button
    // const loginError = await page.$('#mat-error-0');
    await page.waitForSelector('#mat-error-0');
    const loginError = await page.$eval('#mat-error-0', el => el.textContent);
    console.log('login error: ', loginError);
    // if (loginError) {
    //     console.error('login failed');
    // } else {
    //     await page.waitForNavigation({ waitUntil: 'networkidle2' });
    //     await page.screenshot({ path: screenshot });
    //     console.log(`screenshot saved as ${screenshot}`)
    // }

    await browser.close();
})()
