# Jobs API

Jobs API is a RESTful API designed to manage job listings. It includes authentication functionality for user registration and login, along with CRUD (Create, Read, Update, Delete) operations for managing job listings. The API provides endpoints for creating, retrieving, updating, and deleting job listings, with error handling mechanisms to ensure smooth operation.

## Features

- **Authentication**: Users can register with a name, email, and password, and authenticate via login.
- **Job CRUD Operations**: Users can perform CRUD operations on job listings, including creating, retrieving, updating, and deleting jobs.
- **Job Fields**: Each job listing includes fields such as company, position, status, and createdBy user.
- **Error Handling**: The API includes robust error handling mechanisms to handle various scenarios gracefully and provide informative responses.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: MongoDB (or any other database of your choice)
- **Additional libraries**: jsonwebtoken for JWT generation and verification, bcryptjs for password hashing, etc.

## Installation

1. Clone the repository: `git clone https://github.com/Shahzaib-ur-Rehman/jobs-api.git`
2. Navigate to the project directory: `cd jobs-api`
3. Install dependencies: `npm install`
4. Configure environment variables: Create a `.env` file in the root directory and define necessary variables like database connection string, secret key for JWT, etc.
5. Start the server: `npm start`

## API Endpoints

- **User Registration**: `POST /api/v1/auth/register`
  - Parameters:
    - `name`: User's name
    - `email`: User's email
    - `password`: User's password
- **User Login**: `POST /api/v1/auth/login`
  - Parameters:
    - `email`: User's email
    - `password`: User's password
- **Job CRUD Operations**:
  - Create Job: `POST /api/v1/jobs`
  - Get All Jobs: `GET /api/v1/jobs`
  - Get Job by ID: `GET /api/v1/jobs/:id`
  - Update Job: `PUT /api/v1/jobs/:id`
  - Delete Job: `DELETE /api/v1/jobs/:id`

## Usage

1. Start the server according to the installation instructions.
2. Use any API testing tool (such as Postman) to send requests to the API endpoints.
3. Register a new user using the `/api/v1/auth/register` endpoint.
4. Authenticate using the registered email and password via the `/api/v1/auth/login` endpoint to receive a JWT token.
5. Use the JWT token in the Authorization header as a Bearer token for accessing the job CRUD endpoints.
6. Perform CRUD operations on job listings as required.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgements

- Inspiration: [[FreeCodeCamp](https://www.youtube.com/watch?v=qwfE7fSVaZM&ab_channel=freeCodeCamp.org)]
- Special thanks to contributors and supporters of the project.
