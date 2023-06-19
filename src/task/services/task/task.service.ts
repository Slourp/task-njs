import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '@src/task/dto/create-task.dto';
import { Task, TaskStatus } from '@src/task/model/task.model';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TaskService {
  private tasks: Task[];

  async getAllTasks(): Promise<Task[]> {
    return await this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuidv4,
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);

    return task;
  }
}
