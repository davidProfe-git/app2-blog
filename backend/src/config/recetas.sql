create database Recetas;
use recetas; 

CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY auto_increment,
    nombre           VARCHAR(100) NOT NULL,
    email            VARCHAR(150) UNIQUE NOT NULL,
    password_hash    VARCHAR(255) NOT NULL,
    fecha_registro   date
);

CREATE TABLE recetas (
    id_receta        INT PRIMARY KEY auto_increment,
    id_usuario       INT NOT NULL,
    titulo           VARCHAR(200) NOT NULL,
    descripcion      TEXT,
    tiempo_preparacion INT,
    tiempo_coccion     INT,
    porciones        INT,
    fecha_publicacion DATE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE categorias (
    id_categoria     INT PRIMARY KEY auto_increment,
    nombre           VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE receta_categorias (
    id_receta        INT NOT NULL,
    id_categoria     INT NOT NULL,
    PRIMARY KEY (id_receta, id_categoria),
    FOREIGN KEY (id_receta) REFERENCES recetas(id_receta),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

INSERT INTO usuarios (nombre, email, password_hash)
VALUES
('Ana Martínez', 'ana@example.com', 'hash1'),
('Carlos López', 'carlos@example.com', 'hash2'),
('María Torres', 'maria@example.com', 'hash3');

INSERT INTO recetas (id_usuario, titulo, descripcion, tiempo_preparacion, tiempo_coccion, porciones)
VALUES
(1, 'Panqueques de Banana', 'Panqueques saludables y fáciles.', 10, 5, 2),
(2, 'Brownies de Chocolate', 'Brownies húmedos y deliciosos.', 15, 25, 8),
(1, 'Avena Nocturna', 'Desayuno frío, rápido y nutritivo.', 5, 0, 1);


INSERT INTO categorias (nombre)
VALUES
('Postres'),
('Vegano'),
('Rápido'),
('Saludable'),
('Desayuno');

INSERT INTO receta_categorias (id_receta, id_categoria)
VALUES
(1, 5),  -- Panqueques → Desayuno
(1, 4),  -- Panqueques → Saludable
(2, 1),  -- Brownies → Postres
(3, 5),  -- Avena Nocturna → Desayuno
(3, 4);  -- Avena Nocturna → Saludable

