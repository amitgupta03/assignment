import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Todo item 1', completed: false },
    { id: 2, description: 'Todo item 2', completed: false },
  ];
  
  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);
  todos$ = this.todosSubject.asObservable();

  getTodos() {
    return this.todos$;
  }

  addTodo(description: string) {
    const newTodo: Todo = { id: Date.now(), description, completed: false };
    this.todos.push(newTodo);
    this.todosSubject.next([...this.todos]);
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosSubject.next([...this.todos]);
  }
}
