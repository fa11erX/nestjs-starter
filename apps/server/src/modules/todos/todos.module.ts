import { Module } from '@nestjs/common';
import { TodosRepository } from './todos.repository';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TodosRepository],
})
export class TodosModule {}
