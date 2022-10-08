-- USE sql_store;

/*SELECT *
FROM orders
JOIN customers
     ON orders.customer_id = customers.customer_id*/
     
/*SELECT order_id, first_name, last_name
FROM orders
JOIN customers
     ON orders.customer_id = customers.customer_id*/
     
/*SELECT customer_id
FROM orders
JOIN customers
     ON orders.customer_id = customers.customer_id*/  --  Error Code: 1052. Column 'customer_id' in field list is ambiguous
     
/*SELECT orders.customer_id, order_id, first_name, last_name -- or customers.customer_id
FROM orders
JOIN customers
     ON orders.customer_id = customers.customer_id*/	


/*SELECT o.customer_id, order_id, first_name, last_name
FROM orders o
JOIN customers c
     ON o.customer_id = c.customer_id*/
     

SELECT order_id, o.product_id, name, quantity, o.unit_price
FROM order_items o
JOIN products p
     ON o.product_id = p.product_id