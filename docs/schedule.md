# Schedule API Spec

## Create Schedule

Endpoint : POST /api/schedule

Request Body :

```json
{
  "employee_id": 1,
  "status": "On",
  "date": "23-05-2003",
  "attendance_status": "Present"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "employee_id": 1,
    "status": "On",
    "date": "23-05-2003",
    "attendance_status": "Present"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Schedule already registered"
}
```

## Get Schedule

Endpoint : GET /api/current

Headers :

- authorization: token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "employee_id": 1,
    "status": "On",
    "date": "23-05-2003",
    "attendance_status": "Present"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorize"
}
```

## Update Employee

Endpoint : PATCH /api/schedule/current

Headers :

- authorization : token

Request Body :

```json
{
  "id": 1,
  "employee_id": 1,
  "status": "On",
  "date": "23-05-2003",
  "attendance_status": "Present"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "employee_id": 1,
    "status": "On",
    "date": "23-05-2003",
    "attendance_status": "Present"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Employee already registered"
}
```

## Search Schedule

Endpoint : GET /api/schedule

Headers :

- authorization : token

Query params :

- date : string, schedule date or schedule month or schedule year, optional
- employee_id : number, schedule employee_id, optional
- status : string, schedule status, optional
- attendance_status: string, schedule attendance_status, optional

Response Body :

```json
{
  "data": [
    {
      "id": 1,
      "employee_id": 1,
      "status": "On",
      "date": "23-05-2003",
      "attendance_status": "Present"
    },
    {
      "id": 2,
      "employee_id": 1,
      "status": "On",
      "date": "23-05-2003",
      "attendance_status": "Present"
    }
  ]
}
```
