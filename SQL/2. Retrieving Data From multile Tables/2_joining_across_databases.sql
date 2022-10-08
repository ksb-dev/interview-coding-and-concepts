/*SELECT *
FROM order_items o
JOIN sql_inventory.products p
     ON o.product_id = p.product_id*/
     
-- if we use sql_inventory

USE sql_inventory;

SELECT *
FROM sql_store.order_items o
JOIN products p
     ON o.product_id = p.product_id     