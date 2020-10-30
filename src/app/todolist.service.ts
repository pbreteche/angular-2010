import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private subject = new BehaviorSubject<Todo[]>([]);

  constructor(private http: HttpClient) {
    this.load();
  }

  load(): void {
    this.http.get('assets/todos.json').subscribe(
      (todos: {title: string, deadline: string}[]) => {
        this.subject.next(Todo.loadMultipleLiteral(todos));
      }
    );
  }

  get data(): Observable<Todo[]> {
    return this.subject.asObservable();
  }

  fetch(id: number): Observable<Todo|null> {
    return this.subject.pipe(
      map(todos => todos[id])
    );
  }

  update(id: number, todo: Todo): void {
    const todos = this.subject.getValue();
    todos[id] = todo;
    this.subject.next(todos);
  }

  add(newTodo: Todo): void {
    const todos = this.subject.getValue();
    todos.push(newTodo);
    this.subject.next(todos);
  }
}
