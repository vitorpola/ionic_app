import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'new.html'
})

export class NewItemModal {

  constructor(public viewCtrl: ViewController) {}

  submit(itemInfo) {
    // Instantiate and save when the form is submitted
    console.log(itemInfo);
    this.viewCtrl.dismiss();
    //this.item = new Item(itemInfo);
    //this.item.save();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}