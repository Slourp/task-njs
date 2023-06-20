import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '@src/task/dto/create-task.dto';
import { Task, TaskStatus } from '@src/task/model/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: Task[];

  async getAllTasks(): Promise<Task[]> {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);

    return task;
  }

  async getTaskById(id: string): Promise<Task> {
    const task: Task | undefined = this.tasks.find(
      (task: Task) => task.id === id,
    );
    if (!task) throw new NotFoundException(`Tâche avec l'ID ${id} non trouvée`);
    return task;
  }

  async deleteTaskById(id: string): Promise<void> {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return;
  }

  async updateTaskStatusById(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    return task;
  }
}
