import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../model/todo.model';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  todos: Todo [] = [];

  constructor(private store: Store<AppState>) {
    this.store.subscribe( state => {
      
      switch (state.filter) {
        case "pendientes":
          this.todos = state.todos.filter ( el => !el.completado);
          break;
        case "completados":
          this.todos = state.todos.filter(el => el.completado);
          break;
        default:
        this.todos = state.todos;
          break;
      }
      
    });
  }

  ngOnInit() {
  }

}
