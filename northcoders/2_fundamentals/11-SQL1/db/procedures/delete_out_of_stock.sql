\echo '>>>>>> 🗑 Deleting out of stock books....'
DELETE FROM books
WHERE quantity_in_stock = 0
RETURNING *;
\echo '💪 >>>>>>> Success! Books deleted'