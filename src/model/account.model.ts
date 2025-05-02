import { LevelResponse } from './level.model';

export class AccountResponse {
  id?: number;
  username: string;
  level_id: number;
  token?: string;

  level?: LevelResponse;
}
export class RegisterAccountRequest {
  username: string;
  password: string;
  level_id: number;
}
export class LoginRequest {
  username: string;
  password: string;
}

export class AccountType {
  id: number;
  username: string;
  password: string;
  level_id: number;
  token?: string;
}

export class UpdateAccountRequest {
  id?: number;
  username?: string;
  password?: string;
  level_id?: string;
}
