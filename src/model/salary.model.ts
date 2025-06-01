import { EmployeeResponse } from './employee.model';

export class SalaryResponse {
  id: number;
  amount: number;
  bonus: number | null;
  salary_deduction: number | null;
  cash_advance: number | null;
  note: string | null;
  date: Date;
  created_at: Date;
  employee_id: number;

  employee?: EmployeeResponse;
}

export class CreateSalaryRequest {
  bonus: number | null;
  salary_deduction: number | null;
  cash_advance: number | null;
  amount: number | null;
  note: string | null;
  date: string;
  employee_id: number;
}

export class UpdateSalaryRequest {
  id: number;
  bonus?: number | null;
  salary_deduction?: number | null;
  cash_advance?: number | null;
  note?: string | null;
  employee_id?: number;
}
