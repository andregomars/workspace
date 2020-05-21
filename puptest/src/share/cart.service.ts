import { Page } from 'puppeteer';
import { CartItem } from '../model';

export class CartService {

    constructor(private page: Page) {
    }

    async navToCart() {
        await this.page.waitForSelector('pm-quote > a');
        // await this.page.click('pm-quote > a');
        await this.page.$eval('pm-quote > a', (el: any) => el.click());
        await this.page.waitForSelector('.buyButton');

    }

    async addToCart(items: CartItem[]) {
        for (const item of items) {
            // await this.page.type('#mat-input-4', item.code);
            // await this.page.type('#mat-input-5', item.quantity.toString());
            await this.page.type('[placeholder="Item Number"]', item.code);
            await this.page.type('[placeholder="Qty"]', item.quantity.toString());
            await this.page.click('.buyButton');
            await this.page.waitForXPath(`//pm-cartitem/div/div[4][.=${item.code}]`);
        }
    }

};
