-- Purpose: query book genres (many to many relationship), use of aggregrate functions

\echo '\n >>> Q1A - List all genres that a certain book belongs to <<< \n'
--JOINING MORE THAN 2 TABLES
SELECT books.title,
    genres.genre_name
FROM books
    JOIN book_genres ON books.book_id = book_genres.book_id
    JOIN genres ON book_genres.genre_id = genres.genre_id
LIMIT 10;

\echo '\n >>> Q1B - List all genres that a certain book belongs to with STRING_AGG <<< \n'
SELECT books.title,
    STRING_AGG(genres.genre_name, ', ') AS genres
FROM books
    JOIN book_genres ON books.book_id = book_genres.book_id
    JOIN genres ON book_genres.genre_id = genres.genre_id
GROUP BY books.title
LIMIT 10;

\echo '\n >>> Q2 - List all the books belonging to genre ROMANCE <<< \n' 
--FILTERING MANY TO MANY
SELECT books.title
FROM books
    JOIN book_genres ON books.book_id = book_genres.book_id
    JOIN genres ON book_genres.genre_id = genres.genre_id
WHERE genre_name = 'romance';

\echo '\n >>> Q3 - List total number of books in stock <<< \n'
SELECT COUNT(*) AS "Total book inventory"
FROM books;

\echo '\n >>> Q4 - total number of books we have by each author <<< \n'
SELECT authors.author_name AS "Author",
    COUNT(*) AS "Total books"
FROM books
    JOIN authors ON books.author_id = authors.author_id
GROUP BY authors.author_name;

\echo '\n >>> Q5 - List the average price for books of a specific genre <<< \n'

SELECT genres.genre_name, ROUND(AVG(books.price),2) AS "Average price", COUNT(*) AS "Number of books"
FROM books
    JOIN book_genres ON books.book_id = book_genres.book_id
    JOIN genres ON book_genres.genre_id = genres.genre_id
    GROUP BY genre_name;