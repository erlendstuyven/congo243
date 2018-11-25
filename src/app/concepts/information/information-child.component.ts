import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'congo-information-child',
  template: `
    <div>
      <h4>'Filly name = Laura Bea Z'</h4>
      <br>
      <input type="button" value="Show parent information" (click)="showStallionInformation()" class="btn btn-outline-success">
       <br>
     </div>
    `
})

export class InformationChild {

  @Output() messageToParent: EventEmitter<string> = new EventEmitter<string>();

  showStallionInformation = () : void => {
    this.messageToParent.emit("Stallion is Dominator / Mare is Canasta ");
  }
}
