import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../model/task.model';

@Injectable()
export class TaskValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    value = value.toUppercase();

    if (this.isStatusValid(value))
      throw new BadRequestException(`${value} is an invalid status`);

    return value;
  }

  private isStatusValid(status: any) {
    return this.allowedStatus.indexOf(status) !== -1;
  }
}
