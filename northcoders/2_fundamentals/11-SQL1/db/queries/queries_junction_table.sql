-- Purpose: query book genres (many to many)

\echo '\n >>> Q1A - List all genres that a certain book belongs to <<< \n'
--JOINING MORE THAN 2 TABLES
SELECT books.title, genres.genre_name
FROM books
JOIN book_genres ON books.book_id = book_genres.book_id
JOIN genres ON book_genres.genre_id = genres.genre_id
LIMIT 10;

\echo '\n >>> Q1B - List all genres that a certain book belongs to with STRING_AGG <<< \n'
--STRING_AGG
SELECT books.title, STRING_AGG(genres.genre_name, ', ') AS genres
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


