import { CategoryResponse } from './category.model';

export class ItemResponse {
  id: number;
  code: string;
  name: string;
  stock: number;
  image: string | null;
  status: string;
  category_id: number;
  category?: CategoryResponse;
}

export class CreateItemRequest {
  code: string;
  name: string;
  stock?: number;
  image?: string;
  category_id: number;
}

export class UpdateItemRequest {
  code?: string;
  name?: string;
  image?: string;
  stock?: number;
  category_id?: number;
}
