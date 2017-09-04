import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(private http: Http) {}

  getTodos() {
    return this.http.get('/api/todos')
      .map(res => res.json());
  }

  addTodo(newTodo: Object): Observable<any[]> {
    console.log(newTodo);
    return this.http.post('/api/todos', newTodo)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error));
  }
}
