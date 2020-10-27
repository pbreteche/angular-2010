import { Component } from '@angular/core';
import {Todo, todolist} from '../../mock/app.data';

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.scss']
})
export class TodoCreateFormComponent {
  newTodo: Todo = { title: '', deadline: ''};

  create() {
    todolist.push(this.newTodo);
    this.newTodo = { title: '', deadline: ''};
  }
}
