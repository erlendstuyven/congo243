import {Component, Input} from '@angular/core';
import {IdentityData} from "./identity-data";

@Component({
  selector: 'congo-identity-data-input',
  template: `
      Property name : <input type="text" name="month" id="month" placeholder="Property name" [(ngModel)]="identityData.month"/>
    <br />
    <br />
    Year of construction : <input type="text" name="year" id="year" placeholder="Year" [(ngModel)]="identityData.year"/>
  `
})
export class IdentityDataInputComponent {

  @Input()
  public identityData: IdentityData;

  constructor() { }


}
