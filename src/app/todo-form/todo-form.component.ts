import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService, private router: Router) {
    this.todoForm = this.fb.group({
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.value.description);
      this.router.navigate(['/todos']);
    }
  }
}
