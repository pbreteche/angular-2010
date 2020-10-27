import { Component } from '@angular/core';
import {Todo, todolist} from '../mock/app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  selectedTodo = todolist[0];

}
