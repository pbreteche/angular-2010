import { Component, OnInit } from '@angular/core';
import {Severity, SEVERITY_VALUES, Todo} from '../todo';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {TodolistService} from '../todolist.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../custom.validator';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {
  todo: Todo;
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
    meta: new FormGroup({
      isOpen: new FormControl(true),
      severity: new FormControl(Severity.Light),
    })
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
      this.todo = this.todoList.data[this.id];
      this.pageTitle.setTitle(this.todo.title);

      this.editForm.patchValue(this.todo);
      this.editForm.get('deadline')
        .setValue(this.todo.deadline.toISOString().substring(0, 10));
    });
  }

  get title(): AbstractControl { return this.editForm.get('title'); }

  update(): void {
    this.todo.title = this.editForm.get('title').value;
    this.todo.deadline = new Date(this.editForm.get('deadline').value);
    this.todo.description = this.editForm.get('description').value;
    this.todo.isOpen = this.editForm.get('meta').get('isOpen').value;
    this.todo.severity = this.editForm.get('meta').get('severity').value;

    this.router.navigate(['detail', this.id]);
  }
}
