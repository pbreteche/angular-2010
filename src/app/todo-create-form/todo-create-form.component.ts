import { Component } from '@angular/core';
import {Todo} from '../../mock/app.data';

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.scss']
})
export class TodoCreateFormComponent {
  newTodo: Todo = { title: '', deadline: ''};
}
