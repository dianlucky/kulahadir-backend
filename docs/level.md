# Level API Spec

## Create Level

Endpoint : POST /api/level

Request Body :

```json
{
  "name": "admin"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "name": "admin"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Level already registered"
}
```

## Get Level

Endpoint : GET /api/current

Headers :

- authorization: token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "name": "admin"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorize"
}
```

## Update Level

Endpoint : PATCH /api/level/current

Headers :

- authorization : token

Request Body :

```json
{
  "id": 1,
  "name": "admin"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "name": "admin"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Level already registered"
}
```
