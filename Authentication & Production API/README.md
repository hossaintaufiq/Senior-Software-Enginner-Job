# Day 01: Authentication & Production API Foundations

This project is a production-ready authentication backend built with Node.js, Express.js, TypeScript, PostgreSQL, Prisma, JWT, and Docker. It is designed as a Day 01 deliverable for the 15-day backend engineering challenge.

## 🎯 Goal

Build a backend service that supports:

- User registration
- User login
- User logout
- Refresh token flow
- Access token authentication
- Password hashing with bcrypt
- Role-based access control
- Request validation
- Global error handling
- Swagger documentation
- Dockerized setup

## 🛠️ Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT
- bcryptjs
- Zod
- Swagger
- Docker
- Docker Compose

## 📁 Project Structure

```bash
config/
controllers/
middleware/
routes/
services/
repositories/
models/
validators/
utils/
types/
app.ts
server.ts
```

## ✅ Core Features

### Authentication
- POST /auth/register
- POST /auth/login
- POST /auth/logout
- POST /auth/refresh
- GET /users/profile
- GET /admin/dashboard

### Security
- Password hashing
- JWT authentication
- Protected routes
- Role-based authorization
- Validation middleware

### Database
- PostgreSQL setup
- Prisma schema
- Users table with:
  - id
  - name
  - email
  - password
  - role
  - createdAt
  - updatedAt

## 🧠 DSA Practice

Solve these problems:

- Two Sum
- Valid Parentheses
- Group Anagrams

For each problem, prepare:
- Brute force solution
- Optimized solution
- Time complexity
- Space complexity

## 🏗️ System Design Topics

Study:

- Authentication vs Authorization
- Session-based authentication
- JWT authentication
- Access token vs refresh token
- Cookies vs local storage
- Password hashing
- HTTPS importance

## 📚 Recommended Resources

### JWT
- https://jwt.io/introduction
- https://auth0.com/docs/secure/tokens/json-web-tokens

### Refresh Tokens
- https://auth0.com/docs/secure/tokens/refresh-tokens

### Password Hashing
- https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html

### PostgreSQL
- https://www.postgresql.org/docs/current/tutorial.html
- https://sqlbolt.com/

### Prisma
- https://www.prisma.io/docs
- https://www.prisma.io/learn

### Express
- https://expressjs.com/en/advanced/best-practice-security.html

### Zod
- https://zod.dev/

### Swagger
- https://swagger.io/docs/

### Docker
- https://docs.docker.com/get-started/

### Logging
- https://getpino.io/

## 🧪 Interview Questions

Be ready to explain:

- What is JWT?
- Why use refresh tokens?
- Authentication vs authorization
- Why hash passwords?
- Why bcrypt instead of SHA-256?
- Why PostgreSQL?
- What happens when a user logs in?
- How would you handle logout in a JWT-based system?

## 🚀 Deliverables

By the end of Day 01, you should have:

- A working authentication API
- PostgreSQL connected
- JWT implemented
- Refresh token flow
- Protected routes
- Role-based access control
- Swagger documentation
- Dockerized application
- A professional README
- Code pushed to GitHub

## 🔧 Setup Instructions

1. Clone the repository
2. Install dependencies
3. Configure environment variables
4. Start PostgreSQL
5. Run Prisma migrations
6. Start the server

## 📌 Note

This README is tailored for Day 01 of the 15-day challenge and can be expanded as the project grows.
