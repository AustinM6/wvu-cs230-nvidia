import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopNavBarComponent } from './header/topnavbar.component';
import { CategoryCardComponent } from './store/category.card.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopLayoutComponent } from './store/shop-layout.component';
import { HomeLayoutComponent } from './store/home-layout.component';
import { DriversLayoutComponent } from './store/drivers-layout.component';
import { SupportLayoutComponent } from './store/support-layout.component';
import { AccountLayoutComponent } from './store/account-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CarouselComponent,
    CategoryCardComponent,
    ShopLayoutComponent,
    HomeLayoutComponent,
    DriversLayoutComponent,
    SupportLayoutComponent,
    AccountLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
