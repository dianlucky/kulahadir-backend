export class CategoryResponse {
  id: number;
  code: string;
  name: string;
}

export class CreateCategoryRequest {
  code: string;
  name: string;
}

export class UpdateCategoryRequest {
  code?: string;
  name?: string;
}
