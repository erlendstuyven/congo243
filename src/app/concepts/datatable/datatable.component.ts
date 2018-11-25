import {Component} from "@angular/core";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'congo-datatable',
  template: `
    <div>
      <h3>
        Company table
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/sorting/sorting-default.component.ts" target="_blank">
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="material"
        [rows]="rowsx"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="40"
        [scrollbarV]="true"
        >
        <ngx-datatable-column name="Company">
          <ng-template let-row="row" ngx-datatable-cell-template>
            {{row.company}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="CEO">
          <ng-template let-row="row" ngx-datatable-cell-template>
            {{row.ceo}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Gender">
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `
})

export class DatatableComponent {

  rowsx = [];

  ngOnInit() {
    this.rowsx = [
      {
        company: 'Coca cola company',
        ceo: 'Eric De Vuyst'
      },
      {
        company: 'Hewlett Packard',
        ceo: 'Johny De roy'
      },
      {
        company: ' A Fristi',
        ceo: 'Zatopec Attrnborgh'
      }
    ]
  }


}
