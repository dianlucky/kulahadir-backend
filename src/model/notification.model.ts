import { EmployeeResponse } from './employee.model';

export class NotificationResponse {
  id: number;
  type: string;
  message: string | null;
  was_read: boolean;
  created_at: Date;
  employee_id: number;
  employee?: EmployeeResponse;
}

export class CreateNotificationRequest {
  type: string;
  message: string;
  was_read: boolean;
  created_at: Date;
  employee_id: number;
}

export class UpdateReadNotificationRequest {
  id: number;
  was_read: boolean;
}
