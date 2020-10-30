import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

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
    this.http.put('todo/' + id, todo, {
      headers: {
        Accept: 'application/json',
      }
    }).pipe(
      catchError(this.handleError)
    ).subscribe(successResponse => console.log(successResponse));
    this.subject.next(todos);
  }

  add(newTodo: Todo): void {
    const todos = this.subject.getValue();
    todos.push(newTodo);
    this.http.post('todo', newTodo).pipe(
      catchError(this.handleError)
    ).subscribe(successResponse => console.log(successResponse));
    this.subject.next(todos);
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
