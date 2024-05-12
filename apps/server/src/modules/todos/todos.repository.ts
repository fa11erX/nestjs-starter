import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TodosRepository {
  constructor(private prisma: PrismaService) {}

  async createTweet(params: { data: Prisma.TodoCreateInput }): Promise<Todo> {
    const { data } = params;
    return this.prisma.todo.create({ data });
  }

  async getTweets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TodoWhereUniqueInput;
    where?: Prisma.TodoWhereInput;
    orderBy?: Prisma.TodoOrderByWithRelationInput;
  }): Promise<Todo[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.todo.findMany({ skip, take, cursor, where, orderBy });
  }

  async updateTweet(params: {
    where: Prisma.TodoWhereUniqueInput;
    data: Prisma.TodoUpdateInput;
  }): Promise<Todo> {
    const { where, data } = params;
    return this.prisma.todo.update({ where, data });
  }

  async deleteTweet(params: {
    where: Prisma.TodoWhereUniqueInput;
  }): Promise<Todo> {
    const { where } = params;
    return this.prisma.todo.delete({ where });
  }
}
