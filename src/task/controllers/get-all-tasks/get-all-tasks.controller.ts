import { Controller, Get, Query } from '@nestjs/common';
import { GetTasksFilterDto } from '@src/task/dto/get-task-dto';
import { Task } from '@src/task/model/task.model';
import { ROUTES } from '@src/task/routes';
import { TaskService } from '@src/task/services/task/task.service';

@Controller()
export class GetAllTasksController {
  constructor(private tasksService: TaskService) {}

  @Get(ROUTES.GET_ALL_TASKS_ROUTE)
  async getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
    return (
      Object.keys(filterDto).length && (await this.tasksService.getAllTasks())
    );
  }
}
