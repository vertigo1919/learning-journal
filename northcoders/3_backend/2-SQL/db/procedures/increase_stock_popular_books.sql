UPDATE books
SET quantity_in_stock=quantity_in_stock+20
WHERE quantity_in_stock<15
RETURNING 
title as "Title", quantity_in_stock-20 AS "Old stock", quantity_in_stock AS "Current stock";
\echo '💪 >>>>>>> Success! Stock updated'