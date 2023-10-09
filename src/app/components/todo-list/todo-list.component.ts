  import { Component, OnInit, ViewChild } from '@angular/core';
  import { Todo } from '../../models/Todo.model';
  import { TodoService } from '../../services/todo.service';
  import { animate, style, transition, trigger } from '@angular/animations';
  import { MatSnackBar } from '@angular/material/snack-bar';

  @Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    animations: [
      trigger('taskRemoved', [
        transition(':leave', [
          style({ opacity: 1, transform: 'translateX(0)' }),
          animate(
            '300ms ease-out',
            style({ opacity: 0, transform: 'translateX(100%)' })
          ),
        ]),
      ]),
    ],
  })
  export class ToDoListComponent implements OnInit {
    newTodo: string = '';
    @ViewChild('rightToast') rightToast: any;
    todos: Todo[] = [];

    constructor(
      private todoService: TodoService,
      private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
      
      this.getTodos();
    }

    getTodos(): void {
      
      this.todoService.getAllTodos().subscribe((todos: any) => {
        
        this.todos = todos;
      });
    }
    
    addTodo(): void {
      const todo: Todo = {
        task: this.newTodo,
        isDone: false,
      };

      this.todoService.createTodo(todo).subscribe((todo: Todo) => {
        this.todos.push(todo);
        this.newTodo = ''; // Clear input after adding
      });
    }

    markTodoAsDone(todo: Todo): void {
      
      this.todoService.markTodoAsDone(todo).subscribe(() => {
        // Trigger the removal animation by removing the task after a delay

        this.todos = this.todos.filter((t) => t !== todo);

        this.snackBar.open('Task marked as complete!', 'Close', {
          duration: 2000,
        });
      });
    }
    deleteTodo(todo: Todo): void {
      // Remove the task from the local array
      this.todos = this.todos.filter((t) => t !== todo);
      
      this.snackBar.open('Task deleted!', 'Close', {
        duration: 2000,
      });
      this.todoService.deleteTodo(todo).subscribe(() => {
        
      });
    }
  }
