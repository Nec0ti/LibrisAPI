# LibrisAPI

LibrisAPI is a RESTful API for managing your personal book collection.

## Purpose

This API allows you to:

*   Create, retrieve, update, and delete books.
*   Authenticate users with JWT (JSON Web Tokens).

## Documentation

For detailed information on how to use the API, please refer to the [LibrisAPI Documentation](https://docs.librisapi.necoti.dev).

## Getting Started

1.  Clone the repository:

    ```bash
    git clone https://github.com/Nec0ti/LibrisAPI/
    cd LibrisAPI
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Set up environment variables:

    Create a `.env` file with the following variables:

    ```
    MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
    JWT_SECRET=your_jwt_secret_key
    ```

4.  Start the server:

    ```bash
    npm run dev
    ```

## Endpoints

Here are a few basic examples:

*   **Register:** `POST /api/auth/register`
    ```json
    {
      "username": "testuser",
      "password": "testpassword"
    }
    ```

*   **Login:** `POST /api/auth/login`
    ```json
    {
      "username": "testuser",
      "password": "testpassword"
    }
    ```

*   **Get All Books:** `GET /api/books` (requires JWT token in `x-auth-token` header)

## Contributing

We welcome contributions! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
