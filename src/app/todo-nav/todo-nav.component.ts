import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodolistService} from '../todolist.service';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.scss']
})
export class TodoNavComponent implements OnInit {
  public data: Todo[] = [];

  constructor(private todoList: TodolistService) {
  }

  ngOnInit() {
    this.data = this.todoList.data;
  }
}
