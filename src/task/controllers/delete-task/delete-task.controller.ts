import { Controller, Delete, Param } from '@nestjs/common';
import { ROUTES } from '@src/task/routes';
import { TaskService } from '@src/task/services/task/task.service';

@Controller('delete-task')
export class DeleteTaskController {
  constructor(private tasksService: TaskService) {}

  @Delete(ROUTES.DELETE_TASK_ROUTE)
  async getTaskById(@Param('id') id: string): Promise<void> {
    await this.tasksService.deleteTaskById(id);
    return;
  }
}
