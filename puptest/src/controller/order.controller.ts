import { CommonService, AccountService, CartService, NavService } from '../share';
import config from 'config';
import { CartItem } from 'src/model';

export class OrderController {
    constructor(
        private navService: NavService,
        private commonService: CommonService,
        private accountService: AccountService,
        private cartService: CartService
        ) {}

    public async placeOrder() {
        // start from homepage
        await this.navService.goHome();

        // login customer first
        await this.navService.goto(this.accountService.loginPath);
        await this.accountService.login();
        await this.commonService.snapshotUntil('loggedin', 'seo-content');

        // click cart icon and go to cart page
        await this.cartService.navToCart();
        await this.commonService.snapshot('landcart');
        await this.cartService.addToCart(this.commonService.getAddToCartItems());
        await this.commonService.snapshot('addcart');
    }
}