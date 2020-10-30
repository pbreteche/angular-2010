import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNavComponent } from './todo-nav.component';
import {Observable, of} from 'rxjs';
import {Todo} from '../todo';
import {TodolistService} from '../todolist.service';
import {DebugElement, Pipe, PipeTransform} from '@angular/core';
import {By} from '@angular/platform-browser';

class MockTodoListService {
  get data(): Observable<Todo[]> {
    return of([
      new Todo('titre1', new Date('2020-10-28')),
      new Todo('titre2', new Date('2020-10-29')),
    ]);
  }
}

@Pipe({
  name: 'deadlineSort'
})
class MockDeadlineSortPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return value;
  }
}

describe('TodoNavComponent', () => {
  let component: TodoNavComponent;
  let fixture: ComponentFixture<TodoNavComponent>;
  let items: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoNavComponent, MockDeadlineSortPipe ],
      providers: [
        { provide: TodolistService, useClass: MockTodoListService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    items = fixture.debugElement.queryAll(By.css('li'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hav 2 elements', () => {
    expect(items.length).toBe(2);
  });
});
