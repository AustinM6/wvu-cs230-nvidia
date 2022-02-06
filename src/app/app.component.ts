import { Component } from '@angular/core';
import { category_list } from './store/category_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nvidia';
  category_list: any = category_list;

  constructor() {

  }
}
