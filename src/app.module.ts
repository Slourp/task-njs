import { Module } from '@nestjs/common';
import { AuthModule } from '@src/auth/auth.module';
import { TaskModule } from '@src/task/task.module';
import { TaskService } from '@src/task/services/task/task.service';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule, AuthModule, TaskModule],
  controllers: [],
  providers: [TaskService],
})
export class AppModule {}
