import {AbstractControl, ValidatorFn} from '@angular/forms';

export function CustomValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (3 > control.value.length) {
      return { custom: {value: control.value}};
    }

    return null;
  };
}
