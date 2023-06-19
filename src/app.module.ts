import { Module } from '@nestjs/common';
import { AuthModule } from '@src/auth/auth.module';
import { TaskModule } from '@src/task/task.module';

@Module({
  imports: [AuthModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
