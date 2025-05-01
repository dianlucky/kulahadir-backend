export class CreateLevelRequest {
  name: string;
}

export class LevelResponse {
  id: number;
  name: string;
}

export class UpdateLevelRequest {
  id: number;
  name: string;
}
