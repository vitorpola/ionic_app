import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ModalController, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-prices',
  templateUrl: 'prices.html'
})

export class PricesPage {
  public items = [{name:'Mão',price: 12.00},{name:'Pé',price:12.00}];

  constructor(public navCtrl: NavController, storage: Storage, public modalCtrl: ModalController) {
  }

 

  openModal() {
    let modal = this.modalCtrl.create(NewItemModal);
    modal.present();
  }
}


@Component({
  templateUrl: 'new.html'
})

export class NewItemModal {
  character;

  constructor(public viewCtrl: ViewController) {}

  addItem(p_name:string, p_price:number){
    var newItem = {name: p_name, price: p_price};
    this.dismiss()
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
