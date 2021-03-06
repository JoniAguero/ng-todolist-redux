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
  filter: any;

  constructor(private store: Store<AppState>) {
    this.store.subscribe( state => {
      
      this.todos = state.todos;
      this.filter = state.filter;
      
    });
  }

  ngOnInit() {
  }

}
