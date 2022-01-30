import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopNavBarComponent } from './header/topnavbar.component';
import { CategoryCardComponent } from './store/category.card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CarouselComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
