import { Component, OnInit } from "@angular/core";
import { CategoryItemModel } from "./category-item.model";
import { category_list } from "./category_list";
import { first_news_list } from "./first_news_list";
import { GamingItemModel } from "./gaming-list.model";
import { gaming_list } from "./gaming_list";
import { FirstNewsItemModel } from "./first-news-list.model";
import { SecondNewsItemModel } from "./second-news-list.model";
import { second_news_list } from "./second-news_list";
import { ProductService } from "./products.service";
import { GamingService } from "./gaming.service";

@Component({
    selector: 'fm-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
    categories: CategoryItemModel[] = [];
    gamings: GamingItemModel[] = [];
    news1: FirstNewsItemModel[] = [];
    news2: SecondNewsItemModel[] = [];

    constructor(private ProductService: ProductService, private GamingService: GamingService) {


        for (var new1 of first_news_list) {
            console.log(new1);
            this.news1.push(new1);
        }
        for (var new2 of second_news_list) {
            console.log(new2);
            this.news2.push(new2);
        }
    }

    ngOnInit(): void {
        console.log("Fetch data");
        this.ProductService.getProducts().subscribe(data => {
            console.log(data);
            for (var category of data) {
                this.categories.push(category);
            }
        });
        this.GamingService.getGamings().subscribe(data => {
            console.log(data);
            for (var gaming of data) {
                this.gamings.push(gaming);
            }
        });
    }
}

