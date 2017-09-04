import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(private http?: Http) {}

  test1() {
    return true;
  }

  todoIsValid(todo) {
    return todo.length > 4;
  }

  formTodo(todoOject) {
    return {
      todo: this.styleStrings(todoOject.todo),
      when: todoOject.when.length > 0 ? this.styleStrings(todoOject.when) : 'No Date',
      where: todoOject.where.length > 0 ? this.styleStrings(todoOject.where) : 'No Place'
    };
  }

  styleStrings(value) {
    const splitString = value.split(' ');
    const string = splitString
      .map(val => val.slice(0, 1).toUpperCase() + val.slice(1, val.legnth).toLowerCase())
      .join(' ');
    return string;
  }

  getTodos() {
    return this.http.get('/api/todos')
      .map(res => res.json());
  }

  addTodo(value): Observable<any[]> {
    const newTodo = this.formTodo(value);
    return this.http.post('/api/todos', newTodo)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error));
  }
}
