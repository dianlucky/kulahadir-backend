# SalaryDeduction API Spec

## Create SalaryDeduction

Endpoint : POST /api/salary-deduction

Request Body :

```json
{
  "employee_id": 1,
  "amount": 150000,
  "date": "2025-04-29T15:30:00Z"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "employee_id": 1,
    "amount": 150000,
    "date": "2025-04-29T15:30:00Z"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Validation error"
}
```

## Get SalaryDeduction

Endpoint : GET /api/current

Headers :

- authorization: token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "employee_id": 1,
    "amount": 150000,
    "date": "2025-04-29T15:30:00Z"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorize"
}
```

## Update SalaryDeduction

Endpoint : PATCH /api/salary-deduction/current

Headers :

- authorization : token

Request Body :

```json
{
  "id": 1,
  "employee_id": 1,
  "amount": 150000,
  "date": "2025-04-29T15:30:00Z"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "employee_id": 1,
    "amount": 150000,
    "date": "2025-04-29T15:30:00Z"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Validation error"
}
```

## Search SalaryDeduction

Endpoint : GET /api/salary-deduction

Headers :

- authorization : token

Query params :

- date : string, salary_deductions date or salary_deductions month or salary_deductions year, optional
- amount : number, salary_deductions amount, optional
- employee_id: string, salary_deductions employee_id, optional

Response Body :

```json
{
  "data": [
    {
      "id": 1,
      "employee_id": 1,
      "amount": 150000,
      "date": "2025-04-29T15:30:00Z"
    },
    {
      "id": 2,
      "employee_id": 1,
      "amount": 150000,
      "date": "2025-04-29T15:30:00Z"
    }
  ]
}
```
