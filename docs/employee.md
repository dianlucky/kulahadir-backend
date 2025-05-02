# Employee API Spec

## Create Employee

Endpoint : POST /api/employee

Request Body :

```json
{
  "account_id": 1,
  "name": "Dian Lucky Prayogi",
  "birth_date": "23-05-2003",
  "phone": "081349445267"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "account_id": 1,
    "name": "Dian Lucky Prayogi",
    "birth_date": "23-05-2003",
    "phone": "081349445267"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Employee already registered"
}
```

## Get Employee

Endpoint : GET /api/current

Headers :

- authorization: token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "account_id": 1,
    "name": "Dian Lucky Prayogi",
    "birth_date": "23-05-2003",
    "phone": "081349445267"
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

Endpoint : PATCH /api/employee/current

Headers :

- authorization : token

Request Body :

```json
{
  "id": 1,
  "account_id": 1,
  "name": "Dian Lucky Prayogi",
  "birth_date": "23-05-2003",
  "phone": "081349445267"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "account_id": 1,
    "name": "Dian Lucky Prayogi",
    "birth_date": "23-05-2003",
    "phone": "081349445267"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Employee already registered"
}
```

## Search Employee

Endpoint : GET /api/contacts

Headers :

- authorization : token

Query params :

- name : string, contact first name or contact lastname, optional
- phone : string, contact phone, optional
- level_id : number, account level_id, optional
- level_name :  string, account.level.name., optional

Response Body :

```json
{
  "data": [
    {
      "id": 1,
      "account_id": 1,
      "name": "Dian Lucky Prayogi",
      "birth_date": "23-05-2003",
      "phone": "081349445267"
    },
    {
      "id": 1,
      "account_id": 1,
      "name": "Dian Lucky Prayogi",
      "birth_date": "23-05-2003",
      "phone": "081349445267"
    }
  ]
}
```
