import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo-list/model/todo.model';
import { typeFilters } from './filters.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filtro: typeFilters): Todo[] {
    
    switch (filtro) {
      case "pendientes":
        todos = todos.filter(el => !el.completado);
        break;
      case "completados":
        todos = todos.filter(el => el.completado);
        break;
      default:
        todos = todos;
        break;
    }

    return todos;
  }

}
