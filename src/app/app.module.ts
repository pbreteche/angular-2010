import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, NG_VALIDATORS, ReactiveFormsModule} from '@angular/forms';
import '@angular/common/locales/global/fr';

import { AppComponent } from './app.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoNavComponent } from './todo-nav/todo-nav.component';
import { TodoCreateFormComponent } from './todo-create-form/todo-create-form.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FrenchDatePipe } from './french-date.pipe';
import { DeadlineSortPipe } from './deadline-sort.pipe';
import { ParityDirective } from './parity.directive';
import { RandomDirective } from './random.directive';
import { ReactFormComponent } from './react-form/react-form.component';
import { CustomValidatorDirective } from './custom-validator.directive';
import {TodolistService} from './todolist.service';

const APP_CONFIG = {
  pagination: true,
  todoPerPage: 10,
};

export const APP_CONFIG_TOKEN = new InjectionToken('APP_CONFIG');

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent,
    TodoNavComponent,
    TodoCreateFormComponent,
    NotFoundComponent,
    FrenchDatePipe,
    DeadlineSortPipe,
    ParityDirective,
    RandomDirective,
    ReactFormComponent,
    CustomValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true },
    TodolistService,
    { provide: TodolistService, useClass: TodolistService },
    { provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG},
    { provide: TodolistService, useFactory: (param: string) => {
      // pré-traitement pour instancier le service
      return new TodolistService(APP_CONFIG);
    }, deps: ['un paramètre']},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
