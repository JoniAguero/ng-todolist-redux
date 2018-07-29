import { Todo } from "./todo-list/model/todo.model";
import { typeFilters } from './filters/filters.actions';
import { ActionReducerMap } from "@ngrx/store";

import { todoReducer } from "./todo-list/todo.reducer";
import { filterReducer } from './filters/filters.reducer';


export interface AppState {
    todos: Todo[];
    filter: typeFilters;
}

export const appReducer: ActionReducerMap<AppState> = {

    todos: todoReducer,
    filter: filterReducer
};
