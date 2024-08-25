# Blog Application Backend

## Overview

This repository contains the backend code for the Blog Application. It provides the necessary API endpoints to support the frontend, including functionalities for managing posts, comments, and user authentication. 

## Features

- **API Endpoints**:
  - **Get All Posts**: Retrieves a list of all blog posts.
  - **Get Post By ID**: Retrieves a single post by its ID.
  - **Create Post**: Allows for the creation of a new blog post.
  - **Update Post**: Updates an existing blog post.
  - **Delete Post**: Deletes a blog post.
  - **Get Comments for a Post**: Retrieves comments for a specific post.
  - **Create Comment**: Adds a new comment to a specific post.
  - **Update Comment**: Updates an existing comment.
  - **Delete Comment**: Deletes a comment.
  - **User Registration**: Registers new users.
  - **User Login**: Authenticates users and provides a JWT token.
  - **Get All Users**: Retrieves a list of all registered users.

- **Authentication**:
  - JWT-based authentication for secure API access.

- **Swagger UI**:
  - Provides interactive API documentation accessible at `/api-docs` for exploring and testing the endpoints.

## Getting Started

### Prerequisites

- Node.js (v20.13.1 or higher)
- npm or yarn
- A PostgreSQL database (or any other database as configured)

### Installation

1. **Install the dependencies:**

    ```bash
    npm install
    ```

2. **Create a `.env` file in the root directory and add the following environment variables:**

    ```makefile
    PORT=5000
    DATABASE_URL=your_database_url
    JWT_SECRET=your_jwt_secret
    ```

3. **Run the database migrations to set up the database schema:**

    ```bash
    npm run migrate
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

   The server will be running at `http://localhost:5000`.

### Swagger UI

Swagger UI is available for interactive API documentation. Access it at:

- **Swagger UI**: `http://localhost:5000/api-docs`

## API Integration

The backend provides the following API endpoints:

- **Get All Posts**
  - **Endpoint**: `GET /posts`
  - **Description**: Retrieves a list of all blog posts.

- **Get Post By ID**
  - **Endpoint**: `GET /posts/:id`
  - **Description**: Retrieves a single post by its ID.

- **Create Post**
  - **Endpoint**: `POST /posts`
  - **Description**: Creates a new blog post.

- **Update Post**
  - **Endpoint**: `PUT /posts/:id`
  - **Description**: Updates an existing blog post.

- **Delete Post**
  - **Endpoint**: `DELETE /posts/:id`
  - **Description**: Deletes a blog post.

- **Get Comments for a Post**
  - **Endpoint**: `GET /posts/:postId/comments`
  - **Description**: Retrieves comments for a specific post.

- **Create Comment**
  - **Endpoint**: `POST /posts/:postId/comments`
  - **Description**: Adds a new comment to a post.

- **Update Comment**
  - **Endpoint**: `PUT /comments/:id`
  - **Description**: Updates an existing comment.

- **Delete Comment**
  - **Endpoint**: `DELETE /comments/:id`
  - **Description**: Deletes a comment.

- **User Registration**
  - **Endpoint**: `POST /register`
  - **Description**: Registers a new user account.

- **User Login**
  - **Endpoint**: `POST /login`
  - **Description**: Authenticates a user and returns a JWT token.

- **Get All Users**
  - **Endpoint**: `GET /users`
  - **Description**: Retrieves a list of all registered users.

## Testing

To run tests, use the following command:

```bash
npm test
```

## Deployment

For deployment, you can use platforms like Heroku, Render, or any other cloud service provider. Follow their documentation for deploying Node.js applications.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This README file provides a comprehensive guide to setting up, using, and contributing to the backend of your blog application. Adjust any details as needed for your specific setup or requirements!
