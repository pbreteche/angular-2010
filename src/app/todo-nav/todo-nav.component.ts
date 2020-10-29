import {Component} from '@angular/core';
import {TodolistService} from '../todolist.service';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.scss']
})
export class TodoNavComponent {
  constructor(public todoList: TodolistService) {}
}
