import { Component } from '@angular/core';

/**
 * Generated class for the DateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'date',
  templateUrl: 'date.html'
})
export class DateComponent {

  text: string;

  constructor() {
    console.log('Hello DateComponent Component');
    this.text = 'Hello World';
  }

}
