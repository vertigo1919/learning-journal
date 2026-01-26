DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;
CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    price NUMERIC (7, 2),
    quantity_in_stock INT,
    release_date DATE,
    is_fiction BOOLEAN
);

CREATE TABLE authors (
    author_id SERIAL PRIMARY KEY,
    author_name VARCHAR(40) NOT NULL,
    trivia  TEXT
);

ALTER TABLE books
ADD author_id  INT,
ADD CONSTRAINT fk_author
FOREIGN KEY (author_id) 
REFERENCES authors(author_id);

create table extra_books(
    book_id serial primary key,
    title varchar,
    price numeric(5,2),
    quantity_in_stock int,
    release_date date,
    is_fiction boolean
);

