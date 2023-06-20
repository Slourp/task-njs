import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from '@src/task/dto/create-task.dto';
import { Task } from '@src/task/model/task.model';
import { ROUTES } from '@src/task/routes';
import { TaskService } from '@src/task/services/task/task.service';

@Controller()
export class CreateTaskController {
  constructor(private tasksService: TaskService) {}

  @Post(ROUTES.CREATE_TASK_ROUTE)
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
