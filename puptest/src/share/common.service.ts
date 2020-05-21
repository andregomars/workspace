import fs from 'fs';
import { Page } from 'puppeteer';
import config from 'config';
import { CartItem } from 'src/model';

export class CommonService {
    constructor(private page: Page) {
        this.initScreenShotDirectory();
    }

    async snapshot(imageName: string) {
        if (!imageName) { return; }

        let path: string = config.get('screenshot') || './';
        path = `${path}/${imageName}`;
        if (!imageName.endsWith('.png') && !imageName.endsWith('.jpg')) {
            path = `${path}.png`;
        }
        await this.page.screenshot({ path, fullPage: true });
        console.log(`screenshot saved as ${path}.`)
    }

    async snapshotUntil(imageName: string, selector: string) {
        await this.page.waitForSelector(selector);
        await this.snapshot(imageName)
    }

    getAddToCartItems(): CartItem[] {
        return config.get('cartitems') as CartItem[];
    }

    private initScreenShotDirectory() {
        let path: string = config.get('screenshot') || './';
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    }
}