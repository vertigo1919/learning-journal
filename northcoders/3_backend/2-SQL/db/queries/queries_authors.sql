-- Purpose: Learn JOIN


\echo '\n >>> Q1 - AUTHORS: the parent full table <<< \n'
SELECT *
FROM authors;


\echo '\n >>> Q2 - BOOKS: the child full table <<< \n' 
SELECT *
FROM books;


\echo '\n >>> Q3 - Shows all books alongside their authors (filters out authors with zero books) <<< \n using INNER JOIN \n'
-- INNER JOIN: glues together rows from two tables that statisy the ON expression

SELECT  books.book_id,
        books.title,  
        authors.author_name
FROM authors
    JOIN books ON authors.author_id = books.author_id;


\echo '\n >>> Q4 - Lists Authors wihout a book <<< \n (complement of Q3, i.e. shows its exclusion set,  using LEFT OUTER JOIN) \n'
-- LEFT OUTER JOIN: keeps all rows of Table A, to which it glues rows from Table B if a match is found, or adds NULL values if not found
SELECT author_name,
       authors.author_id, 
       book_id
FROM authors
    LEFT OUTER JOIN books ON authors.author_id = books.author_id
WHERE book_id IS null;


\echo '\n >>> Q5 - Lists authors wihout a book <<< \n (complement of Q3, i.e. shows its exclusion set, using  RIGHT OUTER JOIN) \n'
-- RIGHT OUTER JOIN: keeps all rows of Table B, to which it glues rows from Table A if a match is found, or adds NULL values if not found

SELECT author_name,
       authors.author_id,
       book_id
FROM books
    RIGHT OUTER JOIN authors ON authors.author_id = books.author_id
WHERE book_id IS null;


\echo '\n >>> Q6 - Lists books wihout an author (FULL OUTER JOIN) <<< \n '
-- FULL OUTER JOIN: keeps all rows from both tables, if a match is found they are glue, if not NULL value are used for the table missing the match

SELECT title,
       author_name
FROM books
    FULL OUTER JOIN authors ON authors.author_id = books.author_id
WHERE authors.author_id IS NULL AND books.book_id IS NOT NULL;


\echo '\n >>> Q7 - Generate every possible combination between the two table (CROSS JOIN) <<< \n '
-- CROSS JOIN
SELECT authors.author_name, books.title
FROM books
    CROSS JOIN authors
LIMIT 10;



