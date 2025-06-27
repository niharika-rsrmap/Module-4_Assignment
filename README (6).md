# LMS Authentication and Role-Based Access Control

This project implements secure user authentication and role-based access control (RBAC) for a Learning Management System (LMS) platform using Node.js and Express.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd lms-auth-rbac
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file based on the provided `.env.example` and fill in the required environment variables.

## Usage

To start the application, run:
```
npm start
```

The server will start on the specified port (default is 3000).

## API Endpoints

- **POST /register**
  - Register a new user.
  - Request body: `{ "username": "string", "password": "string", "role": "string" }`
  
- **POST /login**
  - Authenticate a user and return a JWT.
  - Request body: `{ "username": "string", "password": "string" }`

## Folder Structure

```
lms-auth-rbac
├── src
│   ├── app.js
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── authController.js
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── rbacMiddleware.js
│   ├── models
│   │   ├── user.js
│   │   └── role.js
│   ├── routes
│   │   └── authRoutes.js
│   └── utils
│       └── tokenUtils.js
├── package.json
├── .env
└── README.md
```

## License

This project is licensed under the MIT License.