-- Purpose: Defines the database schema for the bookshop domain
-- Notes: The execution order follows the course learning module structure, not standard best practices.
-- In particular tables are created before their dependencies to demonstrate ALTER TABLE.

-- 1) Implement idempotency
DROP TABLE IF EXISTS books, authors, extra_books, genres;

-- 2) CREATE books
CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    price NUMERIC (7, 2),
    quantity_in_stock INT,
    release_date DATE,
    is_fiction BOOLEAN
);

-- 3) CREATE auhtors
CREATE TABLE authors (
    author_id SERIAL PRIMARY KEY,
    author_name VARCHAR(40) NOT NULL,
    trivia  TEXT
);

-- 4) ALTER books to add a foregin key 
ALTER TABLE books
ADD author_id  INT,

--we give the rule a human name
ADD CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES authors(author_id) ON DELETE CASCADE;

-- 5) CREATE extra_books
CREATE TABLE extra_books(
    book_id serial primary key,
    title varchar,
    price numeric(5,2),
    quantity_in_stock int,
    release_date date,
    is_fiction boolean
);

-- 6) CREATE genres
CREATE TABLE genres(
    genre_id SERIAL PRIMARY KEY,
    genre_name varchar
);

-- 7) CREATE book_genres junction table
-- NB here we define the rules inline
-- DELETE CASCADE is essential to guarante child (junction entry) to die on parent's death
CREATE TABLE book_genres(
    book_id INT REFERENCES books(book_id) ON DELETE CASCADE,
    genre_id INT REFERENCES genres(genre_id) ON DELETE CASCADE,

-- Here we define a composite key - essential to prevent multiple "tagging" e.g. assigning fiction 5 times to a novel
    PRIMARY KEY (book_id, genre_id)
);

