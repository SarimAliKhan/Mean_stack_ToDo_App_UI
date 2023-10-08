import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getAllTodos() {
    return this.httpClient.get('http://localhost:8000/api/todos/getAll');
  }

  createTodo(todo: Todo) {
    return this.httpClient.post('http://localhost:8000/api/todos/save', todo);
  }

  markTodoAsDone(todo: Todo) {
    return this.httpClient.put('http://localhost:8000/api/todos/' + todo._id,todo);
  }

  deleteTodo(todo: Todo) {
    debugger
    return this.httpClient.delete('http://localhost:8000/api/todos/delete/' + todo._id);
  }
}
