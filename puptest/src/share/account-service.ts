import puppeteer from 'puppeteer';
import config from 'config';

const screenshot = 'loggedin.png';

export class AccountService {
    public async login() {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        page.setViewport({ width: 1920, height: 1080 });

        await page.goto('https://stagingak.papermart.com/login', { waitUntil: 'networkidle0' });
        await page.type('#mat-input-2', config.get('customer.email')); // email input
        await page.type('#mat-input-3', config.get('customer.password')); // password input
        await page.click('[type=submit]'); // sign in button

        try {
            await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 10000 });
            await page.waitForSelector('seo-content');
            await page.screenshot({ path: screenshot });
            console.log(`screenshot saved as ${screenshot}`)
        } catch {
            await page.waitForSelector('#mat-error-0');
            const loginError = await page.$eval('#mat-error-0', el => el.textContent);
            console.log('login failed: ', loginError);
        }

        await browser.close();
    }
};
