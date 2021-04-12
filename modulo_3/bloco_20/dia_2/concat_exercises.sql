SELECT * FROM sakila.actor;
SELECT CONCAT (first_name, last_name) FROM sakila.actor;
SELECT CONCAT (first_name, ' ', last_name) AS 'Nome completo' FROM sakila.actor;

SELECT *FROM sakila.film;
SELECT CONCAT (title, ' ', release_year) AS 'Lançamento do filme' FROM sakila.film;
SELECT CONCAT (title, ' ', rating) AS classificação FROM sakila.film;
