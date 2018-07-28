import { Action } from '@ngrx/store';

export const ADD = 'ADD TODO';

export class Add implements Action {
    readonly type = ADD;
    constructor(public texto: string) { }
}

export type typeActions =
    Add;
