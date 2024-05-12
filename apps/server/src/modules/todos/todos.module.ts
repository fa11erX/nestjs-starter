import { Module } from '@nestjs/common';
import { TodosRepository } from './todos.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { TodosService } from './todos.service';

@Module({
  imports: [PrismaModule],
  providers: [TodosRepository, TodosService],
  exports: [TodosService],
})
export class TodosModule {}
