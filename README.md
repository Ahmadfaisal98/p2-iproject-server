# English Tools

API for english-tools websites.
This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

## RESTful endpoints

---

## Endpoint: /login

### POST /login

> to login

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "string",
  "password": "string",
}
```

_Response (200)_

```
login and go to home page

{
  "access_token": "string",
  "fullName": "string"
}

```

_Response (400 - Bad request)_

```
{
  "message": "Wrong Email/Password"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

## Endpoint: /register

### POST /register

> to register

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "string",
  "password": "string",
  "fullName": "string"
}
```

_Response (201)_

```
to login page

{
  "id": 2,
  "email": "bono@mail.com",
  "fullName": "Bono Sejati"
}

```

_Response (400 - Bad request)_

```
{
  "message": ["<error message>"]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

## Endpoint: /loginGoogle

### POST /loginGoogle

> to login

_Request Header_

```
not needed
```

_Request Body_

```
account google
```

_Response (200)_

```
if the user has registered on the career portal : login and go to the home page
if not : the user registered, login and go to home page

{
  "access_token": "string",
  "fullName": "string"
}

```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

## Endpoint: /challenges

### GET /challenges

> Get all challenges

_Request Header_

```
needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
    "id": 1,
    "name": "Make one word",
    "wordLong": 14,
    "totalWords": 1,
    "createdAt": "2021-06-30T15:49:23.780Z",
    "updatedAt": "2021-06-30T15:49:23.780Z"
  },
  {
    "id": 2,
    "name": "Make two words",
    "wordLong": 12,
    "totalWords": 2,
    "createdAt": "2021-06-30T15:49:23.780Z",
    "updatedAt": "2021-06-30T15:49:23.780Z"
  }
  ]
}

```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /challenges/:id

> Get challenge by id

_Request Header_

```
needed
```

_Request Params_

```
id needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  "LBPPYRIGQFNY",
  "JPISMCFAJJBD"
]

```

_Response (404 - Not Found)_

```
{
    "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

## Endpoint: /games

### GET /games

> Get all games

_Request Header_

```
needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
    "UserId": 3,
    "ChallengeId": 1,
    "score": 7,
    "createdAt": "2021-06-30T23:51:44.086Z",
    "updatedAt": "2021-06-30T23:51:44.086Z"
  },
  {
    "UserId": 3,
    "ChallengeId": 1,
    "score": 0,
    "createdAt": "2021-06-30T23:51:59.250Z",
    "updatedAt": "2021-06-30T23:51:59.250Z"
  }
  ]
}

```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### POST /games

> to post game

_Request Header_

```
needed
```

_Request Body_

```
{
  ChallengeId: 1,
  wordInput: ["fun", "bad"],
  wordBase: ["LBPPYRIGQFNY", "JPISMCFAJJBD"],
}
```

_Response (200)_

```
{
  "UserId": 5,
  "ChallengeId": 1,
  "score": 6,
  "updatedAt": "2021-07-01T07:04:39.830Z",
  "createdAt": "2021-07-01T07:04:39.830Z"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---
