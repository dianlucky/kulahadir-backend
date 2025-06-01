import { ScheduleResponse } from './schedule.model';

export class AttendanceResponse {
  id: number;
  check_in: Date;
  check_out?: Date | undefined;
  attendance_long: string | null;
  attendance_lat: string | null;
  status?: string;
  snapshot: string;
  schedule_id: number;

  schedule?: ScheduleResponse;
}

export class CheckInRequest {
  check_in: Date;
  attendance_long: string;
  attendance_lat: string;
  snapshot: string;
  schedule_id: number;
}

export class CheckOutRequest {
  id: number;
  check_out: Date;
  schedule_id: number;
}

export class UpdateAttendanceRequest {
  id: number;
  check_in?: Date;
  check_out: Date;
  status: string;
  schedule_id: number;
}
