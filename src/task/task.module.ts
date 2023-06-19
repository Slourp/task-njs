import { Module } from '@nestjs/common';

import { GetAllTasksController } from '@src/task/controllers/get-all-tasks/get-all-tasks.controller';
import { CreateTaskController } from '@src/task/controllers/create-task/create-task.controller';
import { UpdateTaskController } from '@src/task/controllers/update-task/update-task.controller';
import { DeleteTaskController } from '@src/task/controllers/delete-task/delete-task.controller';
import { TaskService } from '@src/task/services/task/task.service';
import { GetTaskByIdController } from './controllers/get-task-by-id/get-task-by-id.controller';

@Module({
  controllers: [
    GetAllTasksController,
    CreateTaskController,
    UpdateTaskController,
    DeleteTaskController,
    GetTaskByIdController,
  ],
  providers: [TaskService],
})
export class TaskModule {}
