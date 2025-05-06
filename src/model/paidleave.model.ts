import { ScheduleResponse } from './schedule.model';

export class PaidLeaveResponse {
  id: number;
  reason: string;
  status: string;
  schedule_id: number;

  schedule?: ScheduleResponse;
}

export class CreatePaidLeaveRequest {
  reason: string;
  status: string;
  schedule_id: number;
}

export class UpdatePaidLeaveRequest {
  id: number;
  reason?: string;
  status?: string;
  schedule_id: number;
}
