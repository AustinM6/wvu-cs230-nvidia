import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GamingItemModel } from "./gaming-list.model";

@Injectable({
    providedIn: 'root'
})
export class GamingService{
    private baseUrl:string = 'https://nvidia-de14c-default-rtdb.firebaseio.com/';
    private gamingsEndPoint:string = 'gamings.json';

    constructor(private http:HttpClient){

    }

    public getGamings(){
        return this.http.get<GamingItemModel []>(this.baseUrl + this.gamingsEndPoint);
    }

    public getGaming(index:number){
        return this.http.get<GamingItemModel []>(this.baseUrl + 'gamings/' + index + '.json')
    }
}