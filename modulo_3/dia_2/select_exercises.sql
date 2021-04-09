SELECT 'Gabriel';
SELECT 'Gabriel', 'Goncalves', 'Goiânia', 22;
SELECT 'Gabriel' AS name, 'Goncalves' AS lastname, 'Goiânia' AS city, 22 AS age;
SELECT 13 * 8 AS result; 
SELECT now() AS 'actual data';

SELECT * FROM sakila.city;
SELECT first_name, last_name FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT title, description, release_year FROM sakila.film;


SELECT * FROM sakila.actor;
SELECT CONCAT (first_name, last_name) FROM sakila.actor;
SELECT CONCAT (first_name, ' ', last_name) AS 'Nome completo' FROM sakila.actor;

SELECT *FROM sakila.film;
SELECT CONCAT (title, ' ', release_year) AS 'Lançamento do filme' FROM sakila.film;
SELECT CONCAT (title, ' ', rating) AS classificação FROM sakila.film;

