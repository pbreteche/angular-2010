import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

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
}
