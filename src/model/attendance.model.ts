import { ScheduleResponse } from './schedule.model';

export class AttendanceResponse {
  id: number;
  check_in: Date;
  check_out?: Date | undefined;
  status?: string;
  schedule_id: number;

  schedule?: ScheduleResponse;
}

export class CreateAttendanceRequest {
  check_in: Date;
  schedule_id: number;
}

export class UpdateAttendanceRequest {
  id: number;
  check_in?: Date;
  check_out: Date;
  status: string;
  schedule_id: number;
}
