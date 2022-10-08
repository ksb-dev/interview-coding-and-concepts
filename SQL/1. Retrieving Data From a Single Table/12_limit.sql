/*SELECT *
FROM customers
LIMIT 3*/

/*SELECT *
FROM customers
LIMIT 6, 3*/ -- it gives you 3 records after skipping first 6 records

SELECT *
FROM customers
ORDER BY points DESC
LIMIT 3