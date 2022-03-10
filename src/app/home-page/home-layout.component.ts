import { Component, OnInit } from "@angular/core";
import { CategoryItemModel } from "./category-item.model";
import { GamingItemModel } from "./gaming-list.model";
import { FirstNewsItemModel } from "./first-news-list.model";
import { SecondNewsItemModel } from "./second-news-list.model";
import { ProductService } from "./products.service";
import { GamingService } from "./gaming.service";
import { FirstNewsService } from "./first-news.service";
import { SecondNewsService } from "./second-news.service";

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

    constructor(private ProductService: ProductService, private GamingService: GamingService, private FirstNewsService: FirstNewsService, private SecondNewsService: SecondNewsService) {


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
        this.FirstNewsService.getNews().subscribe(data => {
            console.log(data);
            for (var new1 of data) {
                this.news1.push(new1);
            }
        });
        this.SecondNewsService.getSecondNews().subscribe(data => {
            console.log(data);
            for (var new2 of data) {
                this.news2.push(new2);
            }
        });
    }
}

