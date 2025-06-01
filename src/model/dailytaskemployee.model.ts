import { TaskEmployeeResponse } from './taskemployee.model';

export class DailyTaskEmployeeResponse {
  id: number;
  status: string;
  date: Date;
  task_employee_id: number;
  task_employee?: TaskEmployeeResponse;
}

export class CreateDailyTaskEmployeeRequest {
  month: string;
  make_task: boolean;
}

export class UpdateDailyTaskEmployeeRequest {
  id: number;
  status: string;
  date?: Date;
  task_employee_id?: number;
}
