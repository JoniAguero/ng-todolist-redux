import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../../model/todo.model';
import { Store } from '@ngrx/store';

import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../../todo.actions';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-unit-item',
  templateUrl: './unit-item.component.html'
})
export class UnitItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputTextEdit') inputTextEdit: ElementRef;

  isEditing: boolean;
  checkField: FormControl;
  inputText: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    
    this.checkField = new FormControl(this.todo.estado);
    this.inputText = new FormControl(this.todo.texto, Validators.required);

    this.checkField.valueChanges.subscribe( () => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });

  }

  edit() {
    this.isEditing = true;
    setTimeout(() => {
      this.inputTextEdit.nativeElement.select();
    }, 1);
  }

  finishEdit() {
    this.isEditing = false;
    const action = new EditTodoAction(this.todo.id, this.inputText.value);
    this.store.dispatch(action);
  }

  delete () {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}
