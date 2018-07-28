import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt
import { todoReducer } from './todo-list/todo.reduce';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './todo-list/main/main.component';
import { ItemComponent } from './todo-list/item/item.component';
import { HeaderComponent } from './todo-list/header/header.component';
import { FooterTodoComponent } from './todo-list/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    ItemComponent,
    HeaderComponent,
    FooterTodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
