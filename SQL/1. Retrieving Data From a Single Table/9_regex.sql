-- USE sql_store;

/*SELECT *
FROM customers
WHERE last_name REGEXP 'field'*/

/*SELECT *
FROM customers
WHERE last_name REGEXP 'field$'*/ -- gives last_name ends with field

/*SELECT *
FROM customers
WHERE last_name REGEXP 'field|mac|rose'*/ -- gives last_name that contains field or mac or rose

/*SELECT *
FROM customers
WHERE last_name REGEXP '^field|mac|rose'*/ -- gives last_name starts with field or contains mac or rose

/*SELECT *
FROM customers
WHERE last_name REGEXP 'field$|mac|rose'*/ -- gives last_name ends with field or contains mac or rose

/*SELECT *
FROM customers
WHERE last_name REGEXP '[gim]e'*/ -- gives last_name contains ge or ie or me

/*SELECT *
FROM customers
WHERE last_name REGEXP 'e[l,i]'*/ -- gives last_name contains el or ei

/*SELECT *
FROM customers
WHERE last_name REGEXP '[a-h]e'*/ -- gives last_name containg ae, be, ..., he

/*SELECT *
FROM customers
WHERE first_name REGEXP 'elka|ambur'*/

/*SELECT *
FROM customers
WHERE last_name REGEXP 'ey$|on$'*/

/*SELECT *
FROM customers
WHERE last_name REGEXP '^my|se'*/

SELECT *
FROM customers
WHERE first_name REGEXP 'b[r,u]'