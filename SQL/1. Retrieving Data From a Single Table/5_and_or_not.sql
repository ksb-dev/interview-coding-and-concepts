/* SELECT *
FROM customers
WHERE birth_date > '1990-01-01' AND points > 1000 */

/*SELECT *
FROM customers
WHERE birth_date > '1990-01-01' OR points > 1000*/

/*SELECT *
FROM customers
WHERE birth_date > '1990-01-01' OR 
      (points > 1000 AND state = 'VA')
-- AND has higher precedence   */

/*SELECT *
FROM customers
WHERE NOT (birth_date > '1990-01-01' OR points > 1000) */  

SELECT *
FROM order_items
WHERE (order_id = 6 AND (quantity * unit_price) > 30)