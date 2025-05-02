import { EmployeeResponse } from './employee.model';

export class SalaryDeductionResponse {
  id: number;
  amount: number;
  date: Date;
  employee_id: number;

  employee?: EmployeeResponse;
}

export class CreateSalaryDeductionRequest {
  amount: number;
  date: Date;
  employee_id: number;
}

export class UpdateSalaryDeductionRequest {
  id?: number;
  amount: number;
}
