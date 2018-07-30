import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FilterTodoAction, typeFilters } from '../../filters/filters.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './footer.component.html'
})
export class FooterTodoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
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

}
