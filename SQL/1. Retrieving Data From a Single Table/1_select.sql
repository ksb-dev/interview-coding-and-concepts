SELECT 
  last_name, 
  first_name, 
  points, 
  points + 10 AS addition_ten
  -- or points + 10 AS 'addition ten'
FROM customers
