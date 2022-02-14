import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-category-card',
    templateUrl: 'category.card.component.html',
    styleUrls: ['category.card.component.css']
})
export class CategoryCardComponent{
    @Input() img: string;
    @Input() name: string;
    @Input() description: string;

    constructor(){
        this.img = "";
        this.name = "missing name";
        this.description = "Missing description";
    }
}