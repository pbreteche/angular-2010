import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoNavComponent} from './todo-nav/todo-nav.component';
import {TodoCreateFormComponent} from './todo-create-form/todo-create-form.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ReactFormComponent} from './react-form/react-form.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TodoNavComponent },
  { path: 'new', component: TodoCreateFormComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: TodoDetailComponent },
  { path: 'edit/:id', component: ReactFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
