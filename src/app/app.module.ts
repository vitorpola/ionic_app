import { NgModule, ErrorHandler } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TasksPage } from '../pages/tasks/tasks';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PricesPage } from '../pages/prices/prices';
import { NewItemModal } from '../pages/prices/new';

@NgModule({
  declarations: [
    MyApp,
    TasksPage,
    ContactPage,
    HomePage,
    PricesPage,   
    NewItemModal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TasksPage,
    ContactPage,
    HomePage,
    PricesPage,
    NewItemModal
  ],
  providers: [Storage, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
