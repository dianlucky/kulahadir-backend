import { EmployeeResponse } from './employee.model';

export class IncomingItemResponse {
  id: number;
  created_at: Date;
  employee_id: number;
  employee?: EmployeeResponse;
}

export class CreateIncomingItemRequest {
  employee_id: number;
}

export class UpdateIncomingItemRequest {
  employee_id?: number;
}
