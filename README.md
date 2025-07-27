# Express REST API - Sample Project

This is a simple REST API built with **Express.js** that demonstrates how to perform basic CRUD operations using in-memory data (no database or file system).

## Features

* View all data
* Search data using path parameters
* Add new data
* Returns JSON responses
* Uses CORS and JSON middleware

## Technologies Used

* Node.js
* Express.js
* CORS

## Getting Started

### Prerequisites

* Node.js installed (v18+ recommended)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/alinazir105/Startup-Planet-API.git
cd Startup-Planet-API
```

2. Install dependencies:

```bash
npm install
```

### Running the Server

```bash
node server.js
```

Server runs on: `http://localhost:8000`

## API Endpoints

All endpoints are prefixed with `/api`

### GET `/api`

Returns the full list of data.

Supported query parameters: industry, country, continent, is_seeking_funding, has_mvp

Note: is_seeking_funding, has_mvp can have value either true or false

### GET `/api/:field/:term`

Returns matching entries by searching the provided field and term.

Example:

```bash
GET /api/industry/Tech
```

### POST `/api`

Adds a new entry to the data.

#### Request Body:

```json
{name: "NextGen Dynamics",
    industry: "Renewable Energy",
    founded: 2018,
    country: "Australia",
    continent: "Oceania",
    business_address: {
      street: "824 Venture Lane",
      city: "Sydney",
      state: "New South Wales",
    },
    founders: [
      {
        name: "Maria Al-Farsi",
        role: "CEO",
      },
      {
        name: "Olivia Nguyen",
        role: "CTO",
      },
    ],
    employees: 45,
    website: "https://www.nextgendynamics.com",
    mission_statement:
      "Revolutionizing renewable energy with cutting-edge innovation.",
    description:
      "NextGen Dynamics specializes in renewable energy solutions designed for the future.",
    is_seeking_funding: false,
    has_mvp: false,
}
```

## File Structure

```
.
├── controllers
│   ├── addData.js
│   ├── getAllData.js
│   └── getDataByPathParams.js
├── data
│   └── data.js
├── routes
│   └── apiRoutes.js
├── server.js
└── README.md
```

## Notes

* Data is stored in memory and will reset when the server restarts.
* You can extend this project later with file system or database support.

## License

This project is licensed under the MIT License.
