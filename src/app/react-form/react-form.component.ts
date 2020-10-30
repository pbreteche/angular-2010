import { Component, OnInit } from '@angular/core';
import {Severity, SEVERITY_VALUES, Todo} from '../todo';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {TodolistService} from '../todolist.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../custom.validator';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {
  todo$: Observable<Todo>;
  id = 0;

  severityValues: Severity[] = SEVERITY_VALUES;

  editForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      CustomValidator(),
    ]),
    deadline: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl(''),
    isOpen: new FormControl(true),
    severity: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageTitle: Title,
    private todoList: TodolistService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      this.id = +map.get('id');
      this.todo$ = this.todoList.fetch(+map.get('id'));
      // this.pageTitle.setTitle(this.todo.title);

      this.todo$.subscribe(todo => {
        if (!todo) {
          return;
        }
        this.editForm.patchValue(todo);
        this.editForm.get('deadline')
          .setValue(todo.deadline.toISOString().substring(0, 10));
      });
    });
  }

  get title(): AbstractControl { return this.editForm.get('title'); }

  update(): void {
    const todo = new Todo(
      this.editForm.get('title').value,
      new Date(this.editForm.get('deadline').value),
      this.editForm.get('description').value,
      this.editForm.get('severity').value,
      this.editForm.get('isOpen').value
    );
    this.todoList.update(this.id, todo);

    this.router.navigate(['detail', this.id]);
  }
}
