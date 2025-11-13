

CREATE DATABASE ink_studio;
USE ink_studio;


CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    fecha_registro DATE DEFAULT (CURRENT_DATE)
);

CREATE TABLE tatuadores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100),
    telefono VARCHAR(20)
);

CREATE TABLE citas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_tatuador INT NOT NULL,
    fecha_cita DATETIME NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2),
    estado VARCHAR(20) DEFAULT 'pendiente',
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    FOREIGN KEY (id_tatuador) REFERENCES tatuadores(id)
);

CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0
);

CREATE TABLE ventas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT DEFAULT 1,
    total DECIMAL(10, 2) NOT NULL,
    fecha_venta DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id)
);

INSERT INTO tatuadores (nombre, especialidad, telefono) VALUES
('Carlos Martínez', 'Realismo', '+57 300 111 2222'),
('Ana López', 'Traditional', '+57 300 222 3333'),
('Miguel Rodríguez', 'Minimalista', '+57 300 333 4444');


INSERT INTO clientes (nombre, email, telefono) VALUES
('Laura García', 'laura@email.com', '+57 300 444 5555'),
('Juan Pérez', 'juan@email.com', '+57 300 555 6666'),
('María Hernández', 'maria@email.com', '+57 300 666 7777');

INSERT INTO productos (nombre, precio, stock) VALUES
('Crema Cicatrizante', 35000.00, 50),
('Jabón Antibacterial', 25000.00, 30),
('Camiseta Ink Studio', 45000.00, 20);

INSERT INTO citas (id_cliente, id_tatuador, fecha_cita, descripcion, precio, estado) VALUES
(1, 1, '2024-12-01 10:00:00', 'Tatuaje de rosa en brazo', 350000.00, 'confirmada'),
(2, 2, '2024-12-05 15:00:00', 'Tatuaje minimalista', 200000.00, 'pendiente'),
(3, 3, '2024-12-10 11:00:00', 'Cover up espalda', 500000.00, 'confirmada');