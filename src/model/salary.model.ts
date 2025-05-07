import { EmployeeResponse } from './employee.model';

export class SalaryResponse {
  id: number;
  amount: number;
  bonus: number;
  salary_deduction: number;
  date: Date;
  employee_id: number;

  employee?: EmployeeResponse;
}

export class CreateSalaryRequest {
  amount: number;
  bonus: number;
  salary_deduction: number;
  date: Date;
  employee_id: number;
}

export class UpdateSalaryRequest {
  id: number;
  amount: number;
  bonus: number;
  salary_deduction: number;
  date: Date;
  employee_id: number;
}
