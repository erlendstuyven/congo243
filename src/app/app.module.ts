import {BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule } from '@angular/http';

import {routes} from "./app.routing";
import {RouterModule} from "@angular/router";
import {IdentityDataInputComponent } from './concepts/identity-data-input/identity-data-input.component';
import {NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {NgModule} from "@angular/core";

import {AppComponent } from './app.component';
import {MenuComponent } from './menu/menu.component';
import {RestConnectorService} from "./rest-connector.service";
import {Home} from './home/home.component';
import {Information} from "./concepts/information/information.component";
import {InformationChild} from "./concepts/information/information-child.component";
import {Newsletter} from "./concepts/newsletter/news-letter.component";
import {InputComponent} from "./shared/components/input/input.component";
import {DatatableComponent} from "./concepts/datatable/datatable.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {SportCongo} from "./concepts/sport-congo/sport-congo.component";
import {SaleCongo} from "./concepts/sale-congo/sale-congo.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    NgxDatatableModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    SportCongo,
    SaleCongo,
    IdentityDataInputComponent,
    Information,
    InformationChild,
    Home,
    Newsletter,
    InputComponent,
    DatatableComponent
  ],
  providers: [RestConnectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
