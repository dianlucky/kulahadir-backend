# Attendance API Spec

## Create Attendance

Endpoint : POST /api/attendance

Request Body :

```json
{
  "schedule_id": 1,
  "check-in": "2025-04-29T15:30:00Z",
  "check-out": "2025-04-30T00:30:00Z",
  "status": "Present"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "schedule_id": 1,
    "check-in": "2025-04-29T15:30:00Z",
    "check-out": "2025-04-30T00:30:00Z",
    "status": "Present"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Already checked-in"
}
```

## Get Attendance

Endpoint : GET /api/current

Headers :

- authorization: token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "schedule_id": 1,
    "check-in": "2025-04-29T15:30:00Z",
    "check-out": "2025-04-30T00:30:00Z",
    "status": "Present"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorize"
}
```

## Update Attendance

Endpoint : PATCH /api/attendance/current

Headers :

- authorization : token

Request Body :

```json
{
  "id": 1,
  "schedule_id": 1,
  "check-in": "2025-04-29T15:30:00Z",
  "check-out": "2025-04-30T00:30:00Z",
  "status": "Present"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "schedule_id": 1,
    "check-in": "2025-04-29T15:30:00Z",
    "check-out": "2025-04-30T00:30:00Z",
    "status": "Present"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Already checked-in"
}
```

## Search Attendance

Endpoint : GET /api/attendance

Headers :

- authorization : token

Query params :

- schedule_id: number, attendance schedule, optional
- status : string, schedule status, optional

Response Body :

```json
{
  "data": [
    {
      "id": 1,
      "schedule_id": 1,
      "check-in": "2025-04-29T15:30:00Z",
      "check-out": "2025-04-30T00:30:00Z",
      "status": "Present"
    },
    {
      "id": 2,
      "schedule_id": 2,
      "check-in": "2025-04-29T15:30:00Z",
      "check-out": "2025-04-30T00:30:00Z",
      "status": "Present"
    }
  ]
}
```
