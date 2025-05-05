import { ScheduleResponse } from './schedule.model';

export class LeaveResponse {
  id: number;
  reason: string;
  status: string;
  schedule_id: number;

  schedule?: ScheduleResponse;
}

export class CreateLeaveRequest {
  reason: string;
  status: string;
  schedule_id: number;
}

export class UpdateLeaveRequest {
  id: number;
  reason?: string;
  status?: string;
  schedule_id: number;
}
