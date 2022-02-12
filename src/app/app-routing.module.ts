import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopLayoutComponent } from './store/shop-layout.component';
import { HomeLayoutComponent } from './store/home-layout.component';
import { DriversLayoutComponent } from './store/drivers-layout.component';


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
  }
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
