CREATE DATABASE sistema_reservacion_hotel CHARACTER SET utf8;

CREATE TABLE detalle_estado (
    id                  INT NOT NULL AUTO_INCREMENT,
    nombre              VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO detalle_estado (nombre) VALUES
    ("Pendiente"),
    ("Pagado"),
    ("Eliminado");

CREATE TABLE detalle_metodo_pago (
    id                  INT NOT NULL AUTO_INCREMENT,
    nombre              VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO detalle_metodo_pago (nombre) VALUES
    ("Efectivo"),
    ("Tarjeta de débito"),
    ("Tarjeta de crédito"),
    ("Transferencia bancaria");

CREATE TABLE clientes (
    id                  INT NOT NULL AUTO_INCREMENT,
    nombre              VARCHAR(255) NOT NULL,
    apellido            VARCHAR(255) NOT NULL,
    fecha_nacimiento    DATE NOT NULL,
    numero_documento    BIGINT(8) NOT NULL,
    telefono            BIGINT(20) NOT NULL,
    correo_electronico  VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE reservas (
    id                  INT NOT NULL AUTO_INCREMENT,
    numero_habitacion   INT NOT NULL,
    fecha_creacion      DATE DEFAULT (CURRENT_DATE),
    fecha_entrada       DATE NOT NULL,
    fecha_salida        DATE NOT NULL,
    fecha_pago          DATE DEFAULT NULL,
    monto_pago          INT NOT NULL,
    fk_cliente          INT NOT NULL,
    fk_estado           INT NOT NULL,
    fk_metodo_pago      INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_cliente) REFERENCES clientes(id),
    FOREIGN KEY(fk_estado) REFERENCES detalle_estado(id),
    FOREIGN KEY(fk_metodo_pago) REFERENCES detalle_metodo_pago(id)
);

