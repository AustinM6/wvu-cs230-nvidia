import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { GamingItemModel } from "./gaming-list.model";

@Injectable({
    providedIn: 'root'
})
export class GamingService{
    
    constructor(private db: AngularFireDatabase){

    }

    public getGamings(){
        return this.db.list<GamingItemModel>("gamings").valueChanges();
    }

    public getGaming(index:number){
    }
}