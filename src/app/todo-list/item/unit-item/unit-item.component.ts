import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../../model/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../todo.reduce';
import { ToggleTodoAction } from '../../todo.actions';

@Component({
  selector: 'app-unit-item',
  templateUrl: './unit-item.component.html'
})
export class UnitItemComponent implements OnInit {

  @Input() todo: Todo;

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

}
