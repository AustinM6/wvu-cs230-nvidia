import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FirstNewsItemModel } from "./first-news-list.model";

@Injectable({
    providedIn: 'root'
})
export class FirstNewsService{
    private baseUrl:string = 'https://nvidia-de14c-default-rtdb.firebaseio.com/';
    private newsEndPoint:string = 'news.json';

    constructor(private http:HttpClient){

    }

    public getNews(){
        return this.http.get<FirstNewsItemModel []>(this.baseUrl + this.newsEndPoint);
    }

    public getNew(index:number){
        return this.http.get<FirstNewsItemModel []>(this.baseUrl + 'newss/' + index + '.json')
    }
}