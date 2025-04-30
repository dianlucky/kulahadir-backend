# Leave API Spec

## Create Leave

Endpoint : POST /api/leave

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

## Get Leave

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

## Update Leave

Endpoint : PATCH /api/leave/current

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

## Search Leave

Endpoint : GET /api/leave

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
