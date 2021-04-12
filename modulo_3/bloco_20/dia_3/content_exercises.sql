SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer
WHERE store_id = 2 AND
first_name <> 'KENNETH' AND 
active = FALSE;

SELECT COUNT(*) AS quantidade FROM sakila.customer WHERE store_id = 1 AND active = TRUE;

SELECT * FROM sakila.customer WHERE active = 0;

SELECT * FROM sakila.film WHERE title LIKE '%ACE%';

SELECT * FROM sakila.film WHERE description LIKE '%china';

SELECT * FROM sakila.film WHERE description LIKE '%girl%' AND title LIKE '%lord' LIMIT 2;

SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%documentary%';

SELECT * FROM sakila.film WHERE film_id BETWEEN 10 AND 50;

SELECT * FROM sakila.film WHERE film_id IN (1, 2, 3, 4, 5, 6, 7 ,8);

-- Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy , ordenados por nome em ordem alfabética.
SELECT * FROM sakila.customer;
SELECT first_name, last_name, email FROM sakila.customer WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy');

SELECT * FROM sakila.payment;

SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';

SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';

SELECT 
    *
FROM
    sakila.payment
WHERE
    payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
    
    
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo
