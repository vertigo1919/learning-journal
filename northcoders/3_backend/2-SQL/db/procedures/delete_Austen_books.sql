/* ------------------------------------------------------------------------------------
  PURPOSE: REFERENTIAL INTEGRITY & CASCADE
  
  This DELETE operation targets the 'books' table. 
  Normally, this would fail because these books are referenced in the 'books_genres' 
  junction table.
  
  However, it succeeds here because we defined the junction table with:
  REFERENCES books(book_id) ON DELETE CASCADE
  
  Postgres automatically removes the linked rows in 'books_genres' 
  before deleting the book.
  ------------------------------------------------------------------------------------
*/

\echo '>>>>>> 🗑 Deleting books by Jane Austen...let''s capture the details of the books we want to delete:\n'

-- QUERY 1
-- Let's create a CTAS to store the IDs of the books that will be deleted
CREATE TEMP TABLE to_delete AS 

-- Let's use a CTE for readbility to store the ID of author Jane Austen
WITH jane_austen_IDs AS (
    SELECT author_id FROM authors WHERE author_name  = 'Jane Austen'
)

 SELECT book_id, title
        FROM books 
        WHERE author_id IN (SELECT author_id from jane_austen_IDs);

-- QUERY 2
-- Let's print the CTAS content 
SELECT * FROM to_delete;

-- QUERY 3
--Actual deletion
\echo '>>>>>> 🗑 Deleting books by Jane Austen... Here is what was removed:\n'
DELETE FROM books
WHERE book_id IN (
        SELECT book_id FROM to_delete 
    )
RETURNING *;

\echo '💪 >>>>>>> Deletion successful!\n'

-- QUERY 4
-- Verificaiton that junction table has no orphans
\echo 'Now let''s check that this deletion has left no orphans in the junction table, output should be empty!'
SELECT*
FROM book_genres
WHERE book_id IN(SELECT book_id FROM to_delete);

-- QUERY 5
-- Verificaiton that that no other orphan exist in the junction table

\echo 'Now let''s check there''s no other orphan in the junction table, output should be empty'

SELECT * FROM book_genres
LEFT JOIN books ON book_genres.book_id = books.book_id
WHERE books.book_id IS NULL;