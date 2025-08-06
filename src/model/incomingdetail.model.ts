import { EmployeeResponse } from './employee.model';
import { IncomingItemResponse } from './incomingitem.model';
import { ItemResponse } from './item.model';

export class IncomingDetailResponse {
  id: number;
  amount: number;
  created_at: Date;
  item_id: number;
  employee_id: number;
  incoming_id: number;

  item?: ItemResponse;
  employee?: EmployeeResponse;
  incomingItem?: IncomingItemResponse;
}

export class CreateIncomingDetailRequest {
  amount: number;
  item_id: number;
  employee_id: number;
  incoming_id: number;
}

export class UpdateIncomingDetailRequest {
  amount?: number;
  item_id?: number;
  employee_id?: number;
  incoming_id?: number;
}

export class IncomingItemStats {
  name: string;
  amount: number;
}

export class AnnualIncomingStats {
  month: string;
  totalAmount: number;
  data: IncomingItemStats[];
}

export class MonthlyIncomingStats {
  date: string;
  data: IncomingItemStats[];
}
