import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
