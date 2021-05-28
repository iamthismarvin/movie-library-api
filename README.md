<div align="center">
  <img src="#" alt="movie-library-api" height="100">
  <h1>Movie Library (API)</h1>
  <h4>API for Movie Library project.</h4>
</div>

## Table of Contents

- [Features](#Features)
- [Stack](#Stack)
- [Notes](#Notes)
- [API](#API)
  - [General](###General)
  - [Users](###Users)
  - [Movies](###Movies)

## Features

```
- Keep track of movies and series you own.
- View movie information. (Director, Writer, Actors, Plot, Year of Release, etc...)
- Add a custom numbering system to your library.
- Specify the type of format you own your movies and series in. (DVD, Bluray, Bluray 4K, Digital)
- Add notes to your movies and series.
```

## Stack

AdonisJS, TypeScript, and PostgreSQL.

## Notes

This is project is still under development.

## API

| Route         | Request Method | Group   | Response                                     |
| :------------ | :------------- | :------ | :------------------------------------------- |
| `/`           | `GET`          | General | Returns project description.                 |
| `/users`      | `GET`          | Users   | Returns list of users in `users` table.      |
| `/users`      | `POST`         | Users   | Creates user in `users` table.               |
| `/users/:id`  | `GET`          | Users   | Returns user with `id` from `users` table.   |
| `/users/:id`  | `DELETE`       | Users   | Deletes user with `id` from `users` table.   |
| `/movies`     | `GET`          | Movies  | Returns list of movies in `movies` table.    |
| `/movies`     | `POST`         | Movies  | Creates movie in `movies` table.             |
| `/movies/:id` | `GET`          | Movies  | Returns movie with `id` from `movies` table. |
| `/movies/:id` | `DELETE`       | Movies  | Deletes movie with `id` from `movies` table. |

### General

Request: `GET`

| Route | Request Method | Response |
| :---- | :------------- | :------- |
| `/`   | `GET`          | `string` |

Example:

```
'Movie Library API by Marvin Parada. (https://marvin.dev)'
```

### Users

| Route    | Request Method | Response |
| :------- | :------------- | :------- |
| `/users` | `GET`          | `array`  |

Example:

```json
[
  {
    "id": 6,
    "created_at": "2021-05-26T19:15:13.255-07:00",
    "updated_at": "2021-05-26T19:15:13.255-07:00",
    "username": "bruce",
    "display_name": null,
    "role": "user"
  },
  {
    "id": 3,
    "created_at": "2021-05-26T18:22:32.898-07:00",
    "updated_at": "2021-05-26T18:22:32.911-07:00",
    "username": "steve",
    "display_name": null,
    "role": "admin"
  },
  {
    "id": 1,
    "created_at": "2021-05-26T16:22:37.205-07:00",
    "updated_at": "2021-05-26T16:22:37.217-07:00",
    "username": "thor",
    "display_name": null,
    "role": "user"
  }
]
```

| Route    | Request Method | Payload  |
| :------- | :------------- | :------- |
| `/users` | `POST`         | `object` |

Example:

```json
{
  "username": "steve",
  "password": "rogers"
}
```

| Route        | Request Method | Response |
| :----------- | :------------- | :------- |
| `/users/:id` | `GET`          | `object` |

Example:

```json
{
  "id": 1,
  "created_at": "2021-05-26T16:22:37.205-07:00",
  "updated_at": "2021-05-26T16:22:37.217-07:00",
  "username": "thor",
  "display_name": null,
  "role": "user"
}
```

| Route        | Request Method | Response                                   |
| :----------- | :------------- | :----------------------------------------- |
| `/users/:id` | `DELETE`       | Deletes user with `id` from `users` table. |

### Movies

| Route     | Request Method | Response |
| :-------- | :------------- | :------- |
| `/movies` | `GET`          | `array`  |

Example:

```json
[
  {
    "id": 9,
    "created_at": "2021-05-27T19:15:05.154-07:00",
    "updated_at": "2021-05-27T19:15:05.154-07:00",
    "purchased_at": "2021-12-25T08:00:00.000Z",
    "purchase_location": "Movie Shop",
    "library_id": "M-1",
    "notes": "Left in Stuart's place.",
    "info": {
      "plot": "It's a whole new world over here",
      "year": 2020,
      "cover": "images/image.png",
      "genre": ["Action", "Thriller"],
      "title": "New World",
      "actors": ["William Dera", "Audrey Krutz"],
      "writer": ["Jordan Moore"],
      "director": ["Phillip Wick"]
    },
    "format": {
      "dvd": false,
      "digital": true,
      "bluray_hd": true,
      "bluray_uhd": true
    }
  }
]
```

| Route     | Request Method | Payload  |
| :-------- | :------------- | :------- |
| `/movies` | `POST`         | `object` |

Example:

```json
{
  "purchased_at": "2021-12-25",
  "purchase_location": "Movie Shop",
  "library_id": "M-2",
  "notes": "Left at Peter's place.",
  "info": {
    "title": "New World",
    "year": 2020,
    "genre": ["Action", "Thriller"],
    "director": ["Tony Stark"],
    "writer": ["Thor Odinson"],
    "actors": ["Bruce Banner", "Natasha Romanova"],
    "plot": "It's a whole new world over here",
    "cover": "images/image.png"
  },
  "format": {
    "bluray_hd": true,
    "bluray_uhd": true,
    "dvd": false,
    "digital": true
  }
}
```

| Route         | Request Method | Response |
| :------------ | :------------- | :------- |
| `/movies/:id` | `GET`          | `object` |

Example:

```json
{
  "id": 9,
  "created_at": "2021-05-27T19:15:05.154-07:00",
  "updated_at": "2021-05-27T19:15:05.154-07:00",
  "purchased_at": "2021-12-25T08:00:00.000Z",
  "purchase_location": "Movie Shop",
  "library_id": "M-1",
  "notes": "Left in Stuart's place.",
  "info": {
    "plot": "It's a whole new world over here",
    "year": 2020,
    "cover": "images/image.png",
    "genre": ["Action", "Thriller"],
    "title": "New World",
    "actors": ["William Dera", "Audrey Krutz"],
    "writer": ["Jordan Moore"],
    "director": ["Phillip Wick"]
  },
  "format": {
    "dvd": false,
    "digital": true,
    "bluray_hd": true,
    "bluray_uhd": true
  }
}
```

| Route         | Request Method | Response                                    |
| :------------ | :------------- | :------------------------------------------ |
| `/movies/:id` | `DELETE`       | Deletes user with `id` from `movies` table. |
