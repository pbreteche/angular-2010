import { Component, OnInit } from '@angular/core';
import {Severity, SEVERITY_VALUES, Todo} from '../todo';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {TodolistService} from '../todolist.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {
  todo: Todo;

  severityValues: Severity[] = SEVERITY_VALUES;

  editForm = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    deadline: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl(''),
    meta: new FormGroup({
      isOpen: new FormControl(true),
      severity: new FormControl(Severity.Light),
    })
  });

  constructor(
    private route: ActivatedRoute,
    private pageTitle: Title,
    private todoList: TodolistService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      this.todo = this.todoList.data[map.get('id')];
      this.pageTitle.setTitle(this.todo.title);

      this.editForm.patchValue(this.todo);
      this.editForm.get('deadline')
        .setValue(this.todo.deadline.toISOString().substring(0, 10));
    });
  }

  get title(): AbstractControl { return this.editForm.get('title'); }
}
