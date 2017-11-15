import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "../../services/user";

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService:UserService) {
  this.userService.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
