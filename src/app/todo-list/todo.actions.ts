import { Action } from '@ngrx/store';

export const ADD = 'ADD TODO';

export class AddTodo implements Action {
    readonly type = ADD;
    constructor(public texto: string) { }
}

export type typeActions =
    AddTodo;
