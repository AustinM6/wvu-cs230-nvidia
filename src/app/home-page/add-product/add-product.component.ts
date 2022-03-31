import { Component, OnInit } from '@angular/core';
import { CategoryItemModel } from '../category-item.model';
import { FirstNewsItemModel } from '../first-news-list.model';
import { FirstNewsService } from '../first-news.service';
import { GamingItemModel } from '../gaming-list.model';
import { GamingService } from '../gaming.service';
import { ProductService } from '../products.service';
import { SecondNewsItemModel } from '../second-news-list.model';
import { SecondNewsService } from '../second-news.service';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductService, private gs:GamingService, private fs:FirstNewsService, private ss:SecondNewsService) { 

  }

  ngOnInit(): void {
  }

  addProduct(product:CategoryItemModel){
    console.log("You pressed add");
    console.log(product);
    this.ps.addProduct(product)
  }

  addGaming(gaming:GamingItemModel){
    console.log("You pressed add");
    console.log(gaming);
    this.gs.addGaming(gaming)
  }

  addFirstNew(news:FirstNewsItemModel){
    console.log("You pressed add");
    console.log(news);
    this.fs.addFirstNew(news)
  }

  addSecondNew(news2:SecondNewsItemModel){
    console.log("You pressed add");
    console.log(news2);
    this.ss.addSecondNew(news2)
  }

}
