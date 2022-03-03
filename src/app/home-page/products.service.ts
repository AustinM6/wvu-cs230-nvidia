import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryItemModel } from "./category-item.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private baseUrl:string = 'https://nvidia-de14c-default-rtdb.firebaseio.com/';
    private productsEndPoint:string = 'products.json';

    constructor(private http:HttpClient){

    }

    public getProducts(){
        return this.http.get<CategoryItemModel []>(this.baseUrl + this.productsEndPoint);
    }

    public getProduct(index:number){
        return this.http.get<CategoryItemModel []>(this.baseUrl + 'products/' + index + '.json')
    }
}