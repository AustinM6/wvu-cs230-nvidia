import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CategoryItemModel } from "./category-item.model";


@Injectable({
    providedIn: 'root'
})
export class ProductService{

    constructor(private db: AngularFireDatabase) { 

    }


    public getProducts(){
       return this.db.list<CategoryItemModel>("products").valueChanges();
    }

    public getProduct(index:number){
       
    }
}