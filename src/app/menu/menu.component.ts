import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'congo-menu',
  template: `
      <ul>
      <li>
        <a [routerLinkActive]="['active']" [routerLink]="['/home']">Home</a>
      </li>
      <li>
        <a [routerLinkActive]="['active']" [routerLink]="['/saleCongo']">Congo for sale</a>
      </li>
      <li>
        <a [routerLinkActive]="['active']" [routerLink]="['/information']">Sport horses</a>
      </li>
     <li>
        <a [routerLinkActive]="['active']" [routerLink]="['/newsletter']">Newsletter</a>
      </li>     
      <li>
        <a [routerLinkActive]="['active']" [routerLink]="['/presidents']">Presidents</a>
      </li>
    </ul>
  `,
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  constructor() {
  }
}
