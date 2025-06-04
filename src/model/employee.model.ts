import { AccountResponse } from './account.model';

export class EmployeeResponse {
  id?: number;
  name: string;
  birth_date?: Date | null;
  phone?: string | null;
  profile_pic: string | null;
  account_id: number;
  created_at: Date;

  account?: AccountResponse;
}

export class CreateEmployeeRequest {
  name: string;
  birth_date?: Date;
  phone: string;
  profile_pic?: string;
  account_id: number;
}

export class UpdateEmployeeRequest {
  id: number;
  name?: string;
  birth_date?: Date;
  phone?: string;
  account_id?: number;
  profile_pic?: string;
}

export class SearchEmployeeRequest {
  name?: string;
  birth_date?: Date;
  phone?: string;
  status?: string;
}
