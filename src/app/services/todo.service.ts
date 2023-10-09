import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/Todo.model';

@Injectable({
  providedIn: 'root'
})
//service classes
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getAllTodos() {
    return this.httpClient.get('https://mean-stack-to-do-ho1ibwbks-sarimalikhans-projects.vercel.app/api/todos/getAll');
  }

  createTodo(todo: Todo) {
    return this.httpClient.post('https://mean-stack-to-do-ho1ibwbks-sarimalikhans-projects.vercel.app/api/todos/save', todo);
  }

  markTodoAsDone(todo: Todo) {
    return this.httpClient.put('https://mean-stack-to-do-ho1ibwbks-sarimalikhans-projects.vercel.app/api/todos/' + todo._id,todo);
  }

  deleteTodo(todo: Todo) {
    
    return this.httpClient.delete('https://mean-stack-to-do-ho1ibwbks-sarimalikhans-projects.vercel.app/api/todos/delete/' + todo._id);
  }
}
