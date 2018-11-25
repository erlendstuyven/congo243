import {
  AfterViewInit, Component, EventEmitter, Input, Output, ViewChild
} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'congo-input',
  template: `
    <form #childInputForm="ngForm" novalidate [id]="getFormId()">
      <div class="form-group"
           [ngClass]="{'has-danger' : form._submitted && !inputValue?.valid}">
        <div class="row">
          <label for="{{id}}" class="col-sm-4 col-form-label font-weight-bold">{{ label }}</label>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <input 
                   type="text" 
                   class="form-control"
                   [id]="id" 
                   [name]="id" 
                   [ngModel]="value"
                   (ngModelChange)="valueChange.emit($event)" 
                   #inputValue="ngModel" 
                   title="{{ form._submitted && !inputValue?.valid ? errorMessage : ''}}"
                   [ngClass]="{'form-control-danger' : form._submitted && !inputValue?.valid}"
                   [pattern]="textMask"
                   [attr.maxLength]="maxLength ? maxLength : null"
                   [attr.minLength]="minLength ? minLength : null"
                   [required]="isRequired ? '' : null"
                   [placeholder]="myPlaceholder"
                   >
          </div>
        </div>
      </div>
    </form>
  `
})
export class InputComponent implements AfterViewInit {
  @Input() form;
  @Input() value: string;
  @Input() id: string;
  @Input() pattern: string = '.*';
  @Input() label: string;
  @Input() errorMessage: string = 'field is required';
  @Input() isRequired: boolean = false;
  @Input() maxLength: number;
  @Input() minLength: number;
  @Input() myPlaceholder: string;
  @Input() textMask: string;


  @ViewChild('childInputForm') thisForm: NgForm;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  ngAfterViewInit(): void {
    if (!this.form.form.contains(this.getFormId())) {
      this.form.form.addControl(this.getFormId(), this.thisForm.form);
    }
  }

  getFormId = () : string => {
    return 'form_' + this.id;
  }

}
