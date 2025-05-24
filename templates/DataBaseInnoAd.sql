create database innoad;
use innoad;

create table roles (
id_rol tinyint unsigned primary key auto_increment,
nombre varchar (50) unique not null
);

create table usuarios (
id_usuario tinyint unsigned primary key auto_increment,
nombre varchar (50) not null,
correo varchar (100) unique not null,
contraseña varchar (255) not null,
id_rol tinyint unsigned not null,
foreign key (id_rol) references roles (id_rol)
);

create table campañas (
id_campaña int unsigned primary key auto_increment,
nombre varchar (100) not null,
id_usuario tinyint unsigned not null,
fecha_inicio date not null,
fecha_fin date not null,
foreign key (id_usuario) references usuarios (id_usuario)
);

create table anuncios (
id_anuncio int unsigned primary key auto_increment,
contenido text not null,
id_campaña int unsigned not null,
foreign key (id_campaña) references campañas (id_campaña)
);

create table reuniones (
id_reunion int unsigned primary key auto_increment,
fecha date not null,
motivo varchar (255) not null
);

create table tareas (
id_tarea int unsigned primary key auto_increment,
descripcion varchar (255) not null,
responsable tinyint unsigned not null,
estado enum ('Asignado', 'En Proceso', 'Finalizado') not null,
foreign key (responsable) references usuarios (id_usuario)
);

create index idx_usuario_correo on usuarios(correo);
create index idx_campaña_nombre on campañas(nombre);