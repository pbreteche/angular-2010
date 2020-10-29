import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  data: Todo[] = [];

  constructor(private http: HttpClient) {
    this.load();
  }

  load(): void {
    this.http.get('assets/todos.json').subscribe(
      (todos: {title: string, deadline: string}[]) => {
        this.data.push(...Todo.loadMultipleLiteral(todos));
      }
    );
  }
}
