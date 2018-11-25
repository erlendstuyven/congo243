import { Component } from '@angular/core';
import { IdentityData} from "../identity-data-input/identity-data";

@Component({
  selector: 'congo-sport',
  template: `
    <br />
    <h3 id="newRegimeTitle">Congo</h3>
    
    <br />
    <congo-identity-data-input [identityData]="identityData">
    </congo-identity-data-input>
    <br />
    <br />
    
    <button id="confirmNewRegime" (click)="showResult()" class="btn btn-outline-success" >
      Congo sport horses
    </button>
    
    <br />
    <br />


    {{result}}
  `
})
export class SportCongo {

  identityData: IdentityData = <IdentityData> {};

  result: string;
  constructor() { }

  showResult = () => {
    if (this.identityData.name && this.identityData.yearOfBirth) {
      this.result = 'Aanvraag nieuw regime voor ' + this.identityData.name + '-' + this.identityData.yearOfBirth;
    } else {
      this.result = 'BOOOOOM';
    }
  }

}
