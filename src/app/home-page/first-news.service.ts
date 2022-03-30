import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FirstNewsItemModel } from "./first-news-list.model";

@Injectable({
    providedIn: 'root'
})
export class FirstNewsService{

    constructor(private db:AngularFireDatabase){

    }

    public getNews(){
        return this.db.list<FirstNewsItemModel>("news1").valueChanges();
    }

    public getNew(index:number){
    }

    public addFirstNew(news1:FirstNewsItemModel){
        this.db.list<FirstNewsItemModel>("news1").push(news1);
    }
}