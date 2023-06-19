import { TaskStatus } from '@src/task/model/task.model';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}
