-- The CROSS JOIN keyword returns all records from both tables

/*SELECT 
    c.first_name AS customer,
    p.name AS product
FROM customers c
CROSS JOIN products p
ORDER BY C.first_name*/

/*SELECT 
    c.first_name AS customer,
    p.name AS product
FROM customers c, products p
ORDER BY C.first_name*/

-- Above both are same but 1st one recommended

/*SELECT *
FROM shippers s, products p*/

/*SELECT *
FROM shippers s
CROSS JOIN products p*/