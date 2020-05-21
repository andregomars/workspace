import { Page } from 'puppeteer';
import config from 'config';


export class AccountService {
    loginPath = '/login';

    constructor(private page: Page) {
    }

    async login() {
        // await this.page.type('#mat-input-2', config.get('customer.email')); // email input
        // await this.page.type('#mat-input-3', config.get('customer.password')); // password input
        await this.page.type('[name="email"]', config.get('customer.email')); // email input
        await this.page.type('[name="password"', config.get('customer.password')); // password input
        await this.page.click('[type=submit]'); // sign in button

        try {
            await this.page.waitForNavigation({ waitUntil: 'networkidle0' });
            console.log('nav to home page after login successful.')
        } catch {
            console.log('nav to home page failed might because of login failure.')
            await this.page.waitForSelector('#mat-error-0');
            const loginError = await this.page.$eval('#mat-error-0', el => el.textContent);
            console.log('login failed: ', loginError);
        }

    }
    
};
