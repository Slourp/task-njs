import { Body, Controller, Param, Patch } from '@nestjs/common';
import { TaskStatus } from '@src/task/model/task.model';
import { TaskValidationPipe } from '@src/task/pipes/task-status-validation.pipe';
import { ROUTES } from '@src/task/routes';
import { TaskService } from '@src/task/services/task/task.service';

@Controller()
export class UpdateTaskController {
  constructor(private tasksService: TaskService) {}

  @Patch(ROUTES.UPDATE_TASK_ROUTE)
  UpdateTaskStatusById(
    @Param('id') id: string,
    @Body('status', TaskValidationPipe) status: TaskStatus,
  ) {
    this.tasksService.updateTaskStatusById(id, status);
  }
}
