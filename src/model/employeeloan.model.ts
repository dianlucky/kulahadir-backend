import { EmployeeResponse } from './employee.model';

export class EmployeeLoanResponse {
  id?: number;
  amount: number;
  date: Date;
  status: string;
  employee_id: number;

  employee?: EmployeeResponse;
}

export class CreateEmployeeLoanRequest {
  amount: number;
  date: Date | string;
  status: string;
  employee_id?: number;
}

export class UpdateEmployeeLoanRequest {
  id: number;
  status: string;
}
