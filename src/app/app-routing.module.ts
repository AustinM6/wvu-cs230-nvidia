import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopLayoutComponent } from './layouts/shop-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { DriversLayoutComponent } from './layouts/drivers-layout.component';
import { SupportLayoutComponent } from './layouts/support-layout.component';
import { AccountLayoutComponent } from './layouts/account-layout.component';


const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent
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
