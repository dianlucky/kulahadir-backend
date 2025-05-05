import { Employee } from '@prisma/client';
import { EmployeeResponse } from './employee.model';

export class ScheduleResponse {
  id: number;
  date: Date;
  status: string;
  attendance_status: string;
  employee_id: number;
  employee?: EmployeeResponse;
}

export class CreateScheduleRequest {
  date: Date;
  status: string;
  attendance_status: string;
  employee_id: number;
}

export class UpdateScheduleRequest {
  id: number;
  date?: Date;
  status?: string;
  attendance_status?: string;
  employee_id?: number;
}
