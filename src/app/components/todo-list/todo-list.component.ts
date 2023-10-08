import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  newTodo: string = '';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { 

  }

  ngOnInit(): void {
  
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getAllTodos().subscribe((todos:any) => {
      debugger
      this.todos = todos;
    });
  }

  addTodo(): void {
    const todo: Todo = {
      task: this.newTodo,
      isDone: false
    };

    this.todoService.createTodo(todo).subscribe((todo: Todo) => {
      this.todos.push(todo);
    });
  }

  markTodoAsDone(todo: Todo): void {
    debugger

    this.todoService.markTodoAsDone(todo).subscribe((todo: Todo) => {
      // Update the todo in the list

    });
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe(() => {
      // Remove the todo from the list
    });
  }
}
