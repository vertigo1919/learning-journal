UPDATE books
SET price=price+2.50
WHERE EXTRACT(MONTH  FROM release_date)=12
RETURNING 
title as "Title", price-2.50 AS "Old price", price AS "Increased price";
\echo '💪 >>>>>>> Success! Price incrased for Chrismas run'