import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Todo, todolist} from '../../mock/app.data';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  @Input()
  todo: Todo = todolist[0];

  constructor(private route: ActivatedRoute, private title: Title) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.todo = todolist[map.get('id')];
      this.title.setTitle(this.todo.title);
    });
  }
}
