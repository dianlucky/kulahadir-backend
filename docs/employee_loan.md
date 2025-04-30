# EmployeeLoan API Spec

## Create EmployeeLoan

Endpoint : POST /api/employee-loan

Request Body :

```json
{
  "employee_id": 1,
  "amount": 150000,
  "date": "2025-04-29T15:30:00Z",
  "status": "Accepted"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "employee_id": 1,
    "amount": 150000,
    "date": "2025-04-29T15:30:00Z",
    "status": "Accepted"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Validation error"
}
```

## Get EmployeeLoan

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
    "date": "2025-04-29T15:30:00Z",
    "status": "Accepted"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorize"
}
```

## Update EmployeeLoan

Endpoint : PATCH /api/employee-loan/current

Headers :

- authorization : token

Request Body :

```json
{
  "id": 1,
  "employee_id": 1,
  "amount": 150000,
  "date": "2025-04-29T15:30:00Z",
  "status": "Accepted"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "employee_id": 1,
    "amount": 150000,
    "date": "2025-04-29T15:30:00Z",
    "status": "Accepted"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Validation error"
}
```

## Search EmployeeLoan

Endpoint : GET /api/employee-loan

Headers :

- authorization : token

Query params :

- date : string, employee_loan date or employee_loan month or employee_loan year, optional
- amount : number, employee_loan amount, optional
- status : string, employee_loan status, optional
- employee_id: string, employee_loan employee_id, optional

Response Body :

```json
{
  "data": [
    {
      "id": 1,
      "employee_id": 1,
      "amount": 150000,
      "date": "2025-04-29T15:30:00Z",
      "status": "Accepted"
    },
    {
      "id": 2,
      "employee_id": 1,
      "amount": 150000,
      "date": "2025-04-29T15:30:00Z",
      "status": "Accepted"
    }
  ]
}
```
