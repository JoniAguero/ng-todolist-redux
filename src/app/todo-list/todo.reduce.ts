import { typeActions, ADD, TOGGLE_TODO } from './todo.actions';
import { Todo } from './model/todo.model';

export interface AppState {
    todos: Todo[];
}

const todo1 = new Todo('First work');

const initialState: Todo[] = [todo1];

export function todoReducer(state: Todo[] = initialState, action: typeActions) {
    switch (action.type) {
        case ADD:
            const todo = new Todo(action.texto);
            return [...state, todo];
        case TOGGLE_TODO:
            return state.map(editTodo => {
                if (editTodo.id === action.id) {
                    return {
                        ...editTodo,
                        estado: !editTodo.estado
                    };
                } else {
                    return editTodo;
                }
            });
            break;
        default:
            return state;
    }
}
