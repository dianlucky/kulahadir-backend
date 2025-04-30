# Salary API Spec

## Create Salary

Endpoint : POST /api/salary

Request Body :

```json
{
  "employee_id": 1,
  "salary_deductions_id": 1,
  "amount": 150000,
  "bonus": 150000,
  "date": "2025-04-29T15:30:00Z"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "employee_id": 1,
    "salary_deductions_id": 1,
    "amount": 150000,
    "bonus": 150000,
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

## Get Salary

Endpoint : GET /api/current

Headers :

- authorization: token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "employee_id": 1,
    "salary_deductions_id": 1,
    "amount": 150000,
    "bonus": 150000,
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

## Update Salary

Endpoint : PATCH /api/salary/current

Headers :

- authorization : token

Request Body :

```json
{
  "id": 1,
  "employee_id": 1,
  "salary_deductions_id": 1,
  "amount": 150000,
  "bonus": 150000,
  "date": "2025-04-29T15:30:00Z"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "employee_id": 1,
    "salary_deductions_id": 1,
    "amount": 150000,
    "bonus": 150000,
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

## Search Salary

Endpoint : GET /api/salary

Headers :

- authorization : token

Query params :

- date : string, salary date or salary month or salary year, optional
- amount : number, salary amount, optional
- bonus : number, salary bonus, optional
- employee_id: string, salary employee_id, optional

Response Body :

```json
{
  "data": [
    {
      "id": 1,
      "employee_id": 1,
      "salary_deductions_id": 1,
      "amount": 150000,
      "bonus": 150000,
      "date": "2025-04-29T15:30:00Z"
    },
    {
      "id": 2,
      "employee_id": 1,
      "salary_deductions_id": 1,
      "amount": 150000,
      "bonus": 150000,
      "date": "2025-04-29T15:30:00Z"
    }
  ]
}
```
