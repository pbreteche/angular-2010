import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
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
    { provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
