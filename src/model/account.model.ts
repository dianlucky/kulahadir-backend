export class RegisterAccountRequest {
  username: string;
  password: string;
  level_id: number;
}

export class AccountResponse {
  username: string;
  level_id: number;
  token?: string;
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
