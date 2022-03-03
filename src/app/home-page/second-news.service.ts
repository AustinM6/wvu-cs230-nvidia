import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FirstNewsItemModel } from "./first-news-list.model";
import { SecondNewsItemModel } from "./second-news-list.model";

@Injectable({
    providedIn: 'root'
})
export class SecondNewsService{
    private baseUrl:string = 'https://nvidia-de14c-default-rtdb.firebaseio.com/';
    private secondNewsEndPoint:string = 'news.json';

    constructor(private http:HttpClient){

    }

    public getSecondNews(){
        return this.http.get<SecondNewsItemModel []>(this.baseUrl + this.secondNewsEndPoint);
    }

    public getSecondNew(index:number){
        return this.http.get<SecondNewsItemModel []>(this.baseUrl + 'newss/' + index + '.json')
    }
}