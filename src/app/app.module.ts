import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopNavBarComponent } from './header/topnavbar.component';
import { CategoryCardComponent } from './cards/category.card.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopLayoutComponent } from './shop-page/shop-layout.component';
import { HomeLayoutComponent } from './home-page/home-layout.component';
import { DriversLayoutComponent } from './drivers-page/drivers-layout.component';
import { SupportLayoutComponent } from './support-page/support-layout.component';
import { AccountLayoutComponent } from './account-page/account-layout.component';
import { FooterComponent } from './footer/footer.component';
import { SecondNavBarComponent } from './header/secondnavbar.component';
import { ShopCarouselComponent } from './carousel/shop-carousel.component';
import { ShopNavBarComponent } from './header/shop-navbar.component';
import { SupportCardComponent } from './cards/support.card.component';
import { ShopCardComponent } from './cards/shop.card.component';
import { SecondFooterComponent } from './footer/second-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component'
import { DriversNavBarComponent } from './header/drivers-navbar.component';
import { SecondDriversNavBarComponent } from './header/second-drivers-navbar.component';


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
    AccountLayoutComponent,
    FooterComponent,
    SecondNavBarComponent,
    ShopCarouselComponent,
    ShopNavBarComponent,
    SupportCardComponent,
    ShopCardComponent,
    SecondFooterComponent,
    UserInfoComponent,
    DriversNavBarComponent,
    SecondDriversNavBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
