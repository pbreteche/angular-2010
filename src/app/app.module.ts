import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoNavComponent } from './todo-nav/todo-nav.component';
import { TodoCreateFormComponent } from './todo-create-form/todo-create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent,
    TodoNavComponent,
    TodoCreateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
