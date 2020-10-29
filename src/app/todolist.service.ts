import {Inject, Injectable} from '@angular/core';
import {data} from '../mock/app.data';
import {Todo} from './todo';
import {APP_CONFIG_TOKEN} from './app.module';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  data: Todo[];

  constructor(@Inject(APP_CONFIG_TOKEN) private config) {
    this.data = Todo.loadMultipleFromJson(data);
  }
}
