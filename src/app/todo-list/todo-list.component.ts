import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos$ = this.todoService.getTodos();

  constructor(private todoService: TodoService) {}

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
  }
}
