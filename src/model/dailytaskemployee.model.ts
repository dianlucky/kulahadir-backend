import { DailyTaskResponse } from './dailytask.model';
import { EmployeeResponse } from './employee.model';

export class DailyTaskEmployeeResponse {
  id: number;
  day: string;
  task_id: number;
  employee_id: number;

  dailyTask?: DailyTaskResponse;
  employee?: EmployeeResponse;
}

export class CreateDailyTaskEmployeeRequest {
  day: string;
  task_id: number;
  employee_id: number;
}

export class UpdateDailyTaskEmployeeRequest {
  id: number;
  day: string;
  task_id: number;
  employee_id: number;
}
