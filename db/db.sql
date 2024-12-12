CREATE DATABASE IF NOT EXISTS authentification;
USE authentification;

CREATE TABLE IF NOT EXISTS users
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(40) NOT NULL,
    mdp VARCHAR(30) NOT NULL,
    nom VARCHAR(20),
    prenom VARCHAR(30) NOT NULL,
    numero_telephone VARCHAR(15) NOT NULL CHECK (
        numero_telephone REGEXP '^\\+33[0-9]{9}$|^0[0-9]{9}$'
    ),
    date_naissance DATE
);

INSERT INTO users (email, mdp, nom, prenom, numero_telephone, date_naissance)
VALUES
    ('fanie.boulanger@wanadoo.com', 'arbustier123', 'Boulanger', 'Fanie', '+33623456789', '1980-01-01'), 
    ('vanilla.mikado@outlook.com', 'ravioliensauce456', 'Mikado', 'Vanilla', '+33687654321', '1990-02-02'), 
    ('pierre.fromage@amazon.com', 'latectonicestchanme789', 'Fromage', 'Pierre', '+33712233445', '2000-03-03');

