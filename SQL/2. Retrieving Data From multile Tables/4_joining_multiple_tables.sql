/*USE sql_store;

SELECT 
     o.order_id,
     o.order_date,
     c.first_name,
     c.last_name,
     os.name AS status
FROM orders o
JOIN customers c
     ON o.customer_id = c.customer_id
JOIN order_statuses os
     ON  o.status = os.order_status_id*/
     
USE sql_invoicing;  

SELECT
	c.client_id,
    c.name AS client_name,
    p.invoice_id,
    p.date AS payment_date,
    p.amount,
    pm.name AS method
FROM clients c
JOIN payments p
     ON c.client_id = p.client_id 
JOIN payment_methods pm
     ON p.payment_method = pm.payment_method_id    