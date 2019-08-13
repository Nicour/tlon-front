

# Tlön

<br>

## Description

The application allows readers to create, review and rate books. It also allows them to add books as favorites.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can create my own reviews.
-  **Login:** As a user I can login to the platform so that I can manage and create my own reviews.
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Book** As a user I can add a book
-  **Add Review** As a user I can add a review
-  **Add Rating** As a user I can rate a book
-  **Edit Book** As a user I can edit a book
-  **Edit Rating** As a user I can edit a book rating
-  **Create My profile** As a user I can create my profile info
-  **Edit My profile** As a user I can edit my profile info
-  **Add Books to my favorites** As a user I can add a book to my favorites
-  **Delete Books from my favorites** As a user I can delete a book from my favorites





## Backlog

User profile:
- see my profile
- search an author
- search a particular book
- reply to a review
- see others favorites
- send messages to other users
- send books to other users
- rate reviews from other users
- set books categories


<br>

# Client / Frontend

## Routes
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | SplashPage           | public      | Home page                                                    |
| `/auth/signup`            | SignupPage           | anon only   | Signup form, link to login, navigate to homepage after signup|
| `/auth/login`             | LoginPage            | anon only   | Login form, link to signup, navigate to homepage after login |
| `/auth/logout`            | n/a                  | anon only   | Navigate to homepage after logout, expire session            |
| `/books`                  | bookListPage         | user only   | Shows all books in a list                                    |
| `/books/add`              | bookListPage         | user only   | Add a book                                                   |
| `/books/:id/edit`         | bookDetailPage       | user only   | Details of a book to edit                                    |
| `/book/:id/delete`        | na                   | user only   | Delete book                                                  |
| `/profile/`               | ProfilePage          | user only   | View Profile                                                 |
| `/profile/edit`           | ProfilePage          | user only   | Edit Profile                                                 |



## Components

- LoginPage

- SignupPage

- SplashPage

- bookListPage

- bookDetailPage

- ProfilePage

- Navbar


  
 

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() 

- book Service
  - book.list()
  - book.detail(id)
  - book.add(id)
  - book.delete(id)
  
- Profile Service 

  - profile.detail(id)
  - profile.edit(id)




<br>


# Server / Backend


## Models

User model

```javascript
{
  username - String // required & unique
  email - String // required 
  password - String // required
  picture - String
  favorites - [ObjectID<Books>]
}
```

Book model

```javascript
{
   name - String,
   image - String,
   author - String,
   category - [], // enum
   editorial - String,
   rating - [1, 2, 3, 4, 5],
   reviews - []
}
```

Review model

```javascript
{
  message - String,
  User - [ObjectID<User>]
}
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | /auth/profile               | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | /auth/signup                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | /auth/login                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | /auth/logout                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | /books                |                              |                | 400          | Show all books                                         |
| GET         | /books/:id            | {id}                         |                |              | Show specific book                                     |
| POST        | /books/add-book | {}                           | 201            | 400          | Create and save a new book                             |
| PUT         | /books/edit/:id       | {name,img,players}           | 200            | 400          | edit book                                              |
| DELETE      | /books/delete/:id     | {id}                         | 201            | 400          | delete book                                            |   
| POST        | /books/add-review | {}                           | 201            | 400          | Create a new review                             |                                                                 
| PUT         | /profile/edit/:id           | {name,img}                   | 201            | 400          | edit profile                                      |
| DELETE      | /profile/delete/:id         | {id}                         | 200            | 400          | delete profile                                     |



<br>


## Links

### Trello/Kanban

[Tlön trello board](https://trello.com/b/nHKeNjKW/tl%C3%B6n) 


### Git


[Client repository Link](https://github.com/Nicour/tlon-client)

[Server repository Link](https://github.com/Nicour/tlon-back)

[Deployed App Link](http://heroku.com)

### Slides


[Slides Link](http://slides.com)

