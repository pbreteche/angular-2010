import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNavComponent } from './todo-nav.component';

describe('TodoNavComponent', () => {
  let component: TodoNavComponent;
  let fixture: ComponentFixture<TodoNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
