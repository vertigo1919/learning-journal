\echo '>>>>>> ⬇️ Reducing price by 10% for books where stock is more than 10....'
UPDATE books
SET
price=price*0.9
WHERE quantity_in_stock > 10
RETURNING 
title, ROUND(price / 0.9,2) AS old_price, price AS new_price;
\echo '💪 >>>>>>> Success! Price reduced'

