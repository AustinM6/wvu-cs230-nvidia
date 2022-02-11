import { Component } from "@angular/core";
import { CategoryItemModel } from "./category-item.model";
import { category_list } from "./category_list";
import { first_news_list } from "./first_news_list";
import { GamingItemModel } from "./gaming-list.model";
import { gaming_list } from "./gaming_list";
import { News1ItemModel } from "./news1-list.model";
import { SecondNewsItemModel } from "./second-news-list.model";
import { second_news_list } from "./second-news_list";

@Component({
    selector: 'fm-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent {
    categories: CategoryItemModel[] = [];
    gamings: GamingItemModel[] = [];
    news1: News1ItemModel[] = [];
    news2: SecondNewsItemModel[] = [];

    constructor() {
        for (var category of category_list) {
            console.log(category);
            this.categories.push(category);
        }
        for (var gaming of gaming_list) {
            console.log(gaming);
            this.gamings.push(gaming);
        }
        for (var new1 of first_news_list) {
            console.log(new1);
            this.news1.push(new1);
        }
        for (var new2 of second_news_list) {
            console.log(new2);
            this.news2.push(new2);
        }
    }
}