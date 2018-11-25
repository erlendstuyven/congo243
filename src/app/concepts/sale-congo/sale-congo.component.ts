import { Component } from '@angular/core';
import {IdentityData} from "../identity-data-input/identity-data";
import {RestConnectorService} from "../../rest-connector.service";
import {Observable} from "rxjs";
import {CongoInformation} from "./congo-information";

@Component({
  selector: 'congo-transition-regime',
  template: `
          <br />
        <h3>Congo sales</h3>
        <br />
        <congo-identity-data-input [identityData]="identityData">
        </congo-identity-data-input>
        <br />
        <br />
        
        <button id="congoName" (click)="showCongoName()" class="btn btn-outline-success">
          Congo name
        </button>
        
        <button id="congoInformation" (click)="showCongoInformation()" class="btn btn-outline-success">
          Congo info
        </button>
        
        <br />
        <br />
        
        <h5>{{result}}</h5>
        <h5>{{congoInformation}}</h5>
  `
})

export class SaleCongo {
  private restConnectorService: RestConnectorService;

  constructor(restConnectorService: RestConnectorService) {
    this.restConnectorService = restConnectorService;
  }

  identityData: IdentityData = <IdentityData> {};

  result: string;

  congoInformation: CongoInformation;

  showCongoName = () => {
      this.restConnectorService.getCongoName()
        .subscribe(
          data => this.result = data.text(),
          error => alert(error),
          () => console.log("Congo information succesful transferred")
        )
  }

    showCongoInformation = () => {
      let subscribe = this.restConnectorService.getCongoInformation()
        .subscribe(
          data => this.result = JSON.stringify(data),
          error => alert(error),
          () => console.log("Congo information succesful transferred")
        );

    }



}
