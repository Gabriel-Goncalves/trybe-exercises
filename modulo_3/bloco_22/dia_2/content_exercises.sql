use normalizandoFunc;

CREATE TABLE setor(
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(25) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE funcionario (
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(40) NOT NULL,
    data_cadastro DATETIME NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY(setor_id) REFERENCES setor(setor_id)
)ENGINE=InnoDB;

CREATE TABLE contato(
	email varchar(50) NOT NULL,
    contato varchar(20) NOT NULL,
    funcionario_id INT NOT NULL,
    FOREIGN KEY(funcionario_id) REFERENCES funcionario(funcionario_id)
)ENGINE=InnoDB;

-- ----------------------------------------------------------