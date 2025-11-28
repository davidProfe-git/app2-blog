-- Crear la base de datos
CREATE DATABASE blog_recetas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE blog_recetas;

-- Crear la tabla de recetas
CREATE TABLE recetas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    ingredientes TEXT NOT NULL,
    instrucciones TEXT NOT NULL,
    tiempo_preparacion INT NOT NULL,
    imagen_url VARCHAR(500),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO recetas (titulo, descripcion, imagen_url, categoria)
VALUES 
('Brownies Caseros',
 'Deliciosos, húmedos y llenos de chocolate. Un postre fácil y perfecto para cualquier momento.',
 'assets/images.jpg',
 'Postres'),

('Tiramisú Clásico',
 'Un postre italiano cremoso con capas de bizcocho, café y crema de mascarpone. Suave y elegante.',
 'assets/imagen.jpg',
 'Postres'),

('Tres Leches',
 'Un postre clásico y cremoso, con un bizcocho suave empapado en una mezcla de tres leches. Dulce y esponjoso.',
 'assets/images.webp',
 'Postres'),

('Carlota de Limón',
 'Refrescante, cremosa y equilibrada entre lo dulce y lo ácido. Con capas de galleta y mezcla sedosa de limón.',
 'assets/images (1).jpg',
 'Postres'),

('Flan Napolitano',
 'Suave, cremoso y con una textura sedosa. Su caramelo dulce lo convierte en un clásico irresistible.',
 'assets/flan-napolitano.jpg',
 'Postres'),

('Galletas de Chocolate',
 'Crujientes por fuera y suaves por dentro con trozos de chocolate que se derriten al morder.',
 'assets/descarga.jpg',
 'Postres');
