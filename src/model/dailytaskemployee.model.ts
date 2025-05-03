import { DailyTask, Employee } from '@prisma/client';

export class DailyTaskEmployeeResponse {
  id: number;
  day: string;
  task_id: number;
  employee_id: number;

  dailyTask?: DailyTask;
  employee?: Employee;
}

export class CreateDailyTaskEmployeeRequest {
  day: string;
  task_id: number;
  employee_id: number;
}

export class UpdateDailyTaskEmployeeRequest {
  day: string;
  task_id: number;
  employee_id: number;
}
