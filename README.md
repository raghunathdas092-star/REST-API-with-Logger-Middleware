# 🚀 User Management REST API with Logger Middleware

A backend application built using **Node.js** and **Express.js** that demonstrates REST API development, custom middleware implementation, request logging, and user management operations.

## 📌 Project Overview

This project showcases how custom middleware can be used to monitor and log incoming HTTP requests while providing a modular REST API for managing user data. It follows best practices for Express.js application structure and API development.

## ✨ Features

* ✅ Express.js server setup
* ✅ RESTful API architecture
* ✅ Custom Logger Middleware
* ✅ Request and Response Monitoring
* ✅ User CRUD Operations
* ✅ Error Handling Middleware
* ✅ Modular Route Structure
* ✅ API Testing with Postman
* ✅ Clean and Scalable Codebase

## 🛠️ Tech Stack

| Technology       | Purpose                |
| ---------------- | ---------------------- |
| Node.js          | JavaScript Runtime     |
| Express.js       | Backend Framework      |
| JavaScript (ES6) | Application Logic      |
| Postman          | API Testing            |
| Git              | Version Control        |
| GitHub           | Source Code Management |

## 📁 Project Structure

```
Task8-Logger-Middleware/
│
├── middleware/
│   └── logger.js
│
├── routes/
│   └── users.js
│
├── server.js
├── package.json
├── README.md
└── .gitignore
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/user-management-rest-api.git
```

### 2. Navigate to the Project Folder

```bash
cd user-management-rest-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
node server.js
```

or

```bash
npm start
```

## 🌐 API Endpoints

### Get All Users

```
GET /users
```

### Get User by ID

```
GET /users/:id
```

### Create New User

```
POST /users
```

### Update User

```
PUT /users/:id
```

### Delete User

```
DELETE /users/:id
```

## 📋 Logger Middleware Example

Every incoming request is logged with useful information such as:

* HTTP Method
* Request URL
* Date & Time
* Request Status

Example:

```
GET /users
Time: 2026-06-22T10:30:15Z
Status: 200 OK
```

## 🧪 Testing

API endpoints were tested using **Postman** to verify:

* GET Requests
* POST Requests
* PUT Requests
* DELETE Requests
* Middleware Execution
* Error Responses

## 📸 Screenshots

You can add the following screenshots:

* Application Structure
* VS Code Project
* Postman GET Request
* Postman POST Request
* Terminal Logger Output

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* Express.js Middleware
* REST API Development
* Backend Routing
* Request Logging
* Modular Application Design
* API Testing
* Git & GitHub Workflow

## 🔮 Future Enhancements

* MongoDB Database Integration
* JWT Authentication
* User Login & Registration
* Role-Based Access Control
* API Documentation with Swagger
* Docker Support
* Unit & Integration Testing

## 👨‍💻 Author

**Raghunath Das**

* Full Stack Developer (Aspiring)
* Python & Node.js Enthusiast
* Backend & REST API Developer

---

### ⭐ If you found this project useful, consider giving it a Star and sharing your feedback!
