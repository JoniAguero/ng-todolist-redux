import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { AddTodo } from '../todo.actions';
import { AppState } from '../todo.reduce';

@Component({
  selector: 'app-todo-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  todoText = new FormControl('', Validators.required);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTodo() {
    if (this.todoText.valid) {
      const todo = new AddTodo(this.todoText.value);
      this.store.dispatch(todo);
    }
  }

}
