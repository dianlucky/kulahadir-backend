import { EmployeeResponse } from './employee.model';

export class IncomingItemResponse {
  id: number;
  created_at: Date;
  isFrozen: boolean;
  employee_id: number;
  employee?: EmployeeResponse;
}

export class CreateIncomingItemRequest {
  employee_id: number;
  isFrozen: boolean;
}

export class UpdateIncomingItemRequest {
  employee_id?: number;
}
