/* ------------------------------------------------------------------------------------
  PURPOSE: REFERENTIAL INTEGRITY & CASCADE
  
  This DELETE operation targets the 'author' table. 
  Normally, this would fail because these books are referenced in the 'books_genres' and in the 'books' tables.
  
  However, it succeeds here because we defined both the junction table FKs with ON DELETE CASCADE
  
  Postgres automatically removes the linked rows in 'books_genres' and 'books'
  before deleting the auhtor.
  ------------------------------------------------------------------------------------
*/

\echo '>>>>>> 🗑 Deleting author Jane Austen...let''s capture the books that will be deleted because of CASCADE:\n'

-- QUERY 1
-- Let's create a CTAS to store the IDs of the books that will be deleted
CREATE TEMP TABLE to_delete AS 

-- Let's use a CTE for readbility to store the ID of author Jane Austen
WITH jane_austen_IDs AS (
    SELECT author_id FROM authors WHERE author_name  = 'Jane Austen'
)

 SELECT book_id, title, author_id
        FROM books 
        WHERE author_id IN (SELECT author_id from jane_austen_IDs);

-- QUERY 2
-- Let's print the CTAS content 
SELECT * FROM to_delete;

-- QUERY 3
--Actual deletion
\echo '>>>>>> 🗑 Deleting auhtor, here''s the details of the removed author:\n'
DELETE FROM authors
WHERE author_id IN (
        SELECT author_id FROM to_delete 
    )
RETURNING *;

\echo '🏁 >>>>>>> Deletion command finished. Check output above for confirmation.\n'

-- QUERY 4
-- Verification that junction table has no orphans
\echo 'Now let''s check that this deletion has left no orphans in the junction table, output should be empty!'
SELECT*
FROM book_genres
WHERE book_id IN(SELECT book_id FROM to_delete);

-- QUERY 5
-- Verificaiton that no orpha book exists in the book table

\echo 'Now let''s check there''s no orphan in the book table, output should be empty'
SELECT*
FROM books
WHERE book_id IN(SELECT book_id FROM to_delete);

