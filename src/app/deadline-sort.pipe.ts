import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from './todo';

@Pipe({
  name: 'deadlineSort'
})
export class DeadlineSortPipe implements PipeTransform {

  transform(value: Todo[], order: 'DESC'|'ASC' = 'ASC'): Todo[] {
    return value.sort(compareDeadline);
  }
}

function compareDeadline(a: Todo, b: Todo): -1|0|1 {
  if (a.deadline > b.deadline) {
    return 1;
  }
  if (a.deadline < b.deadline) {
    return -1;
  }
  return 0;
}
