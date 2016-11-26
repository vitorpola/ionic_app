import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  tasks: Array<{cliente: string, date: any}>;

  constructor(public navCtrl: NavController) {
    this.tasks = [
      { cliente: 'Taina', date:  new Date("10/10/2016 10:13:00")},
      { cliente: 'Neusa', date:  new Date("10/10/2016 10:13:00") },
      { cliente: 'Renata', date:  new Date("10/10/2016 10:13:00") },
      { cliente: 'Ide', date:  new Date("10/10/2016 10:13:00") }
    ];

  }

}
