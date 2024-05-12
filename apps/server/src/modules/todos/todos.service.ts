import { Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';
import { Todo } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private repository: TodosRepository) {}
  async createTodo(params: { content: Todo[`content`] }) {
    const { content } = params;
    const todo = await this.repository.createTodo({
      data: {
        content,
      },
    });
    return todo;
  }

  async getTodos() {
    const todos = await this.repository.getTodos({});
    return todos;
  }
}
