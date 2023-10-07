# Bookstore Backend Documentation

This documentation provides an overview of the Node.js backend for a bookstore application. The backend is responsible for handling various operations related to managing books, authors,  and owner.

``BASE_URL = https://node-deploym.onrender.com``


## Table of the BookStore
   - [owner]
   - [Book]
   - [BooStore]
   - [author]


To set up the backend for the bookstore application, follow these steps:

1. Clone the repository:

   ````bash
   git clone <repository_url>
   ```

2. Install dependencies:

   ````bash
   cd Note-project-three-authentication
   npm install
   ```

3. Configure the environment variables:
   - Create a `.env` file in the root directory.
   - Set the following environment variables:
     - `PORT` - Port number on which the server will run (default: 9000)
     - `DATABASE_URL` - URL of the database (e.g., subapase connection string)
     - `JWT_SECRET` - Secret key for JSON Web Token (JWT) authentication

4. Start the server:

   ````bash
   npm start nodemon
   ```

   The server will run at `http://localhost:9000`

### owner SignUp

Register a new owner in the database.

**Endpoint:** `POST /api/owners/signup`

#### Request Body

| Parameter      | Type   | Required | Description                   |
| -------------- | ------ | -------- | ------------------------------ |
| `name      `   | string | Yes      | name of the owner.|
| `email`        | string | Yes      | Email of the owner.  |
| `password`     | string | Yes      | Password for the owner's account.|


#### Response

```json
{
   "status": 201,
    "message": "Owner created successFully",
    "newOwner": {
        "id": 5,
        "name": "Hiba Alii",
        "email": "Hiba@gmail.com",
        "password": "$2b$10$50JX83FaEA7whOxyckuw9OElsA/oYv0QGshKWs59JIfSKzTrBhvB6",
        "created": "2023-10-07T14:13:37.588Z",
        "updated": "2023-10-07T14:13:37.588Z"
    }
}
```

### owner Login

Authenticate a owner and obtain a JWT token.

**Endpoint:** `POST /api/owners/login`

#### Request Body

| Parameter      | Type   | Required | Description                             |
| -------------- | ------ | -------- | --------------------------------------- |
| `email`        | string | Yes      | Email of the owner.                   |
| `password`     | string | Yes      | Password for the owner's account.      |

#### Response

```json
{
    "status": 200,
    "message": "Owner logged in successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJIaWJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NjY4ODIyOSwiZXhwIjoxNjk2NjkxODI5fQ.nuaPeUG3H7wHwX7BHjGQNHxXeqo0jictWcLhu9Htcik"
}
```

### Create author

Create a new author .

**Endpoint:** `POST /api/authors/create_author`

#### Request Body

| Parameter       | Type    | Required | Description                            |
| --------------- | ------- | -------- | -------------------------------------- |
| `name`            | string  | Yes      | name of the author.                        |

#### Response

```json
{
 "status": 200,
  "message": "author successFully added"
}
```

### Update author

Update the details of a specific author 

**Endpoint:** `PUT /api/books/:update_author/:id`

#### Request Parameters

| Parameter       | Type    | Required | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
|`update_author/:id`| integer | Yes      | ID of the author to update.             |

#### Response

```json
{
  {
  "status": 200,
  "message": "Author updated successFully"
}
}
```

### Delete author

Delete a specific author .

**Endpoint:** `DELETE /api/books/:/delete_author/:id`

#### Request Parameters

| Parameter       | Type    | Required | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
| `/delete_author/:id`   | integer | Yes      | ID of the author to delete.             |

#### Response

```json
{
  "status": 200,
  "message": "Author delted successFully"
}
```


### Create a Book

Create a new Book owned by the authenticated owner.

**Endpoint:** `POST /api/books/create_book`

#### Request Body

| Parameter       | Type    | Required | Description                            |
| --------------- | ------- | -------- | -------------------------------------- |
| `id`            | string  | Yes      | id of the book.                        |
| `autherId   `   | string  | Yes      | Id of the author.                      |
| `BookStoreId`   | string  | Yes      | Id of the BookStore.                   |
| `title`         | integer | Yes      | title of the book.                     |
| `price`         | integer | Yes      | price of the property.                 |
| `image`         | string  | Yes      | URL of an image representing the book. |

#### Response

```json
{
 "status": 200,
  "message": "Book successFully added"
}
```

### Update book

Update the details of a specific book 

**Endpoint:** `PUT /api/books/:update_book/:id`

#### Request Parameters

| Parameter       | Type    | Required | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
|`update_book/:id`| integer | Yes      | ID of the book to update.             |

#### Response

```json
{
    "status": 200,
  "message": "book updated successFully"
}
```

### Delete book

Delete a specific book

**Endpoint:** `DELETE /api/books/:/delete_book/:id`

#### Request Parameters

| Parameter       | Type    | Required | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
| `/delete_book/:id`   | integer | Yes      | ID of the book to delete.             |

#### Response

```json
{
   "status": 200,
  "message": "book deleted successFully"
}
```


Possible error messages:

- `401 Authentication failed - missing token`: The request requires authentication, but the owner is not token 
- `404 owner already exist`: The owner already exist in the database
- `404 book not found`: The requested book request does not exist.
- `404 author not found`: The requested author request does not exist.
- `404 BookStore was not added`: no books in the store.
-`500 Internal Server`: added, updated and deleted not succesfull
-`status 200`: added, updated and deleted  succesfull




