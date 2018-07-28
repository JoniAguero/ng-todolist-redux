import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../model/todo.model';
import { AppState } from '../todo.reduce';

@Component({
  selector: 'app-todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  todos: Todo [] = [];

  constructor(private store: Store<AppState>) {
    this.store.subscribe( state => {
      this.todos = state.todos;
    });
  }

  ngOnInit() {
  }

}
