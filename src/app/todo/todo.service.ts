import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  todos: any[] = [
    { todo: 'get milk' },
    { todo: 'feed cat' },
    { todo: 'buy groceries' },
  ];

  getTodos() {
    return this.todos;
  }

  addTodo(newTodo) {
    this.todos.push(newTodo);
  }
}
