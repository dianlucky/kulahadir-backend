// import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  username: string;
  password: string;
}

export type Creds = {
  id: number;
  username: string;
  level: string;
  status: string;
  employee_id: number | null;
};

export type AuthMeType = {
  creds: Creds;
  status: string;
};
