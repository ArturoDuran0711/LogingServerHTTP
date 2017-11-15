import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from "../../services/user";
import { DetailPage } from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public email:string;
  public password:string;
  public error:boolean;
  public correcto:boolean;


  constructor(public navCtrl: NavController, public userService:UserService) {
    this.email="paarcrespodu@ittepic.edu.mx";
    this.password="12345" 
    this.userService=userService;
    this.error=false;
    this.correcto=false;
    this.userService.getUser();
  }

  login(){
    console.log("email: "+this.email);
    console.log("password: "+this.password);

    if(this.email==this.userService.user.email && this.password==this.userService.user.password){
      console.log("Datos correctos");
      this.error=false;
      this.correcto=true;
      this.navCtrl.push(DetailPage);
    }
    else{
      console.log("Datos incorrectos");
      this.error=true;
      this.correcto=false;
    }
  }
}
