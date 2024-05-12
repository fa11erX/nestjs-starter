import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Todo as TodoDB } from '@prisma/client';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: TodoDB[`id`];

  @Field(() => GraphQLISODateTime)
  createdAt: TodoDB[`createdAt`];

  @Field(() => GraphQLISODateTime)
  updatedAt: TodoDB[`updatedAt`];

  @Field(() => String)
  content: TodoDB[`content`];
}
