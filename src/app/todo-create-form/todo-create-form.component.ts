import { Component } from '@angular/core';
import {Todo} from '../todo';
import {TodolistService} from '../todolist.service';

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.scss']
})
export class TodoCreateFormComponent {

  constructor(private todoList: TodolistService) {
  }

  newTodo: Todo = new Todo('', null);

  create(): void {
    this.todoList.data.push(this.newTodo);
    this.newTodo = new Todo('', null);
  }
}
