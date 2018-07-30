import { Action } from '@ngrx/store';

export const ADD = 'ADD TODO';
export const TOGGLE_TODO = 'TOGGLE TODO [completed value]';
export const EDIT_TODO = 'EDIT TODO [texto value]';
export const DELETE_TODO = 'DELETE TODO}';

export class AddTodoAction implements Action {
    readonly type = ADD;
    constructor(public texto: string) { }
}
export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number, public completado: boolean) { }
}
export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;
    constructor(public id: number, public texto: string) { }
}
export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;
    constructor(public id: number) { }
}

export type todoActions =
    AddTodoAction |
    ToggleTodoAction |
    EditTodoAction |
    DeleteTodoAction;
