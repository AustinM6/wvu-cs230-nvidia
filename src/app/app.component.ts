import { Component } from '@angular/core';
import { category_list } from './store/category_list';
import { gaming_list } from './store/gaming_list';
import { news_list } from './store/news_list';
import { news2_list } from './store/news2_list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nvidia';
  category_list: any = category_list;
  gaming_list: any = gaming_list;
  news_list: any = news_list;
  news2_list: any = news2_list;

  constructor() {

  }
}
