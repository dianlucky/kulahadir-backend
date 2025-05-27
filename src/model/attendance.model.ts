import { ScheduleResponse } from './schedule.model';

export class AttendanceResponse {
  id: number;
  check_in: Date;
  check_out?: Date | undefined;
  attendance_long: string | null;
  attendance_lat: string | null;
  status?: string;
  schedule_id: number;

  schedule?: ScheduleResponse;
}

// export class CreateAttendanceRequest {
//   check_in: Date;
//   attendance_long: string;
//   attendanc_lat: string;
//   schedule_id: number;
// }
export class CheckInRequest {
  check_in: Date;
  attendance_long: string;
  attendanc_lat: string;
  schedule_id: number;
}

export class CheckOutRequest {
  id: number;
  schedule_id: number;
  check_out: Date;
}

export class UpdateAttendanceRequest {
  id: number;
  check_in?: Date;
  check_out: Date;
  status: string;
  schedule_id: number;
}
