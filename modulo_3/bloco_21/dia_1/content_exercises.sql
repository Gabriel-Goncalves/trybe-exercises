SELECT UCASE('gabriel');
SELECT LCASE('GABRIEL');
SELECT 
    REPLACE('Oi, eu sou uma string',
        'string',
        'cadeia de caracteres');
SELECT LEFT('Oi, eu sou uma string', 3);
SELECT RIGHT('Oi, eu sou uma string', 6);
SELECT LENGTH('GABRIEL');
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);
SELECT SUBSTRING('Oi, eu sou uma string', 5);

SELECT 
    *
FROM
    sakila.film;
SELECT 
    UCASE(description)
FROM
    sakila.film
LIMIT 5;
SELECT 
    LCASE(description)
FROM
    sakila.film
LIMIT 5;
SELECT 
    REPLACE(description, 'A Epic', 'A Good')
FROM
    sakila.film
LIMIT 1;
SELECT 
    LEFT(description, 6)
FROM
    sakila.film
LIMIT 5;
SELECT 
    RIGHT(description, 5)
FROM
    sakila.film
LIMIT 3;
SELECT 
    LENGTH(description), LENGTH(title)
FROM
    sakila.film
LIMIT 5;
SELECT 
    SUBSTRING(description, 3, 5)
FROM
    sakila.film
LIMIT 3;
SELECT 
    SUBSTRING(description, 3)
FROM
    sakila.film
LIMIT 3;

SELECT 
    title,
    rental_rate,
    CASE
        WHEN rental_rate = 0.99 THEN 'BARATO'
        WHEN rental_rate = 2.99 THEN 'MEDIO'
        WHEN rental_rate = 4.99 THEN 'CARO'
        ELSE 'NÃO CLASSIFICADO'
    END AS valor
FROM
    sakila.film;
    
SELECT 
    title,
    release_year,
    rating,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS classificacao
FROM
    sakila.film;

SELECT DATEDIFF('2020-01-31', '2020-01-01');

SELECT TIMEDIFF('08:20:56', '09:30:10');

SELECT DATEDIFF('2030-01-20', NOW());

SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

SELECT 
    first_name, COUNT(*) AS quantidade
FROM
    sakila.actor
GROUP BY first_name;



-- Média de duração de filmes agrupados por classificação indicativa
SELECT 
    rating, AVG(length)
FROM
    sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT 
    rating, MIN(replacement_cost)
FROM
    sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT 
    rating, MAX(replacement_cost)
FROM
    sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT 
    rating, SUM(replacement_cost)
FROM
    sakila.film
GROUP BY rating;

SELECT 
    IF(active = 0, 'INATIVO', 'ATIVO') AS situacao,
    COUNT(*) AS quantidade
FROM
    sakila.customer
GROUP BY active;


SELECT 
    store_id, active, COUNT(*)
FROM
    sakila.customer
GROUP BY store_id , active;
