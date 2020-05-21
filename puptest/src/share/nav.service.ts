import { Page, LoadEvent } from 'puppeteer';
import config from 'config';


export class NavService {
    constructor(private page: Page) {
    }

    async goHome() {
        await this.goto('/');
    }

    async goto(path: string, waitUntil: LoadEvent = 'networkidle0', timeout = 30000) {
        await this.page.goto(`${config.get('origin')}${path}`, { waitUntil, timeout });
    }
};
