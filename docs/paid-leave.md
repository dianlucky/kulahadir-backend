# PaidLeave API Spec

## Create PaidLeave

Endpoint : POST /api/paid-leave

Request Body :

```json
{
  "schedule_id": 1,
  "reason": "Izin sakit",
  "status": "Accepted"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "schedule_id": 1,
    "reason": "Izin sakit",
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

## Get PaidLeave

Endpoint : GET /api/current

Headers :

- authorization: token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "schedule_id": 1,
    "reason": "Izin sakit",
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

## Update PaidLeave

Endpoint : PATCH /api/paid-leave/current

Headers :

- authorization : token

Request Body :

```json
{
  "id": 1,
  "schedule_id": 1,
  "reason": "Izin sakit",
  "status": "Accepted"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "schedule_id": 1,
    "reason": "Izin sakit",
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

## Search PaidLeave

Endpoint : GET /api/paid-leave

Headers :

- authorization : token

Query params :

- reason : string, leave reason, optional
- status : string, leave status, optional
- schedule_id: number, leave schedule_id, optional

Response Body :

```json
{
  "data": [
    {
      "id": 1,
      "schedule_id": 1,
      "reason": "Izin sakit",
      "status": "Accepted"
    },
    {
      "id": 2,
      "schedule_id": 1,
      "reason": "Izin sakit",
      "status": "Declined"
    }
  ]
}
```
