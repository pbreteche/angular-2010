import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Severity, Todo} from '../todo';
import {TodolistService} from '../todolist.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private todoList: TodolistService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      this.todo = this.todoList.data[map.get('id')];
      this.title.setTitle(this.todo.title);
    });
  }

  getClasses(): object {
    const classes = {
      'deadline-past': this.todo.deadline.getTime() < Date.now(),
    };

    classes[Severity[this.todo.severity]] = true;

    return classes;
  }
}
