import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frenchDate'
})
export class FrenchDatePipe implements PipeTransform {

  transform(value: Date, fullYear= true): string {
    return `${value.getDate()}/${+value.getMonth() + 1}/${
      fullYear ? value.getFullYear() : value.getFullYear() % 100}`;
  }

}
