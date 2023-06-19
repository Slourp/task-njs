import { Controller, Get, Param } from '@nestjs/common';
import { Task } from '@src/task/model/task.model';
import { ROUTES } from '@src/task/routes';
import { TaskService } from '@src/task/services/task/task.service';

@Controller()
export class GetTaskByIdController {
  constructor(private tasksService: TaskService) {}

  @Get(ROUTES.GET_TASK)
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return await this.tasksService.getTaskById(id);
  }
}
