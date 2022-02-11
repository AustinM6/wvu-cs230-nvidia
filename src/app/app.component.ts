import { Component } from '@angular/core';
import { category_list } from './store/category_list';
import { gaming_list } from './store/gaming_list';
import { first_news_list } from './store/first_news_list';
import { second_news_list } from './store/second-news_list';
import { CategoryCardComponent } from './store/category.card.component';
import { CategoryItemModel } from './store/category-item.model';
import { GamingItemModel } from './store/gaming-list.model';
import { News1ItemModel } from './store/news1-list.model';
import { SecondNewsItemModel } from './store/second-news-list.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nvidia';
  
}
