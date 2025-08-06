import { EmployeeResponse } from './employee.model';

export class OutgoingItemResponse {
  id: number;
  created_at: Date;
  employee_id: number;
  isFrozen: boolean;
  employee?: EmployeeResponse;
}

export class CreateOutgoingRequest {
  employee_id: number;
  isFrozen: boolean;
}

export class UpdateOutgoingRequest {
  employee_id?: number;
}
