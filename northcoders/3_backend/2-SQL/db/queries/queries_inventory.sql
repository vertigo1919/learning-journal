-- Purpose: Read-only queries used to explore and validate the dataset
-- Notes: These queries should not modify data

\echo '--- Books in Stock ---' 
-- for pure SQL that runs everywhere use this trick: 
-- SELECT '--- Books in Stock ---' AS " ";
SELECT * FROM books WHERE quantity_in_stock>0;

\echo '--- non-fiction books ---' 
SELECT title FROM books WHERE is_fiction=false;

\echo '--- books released in the 1900s ---' 
SELECT title, release_date FROM books WHERE release_date BETWEEN '1900-01-01' AND '1999-12-31' ;

\echo '--- bbooks with "the" in the title ---' 
SELECT title FROM books WHERE title LIKE '%the%';

\echo '--- All of the books sorted in alphabetical order ---' 
SELECT title FROM books ORDER BY title ASC;

\echo '--- All of the books sorted from most to least expensive ---' 
SELECT title, price FROM books ORDER BY price DESC;

\echo '--- The most expensive book ---' 
SELECT title, price FROM books ORDER BY price DESC LIMIT 1;

\echo '--- The most expensive book --- accounts for multiple books same price - uses subquery' 

SELECT title, price FROM books WHERE price = (SELECT MAX(price) FROM books);

\echo '--- The books that are in stock and are under £7 ---' 
SELECT title, price FROM books WHERE quantity_in_stock > 0 AND price <7;

\echo '--- The books that are under £6 or are non fiction ---' 
SELECT title, price FROM books WHERE is_fiction = false AND price <6;

\echo '--- The books that are under £6 or are non fiction ---' 
SELECT title, price FROM books WHERE is_fiction = false AND price <6;
