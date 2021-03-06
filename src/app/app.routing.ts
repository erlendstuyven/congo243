import {Routes} from '@angular/router';
import {Home} from "./home/home.component";
import {Information} from "./concepts/information/information.component";
import {Newsletter} from "./concepts/newsletter/news-letter.component";
import {Presidents} from "./concepts/presidents/presidents.component";
import {SportCongo} from "./concepts/sport-congo/sport-congo.component";
import {SaleCongo} from "./concepts/sale-congo/sale-congo.component";

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'saleCongo',
    component: SaleCongo
  },
  {
    path: 'information',
    component: Information
  },
  {
    path: 'newsletter',
    component: Newsletter
  },
  {
    path: 'presidents',
    component: Presidents
  }
];
