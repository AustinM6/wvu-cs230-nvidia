import { Component } from "@angular/core";
import { ShopItemModel } from "./shop-item.model";
import { ShopItem2Model } from "./shop-item2.model";
import { ShopItem3Model } from "./shop-item3.model";
import { shop_list } from "./shop_list";
import { shop_list2 } from "./shop_list2";
import { shop_list3 } from "./shop_list3";

@Component({
    selector: 'fm-shop',
    templateUrl: 'shop-layout.component.html',
    styleUrls: ['shop-layout.component.css']
})
export class ShopLayoutComponent {
    shops: ShopItemModel[] = [];
    shops2: ShopItem2Model[] = [];
    shops3: ShopItem3Model[] = [];

    constructor() {

        for (var shop of shop_list) {
            console.log(shop);
            this.shops.push(shop);
        }
        for (var shop2 of shop_list2) {
            console.log(shop2);
            this.shops2.push(shop2);
        }
        for (var shop3 of shop_list3) {
            console.log(shop3);
            this.shops3.push(shop3);
        }
    }
}