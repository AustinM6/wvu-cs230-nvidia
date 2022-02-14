import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopNavBarComponent } from './header/topnavbar.component';
import { CategoryCardComponent } from './cards/category.card.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopLayoutComponent } from './layouts/shop-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { DriversLayoutComponent } from './layouts/drivers-layout.component';
import { SupportLayoutComponent } from './layouts/support-layout.component';
import { AccountLayoutComponent } from './layouts/account-layout.component';


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
