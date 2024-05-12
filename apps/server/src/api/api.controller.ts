import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from 'src/modules/todos/todos.service';

@Controller('api')
export class ApiController {
  constructor(private readonly todosServices: TodosService) {}

  @Post(`todo`)
  async createTodo(@Body() data: { content: string; userId: string }) {
    const { content } = data;
    return this.todosServices.createTodo({
      content,
    });
  }

  @Get('todos')
  getTodos() {
    return this.todosServices.getTodos();
  }
}
