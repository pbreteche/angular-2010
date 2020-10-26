import { Component } from '@angular/core';
import { todolist} from '../mock/app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  data = todolist;
}
