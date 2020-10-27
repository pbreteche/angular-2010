import {Component, Input} from '@angular/core';
import {Todo, todolist} from '../../mock/app.data';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent {
  @Input()
  todo: Todo = todolist[0];
}
