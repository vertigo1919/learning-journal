-- Purpose: Learn JOIN
-- Notes: 

\echo '\n >>> AUTHORS: the parent full table <<< \n'
SELECT *
FROM authors;

\echo '\n >>> BOOKS: the child full table <<< \n' 
SELECT *
FROM books;

\echo '\n >>> Shows all books alongside their authors (filters out authors with zero books) using INNER JOIN <<< \n'
-- 'INNER JOIN: glues together rows from two tables that statisy the ON expression'
SELECT  books.book_id,
        books.title,  
        authors.author_name

FROM authors
    JOIN books ON authors.author_id = books.author_id;

\echo '\n >>> Lists Authors wihout a book <<< \n (complement of the above, i.e. shows its exclusion set, using using LEFT OUTER JOIN)'
-- 'LEFT OUTER JOIN: keeps all rows of Table A, to which it glues rows from Table B if a match is found, or adds NULL values if not found'
SELECT author_name, book_id
FROM authors
    LEFT OUTER JOIN books ON authors.author_id = books.author_id
WHERE book_id IS null;

\echo 'Authors wihout a book ("anti-join", i.e. everything that inner join excluded - using RIGHT OUTER JOIN)'
SELECT author_name, book_id
FROM books
    RIGHT OUTER JOIN authors ON authors.author_id = books.author_id
WHERE book_id IS null;

\echo 'Authors wihout a book ("anti-join", i.e. everything that inner join excluded - using RIGHT OUTER JOIN)'
SELECT author_name, book_id
FROM books
    RIGHT OUTER JOIN authors ON authors.author_id = books.author_id
WHERE book_id IS null;

\echo 'Generate every possible combination between the two table (cross join)'
SELECT authors.author_name, books.title
FROM books
    CROSS JOIN authors
LIMIT 10;


