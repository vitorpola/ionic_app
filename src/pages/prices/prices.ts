import { Component } from '@angular/core';
import { NavController, ModalController, ViewController} from 'ionic-angular';
import { NewItemModal } from '../prices/new';

@Component({
  selector: 'page-prices',
  templateUrl: 'prices.html'
})

export class PricesPage {
  public items = [{name:'Mão',price: 12.00},{name:'Pé',price:12.00}];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  openModal() {
    let modal = this.modalCtrl.create(NewItemModal);
    modal.present();
  }
}


