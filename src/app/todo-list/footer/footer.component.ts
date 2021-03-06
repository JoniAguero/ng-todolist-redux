import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FilterTodoAction, typeFilters } from '../../filters/filters.actions';
import { AppState } from '../../app.reducer';
import { DeleteAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './footer.component.html'
})
export class FooterTodoComponent implements OnInit {

  pendientes: number;
  filter: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe( state => {
      
      this.pendientes = state.todos.filter( el => !el.completado).length;
      this.filter = state.filter;
      
    });

  }

  getAll() {
    const filter: typeFilters = 'todos';
    const action = new FilterTodoAction(filter);
    this.store.dispatch(action);
  }

  getActive() {
    const filter: typeFilters = 'pendientes';
    const action = new FilterTodoAction(filter);
    this.store.dispatch(action);
  }

  getCompleted() {
    const filter: typeFilters = 'completados';
    const action = new FilterTodoAction(filter);
    this.store.dispatch(action);
  }

  clearCompleted() {
    const action = new DeleteAllTodoAction();
    this.store.dispatch(action);
  }

}
