import { TaskEmployeeResponse } from './taskemployee.model';

export class DailyTaskEmployeeResponse {
  id: number;
  status: string;
  date: Date;
  task_employee_id: number;
  task_employee?: TaskEmployeeResponse;
}

export class CreateDailyTaskEmployeeRequest {
  status: string;
  date: Date;
  task_employee_id: number;
}

export class UpdateDailyTaskEmployeeRequest {
  id: number;
  status: string;
  date?: Date;
  task_employee_id?: number;
}
