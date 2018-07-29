import { typeFilters, FILTER, filtersActions } from './filters.actions';

const initialState: typeFilters = 'todos';

export function filterReducer(state: typeFilters = initialState, action: filtersActions): typeFilters {
    switch (action.type) {
        case FILTER:
            return action.filter;
        default:
            return state;
    }
}
