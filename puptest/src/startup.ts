import puppeteer, { Browser, Page } from 'puppeteer';

import { OrderController } from './controller';
import { AccountService, CartService, NavService, CommonService } from './share';

export class StartUp {
    private static browser: Browser;
    private static page: Page;

    private static navService: NavService;
    private static commonService: CommonService;
    private static accountService: AccountService;
    private static cartService: CartService;

    private static orderCtl: OrderController;

    public static async Run() {
        await this.initPuppeteer();
        await this.injectServices();

        await this.orderCtl.placeOrder();
        await this.closePuppeteer();
    }

    private static async initPuppeteer() {
        this.browser = await puppeteer.launch();
        this.page = await this.browser.newPage();
        this.page.setViewport({ width: 1920, height: 1080 });
    }

    private static async injectServices() {
        this.navService = new NavService(this.page);
        this.commonService = new CommonService(this.page);
        this.accountService = new AccountService(this.page);
        this.cartService = new CartService(this.page);

        this.orderCtl = new OrderController(this.navService, this.commonService, 
            this.accountService, this.cartService);
    }

    private static async closePuppeteer() {
        await this.browser.close();
    }

}
