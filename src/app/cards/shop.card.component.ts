import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-shop-card',
    templateUrl: 'shop.card.component.html',
    styleUrls: ['shop.card.component.css']
})
export class ShopCardComponent{
    @Input() img: string;
    @Input() name: string;
    @Input() description: string;

    constructor(){
        this.img = "";
        this.name = "missing name";
        this.description = "Missing description";
    }
}