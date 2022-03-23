import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { SecondNewsItemModel } from "./second-news-list.model";

@Injectable({
    providedIn: 'root'
})
export class SecondNewsService{

    constructor(private db: AngularFireDatabase){

    }

    public getSecondNews(){
        return this.db.list<SecondNewsItemModel>("news2").valueChanges();
    }

    public getSecondNew(index:number){
    }
}