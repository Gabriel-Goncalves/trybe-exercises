SELECT * FROM sakila.staff; 

INSERT INTO sakila.staff 
  (staff_id, first_name, last_name, address_id, email, store_id, active, username, password, last_update)
  VALUES (3, 'Gabriel', 'Medeiros', 5, 'gabriel@trybe', 1, 1, 'Gabriel', 'mypassword123', now());


SELECT * FROM sakila.actor;
INSERT INTO sakila.actor (first_name, last_name, last_update) VALUES ('Gabriel', 'Medeiros', now());

INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');

INSERT INTO sakila.actor (first_name, last_name) SELECT first_name, last_name FROM sakila.staff;

SELECT * FROM sakila.staff;
SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.staff
SET first_name = 'Gabriel'
WHERE first_name = 'Lucas';

SELECT * FROM sakila.actor;

UPDATE sakila.actor 
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * from sakila.category;

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';
