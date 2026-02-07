-- Purpose: Consolidates duplicate rows for a single book title.
-- Notes: Stock is summed and retained on the earliest record before deleting duplicates.

-- Step 1: Move total stock onto the earliest book record
\echo '>>>>>> 🗑 Deleting duplicates for Pride and Prejudice and updating stock'
UPDATE extra_books
SET quantity_in_stock =(
        SELECT SUM(quantity_in_stock) FROM extra_books WHERE title = 'Pride and Prejudice'
    )
WHERE title = 'Pride and Prejudice'
    AND book_id =(
        SELECT MIN(book_id)
        from extra_books
        WHERE title = 'Pride and Prejudice')

        RETURNING 
title as "Title", quantity_in_stock AS "Total stock";

-- Step 2: Remove all remaining duplicate rows for this title
DELETE FROM extra_books
WHERE title ='Pride and Prejudice' AND book_id>(SELECT MIN(book_id) FROM extra_books WHERE title = 'Pride and Prejudice')

\echo '💪 >>>>>>> Success! Duplicates deleted and stock updated'

/* Next steps
Learn GROUP BY to see a list of all titles that have duplicates.

Learn CTEs and use a Join to update the stock for all those duplicates at once.

Learn Window Functions as they are way more efficent for massive data sets.*/