import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { PrismaModule } from './database/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TodosModule } from './modules/todos/todos.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ApiModule,
    TodosModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
