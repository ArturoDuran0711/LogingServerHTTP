//Para utilizar el decorador @Injectable
import { Injectable } from "@angular/core";
//Para realizar la peticion HTTP
import { Http } from "@angular/http";

@Injectable()
export class UserService{
    private http:any; //Se utiliza en esta clase por eso es provado
    public user:any; //Guardo datos que me regrese el JSON y es publico porque desde cualquier clase se puede acceder
    constructor(http:Http){
        this.http = http;
    }

    getUser(){
        this.http.get("http://localhost:8080/eje06.json")
            .subscribe(data=>{
                this.user =data.json();
            }, err=>{
                console.log("err");
            }); //se ejecutara despues de una peticion asincrona
    }
}
