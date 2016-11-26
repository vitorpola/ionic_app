import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { PricesPage } from '../pages/prices/prices';

@Component({
  templateUrl: '../pages/menu/menu.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;

  constructor(platform: Platform, menu: MenuController ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page){
    this.nav.setRoot(page);
  }
}
