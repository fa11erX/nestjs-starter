import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { TodosModule } from 'src/modules/todos/todos.module';
import { ApiResolver } from './api.resolver';

@Module({
  imports: [TodosModule],
  controllers: [ApiController],
  providers: [ApiResolver],

})
export class ApiModule {}
