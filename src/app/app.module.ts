import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopNavBarComponent } from './header/topnavbar.component';
import { CategoryCardComponent } from './store/category.card.component';
import { AppRoutingModule } from './app-routing.module';
import { DesignerLinenLayoutComponent } from './store/designer-linen-layout.component';
import { HomeLayoutComponent } from './store/home-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CarouselComponent,
    CategoryCardComponent,
    DesignerLinenLayoutComponent,
    HomeLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
