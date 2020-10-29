import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';
import {CustomValidator} from './custom.validator';

@Directive({
  selector: '[appCustomValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true },
  ]
})
export class CustomValidatorDirective {

  validate(control: AbstractControl): {[key: string]: any} | null {
    return CustomValidator()(control);
  }
}
