import { EmployeeResponse } from './employee.model';

export class OutgoingItemResponse {
  id: number;
  created_at: Date;
  employee_id: number;
  employee?: EmployeeResponse;
}

export class CreateOutgoingRequest {
  employee_id: number;
}

export class UpdateOutgoingRequest {
  employee_id?: number;
}
