# Account API Spec

## Register Account

Endpoint : POST /api/account

Request Body :

```json
{
  "level_id": 1,
  "username": "dianlucky",
  "password": "kulakita123"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "level_id": 1,
    "username": "dianlucky",
    "password": "kulakita123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username already registered"
}
```

## Login

Endpoint : POST /api/account/login

Request Body :

```json
{
  "username": "dianlucky",
  "password": "kulakita123"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "dianlucky",
    "name": "kulakita123",
    "token": "session_id_generated"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username or password is incorrect"
}
```

## Get Account

Endpoint : GET /api/current

Headers :

- Authorization: token

Response Body (Success) :

```json
{
  "data": {
    "level_id": 1,
    "username": "dianlucky",
    "password": "kulakita123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorize"
}
```

## Update Account

Endpoint : PATCH /api/users/current

Headers :

- authorization : token

Request Body :

```json
{
  "id": 1,
  "level_id": 1, //optional
  "username": "dianlucky", //optional
  "password": "kulakita123" //optional
}
```

Response Body (Success) :

```json
{
  "data": {
    "level_id": 1,
    "username": "dianlucky",
    "password": "kulakita123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username already registered"
}
```

## Logout

Endpoint : DELETE /api/users/current

Headers :

- authorization : token

Response Body (Success) :

```json
{
  "data": true
}
```
