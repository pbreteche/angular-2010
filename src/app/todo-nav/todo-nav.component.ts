import {Component, EventEmitter, Output} from '@angular/core';
import {Todo, todolist} from '../../mock/app.data';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.scss']
})
export class TodoNavComponent {
  data = todolist;
}
