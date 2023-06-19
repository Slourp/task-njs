import { Injectable } from '@nestjs/common';
import { Task } from '@src/task/model/task.model';

@Injectable()
export class TaskService {
  private tasks: [];

  async getAllTasks(): Promise<Task[]> {
    return await this.tasks;
  }
}
