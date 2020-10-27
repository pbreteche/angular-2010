import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoNavComponent} from './todo-nav/todo-nav.component';
import {TodoCreateFormComponent} from './todo-create-form/todo-create-form.component';

const routes: Routes = [
  { path: '', component: TodoNavComponent },
  { path: 'new', component: TodoCreateFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
