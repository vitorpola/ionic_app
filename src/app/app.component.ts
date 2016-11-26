import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { TasksPage } from '../pages/tasks/tasks';
import { ContactPage } from '../pages/contact/contact';
import { PricesPage } from '../pages/prices/prices';

@Component({
  templateUrl: '../pages/menu/menu.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, menu: MenuController ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.show();
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Agenda', component: TasksPage, icon: 'calendar' },
      { title: 'Clientes', component: ContactPage, icon: 'people' },
      { title: 'Preços', component: PricesPage, icon: 'logo-usd' }
    ];
  }

  openPage(page: any){
    this.nav.setRoot(page.component);
  }
}
