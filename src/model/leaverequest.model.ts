import { EmployeeResponse } from './employee.model';

export class LeaveResponse {
  id: number;
  reason: string;
  type: string;
  date: Date;
  status: string;
  attachment: string | null;
  created_at: Date;
  employee_id: number;
  employee?: EmployeeResponse;
}

export class CreateLeaveRequest {
  reason: string;
  type: string;
  attachment: string | null;
  date?: Date;
  employee_id: number;
}

export class UpdateLeaveRequest {
  id: number;
  reason?: string;
  attachment?: string;
  status?: string;
}

export class SearchLeaveRequest {
  id?: number;
  status?: string;
  type?: string;
  month?: string;
  employeeId?: number;
}
