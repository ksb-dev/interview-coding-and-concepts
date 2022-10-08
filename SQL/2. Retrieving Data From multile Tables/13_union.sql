/*SELECT
    order_id,
    order_date,
    'Active' As status
FROM orders
WHERE order_date >= '2019-01-01'
UNION
SELECT
    order_id,
    order_date,
    'Archived' As status
FROM orders
WHERE order_date <= '2019-01-01'*/

SELECT
    customer_id,
    first_name,
    points,
    'Gold' As type
FROM customers
WHERE points >= 3000
UNION
SELECT
    customer_id,
    first_name,
    points,
    'Silver' As type
FROM customers
WHERE points BETWEEN 2000 AND 3000
UNION
SELECT
    customer_id,
    first_name,
    points,
    'Bronze' As type
FROM customers
WHERE points < 2000
ORDER BY first_name   