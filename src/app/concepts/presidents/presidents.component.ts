import {Component} from "@angular/core";
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {President} from "./president";

@Component({
  selector: 'congo-presidents',
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
      <ngx-datatable class='material striped' 
        [rows]="rowsx"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="40"
        [scrollbarV]="true"
        >
        <ngx-datatable-column name="Firstname">
          <ng-template let-row="row">
            {{row.firstname}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Lastname">
          <ng-template let-row="row">
            {{row.lastname}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Birthyear">
           <ng-template let-row="row">
            {{row.birthyear}}
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `,
  styleUrls: ['/../../css/general.css']
})

export class Presidents {

  rowsx: President[] = [];

  ngOnInit() {


    this.rowsx = [
        <President>{
          firstname: 'Sese Seko',
          lastname: 'Mobutu',
          birthyear: '1935'
        },
        <President>{
          firstname: 'Joseph',
          lastname: 'Kabila',
          birthyear: '1975'
        },
      ]
  }


}
