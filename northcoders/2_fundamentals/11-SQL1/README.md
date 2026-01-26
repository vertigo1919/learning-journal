# SQL Fundamentals

This project contains a set of SQL exercises focused on schema design, queries, and stored procedures.
The goal was to practise working directly with SQL.

## Core SQL Concepts

- Relational schema design with appropriate data types and constraints
- Primary keys and referential integrity
- Seed data for predictable local development
- Querying and transforming data with `SELECT`, `JOIN`, `WHERE`, and aggregation

## Stored Procedures & Business Logic

- Encapsulating business rules in reusable procedures
- Performing controlled updates and deletions
- Preventing invalid or inconsistent data states
- Automating common database operations

---

## Context

- All SQL files were written by me.
- The database requirements and scenarios were provided by **Northcoders** as part of a learning module.

---

## Running Locally

This project uses a Node.js script to set up the database.

Requirements:

- PostgreSQL
- Node.js

```bash
npm run setup-db
```

To run an individual stored procedure:

```bash
psql -d bookshop_db -f db/procedures/name_of_procedure.sql



```
