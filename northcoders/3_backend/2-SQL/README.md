# SQL Fundamentals

This project demonstrates core SQL principles including schema design, complex queries, stored procedures, and environment management using dotenv and connection pools.

> **Next Step:** This repository serves as the foundational learning for building a full API server: https://github.com/vertigo1919/headless-press-api

## 📚 Core SQL Concepts

### 1. Architecture & Design

- **Separation of Concerns:** Distinct scripts for Setup (Infrastructure), Schema (Structure), and Seeds (Data).
- **Relational Design:** Normalized tables with appropriate data types, Primary Keys, and Referential Integrity constraints.
- **Environment Management:** Using `dotenv` and `pg` pools to securely separate Development and Test environments.

### 2. Data Manipulation

- **Complex Querying:** Transforming data with `JOIN` (Inner/Outer/Cross), `WHERE`, and Aggregation functions.
- **Data Integrity:** Preventing invalid states using constraints and transactions.
- **Predictable Seeding:** Idempotent scripts that ensure a clean state for local development.

### 3. Business Logic (Stored Procedures)

- Encapsulating business rules in reusable SQL scripts.
- Performing controlled updates (e.g., seasonal price changes) and "soft" or "hard" deletions.
- Automating common database maintenance tasks.

## 🛠 Project Structure

### Database Files

- `db/setup.sql`: infrastructure script (Drops/Creates DBs).
- `db/schema.sql`: Structure definition (Tables & Constraints).
- `db/seeds.sql`: Data population (Development data).
- `db/queries/`: specific SQL analysis scripts.
- `db/procedures/`: write-heavy scripts for maintenance and business logic.

### Application Logic

- `db/connection.js`: Configures the **PG Pool** to connect to the correct database (Test vs Dev) based on `ENV` variables.
- `.env.test` / `.env.development`: Stores environment-specific configuration.

## 🚀 Running Locally

### Setup

This project uses a Node.js script to set up the database.

Requirements:

- PostgreSQL
- pg
- Node.js
- Jest
- dotenv

```bash
npm run setup
```

Create the following .env files in the root directory:

.env.development

```bash
PGDATABASE=nc_bookshop_dev
.env.test
```

.env.test

```Bash
PGDATABASE=nc_bookshop_test
```

### Running the queries

Run pre-written SQL scripts to analyze the data

```bash
npm run query:inventory
npm run query:authors
npm run query:genres
```

### Run the stored procedures

```bash
# Note: The '--' is required to pass the file path argument
npm run sql -- .db/procedures/nameOfProcedure.sql
```

> [!IMPORTANT] > **Reseting the Data**
> These procedures modify the database state permanently (e.g., deleting rows or changing prices).
>
> To restore the original dataset and reset all IDs/sequences, simply run the seed script again:
>
> ```bash
> npm run seed-dev
> ```

## Context

- All SQL files were written by me.
- The database requirements and scenarios were provided by **Northcoders** as part of a learning module.
