export class AccountResponse {
  id?: number;
  username: string;
  level: string;
  token?: string;
  status: string;
}
export class RegisterAccountRequest {
  username: string;
  password: string;
  level: string;
  status: string;
}
export class LoginRequest {
  username: string;
  password: string;
}

export class AccountType {
  id: number;
  username: string;
  password: string;
  level: string;
  token?: string;
  status: string;
}

export class UpdateAccountRequest {
  id?: number;
  username?: string;
  password?: string;
  level_id?: string;
  status?: string;
}
