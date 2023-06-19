import { Controller, Get } from '@nestjs/common';
import { Task } from '@src/task/model/task.model';
import { ROUTES } from '@src/task/routes';
import { TaskService } from '@src/task/services/task/task.service';

@Controller()
export class GetAllTasksController {
  constructor(private tasksService: TaskService) {}

  @Get(ROUTES.GET_ALL_TASKS_ROUTE)
  async getTasks(): Promise<Task[]> {
    return await this.tasksService.getAllTasks();
  }
}
