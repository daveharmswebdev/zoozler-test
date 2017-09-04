import { Http } from '@angular/http';
import { TodoService } from './todo.service';

describe('Service: TodoService', () => {
  it('should return true', () => {
    const subject: TodoService = new TodoService();
    expect(subject.test1()).toEqual(true);
  });

  it('should be able to form an object from the values passed', () => {
    const subject: TodoService = new TodoService();
    const expected = { todo: 'Todo', when: 'When', where: 'Where' };

    const actual = subject.formTodo({ todo: 'todo', when: 'when', where: 'where' });
    expect(expected).toEqual(actual);
  });

  it('should be able to form an object from the values passed', () => {
    const subject: TodoService = new TodoService();
    const expected = { todo: 'Todo', when: 'No Date', where: 'No Place' };

    const actual = subject.formTodo({ todo: 'todo', when: '', where: '' });
    expect(expected).toEqual(actual);
  });

  it('todos should be five letters or longer', () => {
    const subject: TodoService = new TodoService();

    const actual = subject.todoIsValid('buy coffee');
    const short = subject.todoIsValid('buy');
    expect(actual).toBe(true);
    expect(short).toBe(false);
  });

  it('should style strings', () => {
    const subject: TodoService = new TodoService();
    const expected = 'Buy Milk';
    const actual = subject.styleStrings('BUy mIlk');

    expect(expected).toEqual(actual);
  });
});
