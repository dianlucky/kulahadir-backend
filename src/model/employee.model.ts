import { AccountResponse } from "./account.model";

export class EmployeeResponse {
  id?: number;
  name: string;
  birth_date?: Date;
  phone: string;
  account_id: number;

  account?: AccountResponse;
}

export class CreateEmployeeRequest {
  name: string;
  birth_date?: Date;
  phone: string;
  account_id: number;
}

export class UpdateEmployeeRequest {
  id: number;
  name?: string;
  birth_date?: Date;
  phone?: string;
  account_id?: number;
}

export class SearchEmployeeRequest {
  name?: string;
  birth_date?: Date;
  phone?: string;
}
