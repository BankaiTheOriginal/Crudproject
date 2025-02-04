# CRUD App with Prisma

## Overview

This is a full-stack CRUD (Create, Read, Update, Delete) application with both frontend and backend, using Prisma as the database ORM.

## Features

- User authentication (if implemented)
- Create, Read, Update, Delete operations
- Prisma ORM for database management
- API routes for handling requests
- Frontend built with modern frameworks (React/Next.js)

## Tech Stack

### Frontend

- React.js / Next.js
- Tailwind CSS
- Axios (for API requests)

### Backend

- NestJS
- Prisma ORM
- PostgreSQL

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js (v16+ recommended)
- PostgreSQL/MySQL/SQLite (depending on your setup)
- Prisma CLI (`npm install -g prisma`)
- Git
- Nest from Node

### Clone the Repository

```bash
git clone https://github.com/BankaiTheOriginal/Crudproject.git
cd <your-project-folder>
```

### Install Dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
```

### Database Setup

1. Configure your `.env` file in the backend directory:

```env
DATABASE_URL="your-database-url"
```

2. Run Prisma migrations:

```bash
cd backend
npx prisma migrate dev --name init
```

### Running the Application

#### Backend

```bash
cd backend
npm run start
```

#### Frontend

```bash
cd frontend
npm run dev
```

### API Endpoints

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | `/users`      | Get all users     |
| POST   | `/create`     | Create a new user |
| PUT    | `/update/:id` | Update item by ID |
| DELETE | `/users`      | Delete item by ID |

### Prisma Commands

- `npx prisma studio` – Open Prisma Studio to inspect your DB
- `npx prisma migrate dev` – Run migrations
- `npx prisma generate` – Generate Prisma client

## License

This project is licensed under the MIT License.

## Author

- Justice Julius-Attah Chukwulaka
