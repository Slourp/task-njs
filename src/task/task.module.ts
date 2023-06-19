import { Module } from '@nestjs/common';
import { GetAllTasksController } from './controllers/get-all-tasks/get-all-tasks.controller';
import { CreateTaskController } from './controllers/create-task/create-task.controller';
import { UpdateTaskController } from './controllers/update-task/update-task.controller';
import { DeleteTaskController } from './controllers/delete-task/delete-task.controller';

@Module({
  controllers: [GetAllTasksController, CreateTaskController, UpdateTaskController, DeleteTaskController]
})
export class TaskModule {}
