import { todoActions, ADD, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, DELETE_ALL_TODO } from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('First work');

const initialState: Todo[] = [todo1];

export function todoReducer(state: Todo[] = initialState, action: todoActions): Todo[] {
    switch (action.type) {
        case ADD:
            const todo = new Todo(action.texto);
            return [...state, todo];
        case TOGGLE_TODO:
            return state.map(editTodo => {
                if (editTodo.id === action.id) {
                    return {
                        ...editTodo,
                        completado: !editTodo.completado
                    };
                } else {
                    return editTodo;
                }
            });
        case EDIT_TODO:
            return state.map(editTodo => {
                if (editTodo.id === action.id) {
                    return {
                        ...editTodo,
                        texto: action.texto
                    };
                } else {
                    return editTodo;
                }
            });
        case DELETE_TODO:
            // tslint:disable-next-line:no-shadowed-variable
            return state.filter( (todo: Todo) => todo.id !== action.id );
        case DELETE_ALL_TODO:
            // tslint:disable-next-line:no-shadowed-variable
            return state.filter((todo: Todo) => !todo.completado );

        default:
            return state;
    }
}
