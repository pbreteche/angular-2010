import { Injectable } from '@angular/core';
import {data} from '../mock/app.data';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  data: Todo[];

  constructor() {
    this.data = Todo.loadMultipleFromJson(data);
  }
}
