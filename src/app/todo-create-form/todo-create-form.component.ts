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

  newTodo: Todo = { title: '', deadline: new Date()};

  create() {
    this.todoList.data.push(this.newTodo);
    this.newTodo = { title: '', deadline: new Date()};
  }
}
