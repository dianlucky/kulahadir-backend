import { DailyTaskResponse } from './dailytask.model';
import { EmployeeResponse } from './employee.model';

export class TaskEmployeeResponse {
  id: number;
  day: string;
  employee_id: number;
  task_id: number;
  task?: DailyTaskResponse;
  employee?: EmployeeResponse;
}

export class CreateTaskEmployeeRequest {
  day: string;
  employee_id: number;
  task_id: number;
}

export class UpdateTaskEmployeeRequest {
  id: number;
  day?: string;
  employee_id?: number;
  task_id?: number;
}
