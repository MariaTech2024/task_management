# Task Management API

Backend API for a task management (TODO) platform built with Node.js, Express, and SQLite.  
It supports creating, updating, deleting, and retrieving tasks.

---

## Features

- Create tasks with `text` and `status` (`"in progress"` or `"completed"`)
- Update task status
- Delete tasks
- Retrieve task list with optional filtering by status

---

## Technology Stack

- **Node.js** (v24)
- **Express.js**
- **SQLite** (local file database)
- **Docker** (containerization)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (for local setup)
- [Docker](https://www.docker.com/get-started) installed (recommended)

---

### Local Setup (without Docker)

1. Clone the repository:

   ```bash
   git clone https://github.com/MariaTech2024/task_management.git
   cd backend

2. Install dependencies:

   npm install

3. Start the server:

   npm start

4. Server runs at: http://localhost:3000


🐳 Using Docker

1. Build the Docker image:

   docker build -t todo-api .

2. Run the container

   docker run -p 3000:3000 todo-api

The API will now be running at http://localhost:3000


API Endpoints Summary
✅ Create a Task

POST /tasks
Creates a new task with a description and optional status.
Body:
{
  "text": "Example task",
  "status": "in progress" 
}

Response:
{
  "id": 1,
  "text": "Example task",
  "status": "in progress"
}

📋 Get All Tasks
GET /tasks
Retrieves a list of all tasks.

🔍 Check Task Status via GET /tasks

In browser or REST client (like Postman):

http://localhost:3000/tasks?status=completed or http://localhost:3000/tasks?status=in progress


🔄 Update Task Status

PATCH /tasks/:id
Updates the status of a specific task.
Body:
{
  "status": "completed"
}

Response:
{
  "id": 1,
  "text": "Example task",
  "status": "completed"
}

❌ Delete a Task
DELETE /tasks/:id
Deletes a specific task.
Response:
  {message: 'Task deleted'}
