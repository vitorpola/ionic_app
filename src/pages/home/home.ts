import { Component } from '@angular/core';
import { NewItemModal } from '../prices/new';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: Array<{cliente: string, date: any}>;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
     this.tasks = [
      { cliente: 'Taina', date:  new Date("10/10/2016 10:13:00")},
      { cliente: 'Neusa', date:  new Date("10/10/2016 10:13:00") },
      { cliente: 'Renata', date:  new Date("10/10/2016 10:13:00") },
      { cliente: 'Ide', date:  new Date("10/10/2016 10:13:00") }
    ];
  }

   openModal() {
    let modal = this.modalCtrl.create(NewItemModal);
    modal.present();
  }

}
