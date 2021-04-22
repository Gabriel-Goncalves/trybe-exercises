use zoo;

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(60) NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(60) NOT NULL
) ENGINE=InnoDB;

-- -------------------------------------------

use zoo;

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(60) NOT NULL,
    idade INT NOT NULL
) ENGINE=InnoDB;

-- ------------------------------------------

use zoo;

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL,
    gerente_id INT NOT NULL,
    idade INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
)ENGINE=InnoDB;