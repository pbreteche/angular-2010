import {Component} from '@angular/core';
import {Severity, SEVERITY_VALUES, Todo} from '../todo';
import {TodolistService} from '../todolist.service';

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.scss']
})
export class TodoCreateFormComponent {
  severityValues: Severity[] = SEVERITY_VALUES;

  constructor(private todoList: TodolistService) {
  }

  newTodo: Todo = new Todo('', null);

  create(): void {
    this.newTodo.deadline = new Date(this.newTodo.deadline);
    this.todoList.add(this.newTodo);
    this.newTodo = new Todo('', null);
  }
}
