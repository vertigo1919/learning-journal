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

DELETE FROM extra_books
WHERE title ='Pride and Prejudice' AND book_id>(SELECT MIN(book_id) FROM extra_books WHERE title = 'Pride and Prejudice')

\echo '💪 >>>>>>> Success! Duplicates deleted and stock updated'

/* Next steps
Learn GROUP BY to see a list of all titles that have duplicates.

Learn CTEs and use a Join to update the stock for all those duplicates at once.

Learn Window Functions as they are way more efficent for massive data sets.*/