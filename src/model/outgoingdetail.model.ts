import { EmployeeResponse } from './employee.model';
import { ItemResponse } from './item.model';
import { OutgoingItemResponse } from './outgoingitem.model';

export class OutgoingDetailResponse {
  id: number;
  amount: number;
  created_at: Date;
  item_id: number;
  employee_id: number;
  outgoing_id: number;

  item?: ItemResponse;
  employee?: EmployeeResponse;
  outgoingItem?: OutgoingItemResponse;
}

export class CreateOutgoingDetailRequest {
  amount: number;
  item_id: number;
  employee_id: number;
  outgoing_id: number;
}

export class UpdateOutgoingDetailRequest {
  amount?: number;
  item_id?: number;
  employee_id?: number;
  outgoing_id?: number;
}

export class OutgoingItemStats {
  name: string;
  amount: number;
}

export class AnnualOutgoingStats {
  month: string;
  totalAmount: number;
  data: OutgoingItemStats[];
}

export class MonthlyOutgoingStats {
  date: string;
  data: OutgoingItemStats[];
}
