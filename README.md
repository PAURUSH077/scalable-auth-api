# 🚀 Scalable Auth & Task Management API

## 📌 Overview

This project is a full-stack application built as part of a Backend Developer Intern assignment. It demonstrates a secure and scalable REST API with authentication, along with a basic frontend UI to interact with the APIs.

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (password hashing)

### Frontend

* React (Vite)
* Axios
* React Router DOM

---

## 🔐 Features

### Authentication

* User Registration
* User Login
* Password hashing using bcrypt
* JWT-based authentication

### Authorization

* Protected routes using JWT
* Only authenticated users can access task APIs

### Task Management (CRUD)

* Create Task
* Get User Tasks
* Delete Task

---

## 🌐 API Endpoints

### Auth Routes

* POST `/api/v1/auth/register` → Register user
* POST `/api/v1/auth/login` → Login user

### Task Routes (Protected)

* GET `/api/v1/tasks` → Get all tasks
* POST `/api/v1/tasks` → Create task
* DELETE `/api/v1/tasks/:id` → Delete task

---

## 🧪 Testing APIs

APIs can be tested using:

* Thunder Client (VS Code)
* Postman

---

## 🖥️ Frontend Features

* Login Page
* Register Page
* Protected Dashboard

  * View tasks
  * Add task
  * Delete task
* JWT stored in localStorage
* Redirect to login if not authenticated

---

## 🔒 Security Practices

* Password hashing using bcrypt
* JWT token-based authentication
* Protected API routes
* User-specific task access

---

## 📁 Project Structure

```
backend/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── config/
 ├── app.js
 └── server.js

frontend/
 ├── src/
 │    ├── pages/
 │    ├── api/
 │    ├── App.jsx
 │    └── main.jsx
```

---

## ⚙️ Setup Instructions

### Backend

```bash
cd backend
npm install
npm run dev
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🚀 Future Improvements

* Role-based access (Admin/User)
* Input validation (Joi/Zod)
* Swagger API documentation
* Docker deployment
* Pagination & filtering

---

## 👨‍💻 Author

Paurush Mishra

---

## 📌 Notes

This project focuses on backend fundamentals, security, and API design, with a minimal frontend to demonstrate functionality.

