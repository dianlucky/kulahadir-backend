import { EmployeeResponse } from './employee.model';

export class CashAdvanceResponse {
  id?: number;
  amount: number;
  reason: string | null;
  date: Date;
  created_at: Date;
  status: string;
  employee_id: number;
  employee?: EmployeeResponse;
}

export class CreateCashAdvanceRequest {
  amount: number;
  reason: string;
  employee_id: number;
  date: Date;
}

export class UpdateCashAdvanceRequest {
  id?: number;
  status: string;
}
