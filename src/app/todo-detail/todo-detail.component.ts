import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Severity, Todo} from '../todo';
import {TodolistService} from '../todolist.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo$: Observable<Todo>;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private todoList: TodolistService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.todo$ = this.todoList.fetch(+paramMap.get('id'));
      this.title.setTitle('to replace');
    });
  }

  getClasses(): Observable<object> {
    return this.todo$.pipe(
      map(todo => {
        if (!todo) {
          return {};
        }

        const classes = {
          'deadline-past': todo.deadline.getTime() < Date.now(),
        };

        classes[Severity[todo.severity]] = true;

        return classes;
      })
    );
  }
}
