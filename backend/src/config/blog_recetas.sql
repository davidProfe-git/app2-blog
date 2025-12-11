create database Blog_Recetas;
use Blog_Recetas; 



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

INSERT INTO usuarios (nombre, email, password_hash, fecha_registro) VALUES
('Laura Gómez', 'laura@example.com', 'hash123', '2024-01-12'),
('Carlos Martínez', 'carlos@example.com', 'hash456', '2024-02-03'),
('Ana Torres', 'ana@example.com', 'hash789', '2024-03-21'),
('Jhoan Pérez', 'jhoan@example.com', 'hashABC', '2024-04-01'),
('María López', 'maria@example.com', 'hashDEF', '2024-04-02');


INSERT INTO recetas (id_usuario, titulo, descripcion, tiempo_preparacion) VALUES
(1, 'Tarta de Chocolate', 'Deliciosa tarta casera con cacao puro.', 30),
(2, 'Hamburguesa Casera', 'Hamburguesa jugosa con ingredientes frescos.', 20),
(3, 'Ensalada Detox', 'Ensalada fresca ideal para dietas.', 10),
(1, 'Pancakes Esponjosos', 'Pancakes perfectos para un desayuno completo.', 15),
(2, 'Lasaña Vegetariana', 'Lasaña sin carne, rica en vegetales.', 40),
(4, 'Sopa de Tomate', 'Sopa cremosa preparada con tomates frescos.', 15),
(5, 'Smoothie Verde', 'Bebida saludable a base de espinaca y manzana.', 5),
(3, 'Pizza Casera', 'Pizza hecha en casa con salsa artesanal.', 25),
(4, 'Arroz con Pollo', 'Plato tradicional con verduras y especias.', 20),
(5, 'Brownies de Nueces', 'Brownies húmedos con nueces tostadas.', 15);



INSERT INTO categorias (nombre) VALUES
('Postres'),
('Comida Rápida'),
('Saludable'),
('Vegetariana'),
('Desayuno'),
('Sopas'),
('Bebidas');


INSERT INTO receta_categorias (id_receta, id_categoria) VALUES
(1, 1),
(1, 4),

(2, 2),
(2, 3),

(3, 3),
(3, 4),

(4, 5),
(4, 1),

(5, 4),
(5, 3),

(6, 6),       -- Sopa → Sopas
(6, 3),

(7, 7),       -- Smoothie → Bebidas
(7, 3),

(8, 2),       -- Pizza → Comida rápida
(8, 4),

(9, 3),       -- Arroz con pollo → Saludable
(9, 2),

(10, 1),     -- Brownies → Postres
(10, 4);


