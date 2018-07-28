import { typeActions, ADD } from './todo.actions';
import { Todo } from './model/todo.model';

export interface AppState {
    todos: Todo[];
}

const todo1 = new Todo('Todo1');

const initialState: Todo[] = [todo1];

export function todoReducer(state: Todo[] = initialState, action: typeActions) {
    switch (action.type) {
        case ADD:
            const todo = new Todo(action.texto);
            return [...state, todo];

        default:
            return state;
    }
}
