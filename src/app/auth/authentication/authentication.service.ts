import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private basedUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    private signUpEndpoint:string = "signUp"
    public constructor(private http:HttpClient){

        }

    public signup(email:string, password:string){
        const requestPayLoad = {
            'email': email,
            'password': password,
            'returnSecureToken': true
        }
        return this.http.post(this.basedUrl + ':' + this.signUpEndpoint + '?' + 'key=' + environment.firebase.apiKey,  requestPayLoad);

    }
}