import { Action } from '@ngrx/store';

export const FILTER = 'Filter [Set filter]';
export type typeFilters = 'todos' | 'completados' | 'pendientes' ;

export class FilterTodoAction implements Action {
    readonly type = FILTER;
    constructor(public filter: typeFilters) { }
}

export type filtersActions =
    FilterTodoAction ;
