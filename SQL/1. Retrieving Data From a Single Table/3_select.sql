-- SELECT DISTINCT state
-- FROM customers

-- Here VA will appear twice if we don't use DISTINCT

SELECT
  name,
  unit_price,
  unit_price * 1.1 AS new_price
FROM products  