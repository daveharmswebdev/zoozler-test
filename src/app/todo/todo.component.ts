import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: string;
  todos: any[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      console.log(todos);
    });
  }

  addTodo(value) {
    this.todoService.addTodo(value).subscribe(response => {
      this.todoService.getTodos().subscribe(todos => {
        this.todos = todos;
        console.log(response, this.todos);
        this.todo = '';
      });
    });
  }

}
