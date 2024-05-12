import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from 'src/modules/todos/todos.model';
import { TodosService } from 'src/modules/todos/todos.service';

@Resolver()
export class ApiResolver {
  constructor(private readonly todosServices: TodosService) {}

  @Query(() => [Todo])
  async getTweets() {
    return this.todosServices.getTodos();
  }

  @Mutation(() => Todo)
  async createTweet(
    @Args({ name: `content`, type: () => String }) content: string,
  ) {
    return this.todosServices.createTodo({ content });
  }
}
