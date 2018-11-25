import {Component} from "@angular/core";

@Component({
  selector: 'congo-information',
  template: `
   <div class="col-md-4">
      <br>
      <congo-information-child (messageToParent)="parentsInformation = $event" > </congo-information-child>
      <br>
      <div>
        <h4 class="well"> {{parentsInformation}} </h4>
      </div>
      <br>
    </div>
`
})

export class Information {

  parentsInformation: string;

}
