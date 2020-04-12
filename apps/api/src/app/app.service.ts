import { Injectable } from '@nestjs/common';
import { Todo } from '@sample-nrwlapp/data';

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  getData() {
    return this.todos;
  }

  addTodo() {
    this.todos.push({ title: `New Todo ${Math.floor(Math.random() * 1000)}` });
  }
}
