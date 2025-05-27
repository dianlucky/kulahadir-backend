export class DailyTaskResponse {
  id: number;
  task_code: string;
  task_name: string;
}

export class CreateDailyTaskRequest {
  task_code: string;
  task_name: string;
}

export class UpdateDailyTaskRequest {
  id: number;
  task_name: string | null;
  task_code: string | null;
}
