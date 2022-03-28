import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopLayoutComponent } from './shop-page/shop-layout.component';
import { HomeLayoutComponent } from './home-page/home-layout.component';
import { DriversLayoutComponent } from './drivers-page/drivers-layout.component';
import { SupportLayoutComponent } from './support-page/support-layout.component';
import { AccountLayoutComponent } from './account-page/account-layout.component';
import { AddProductComponent } from './home-page/add-product/add-product.component';
import { AddGamingComponent } from './home-page/add-gaming/add-gaming.component';


const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent
  },
  {
    path: 'admin-product', component: AddProductComponent 
  },
  {
    path: 'admin-gaming', component: AddGamingComponent 
  },
  {
    path: 'shop', component: ShopLayoutComponent
  },
  {
    path: 'home', component: HomeLayoutComponent
  },
  {
    path: 'drivers', component: DriversLayoutComponent
  },
  {
    path: 'support', component: SupportLayoutComponent
  },
  {
    path: 'account', component: AccountLayoutComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
