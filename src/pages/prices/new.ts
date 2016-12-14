import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ViewController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  templateUrl: 'new.html'
})

export class NewItemModal {
  formItem : any = {};

  constructor(public viewCtrl: ViewController,public fb: FormBuilder, public toastCtrl: ToastController) {
      this.formItem = this.fb.group({
          name:['',Validators.required],
          price:['',Validators.required]
      })
  }

  submit() {
    console.log(this.formItem.value);
    this.viewCtrl.dismiss();
     let toast = this.toastCtrl.create({
      message: 'Item cadastrado com sucesso',
      duration: 3000
    });
    toast.present();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}