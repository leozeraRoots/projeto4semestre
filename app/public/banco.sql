create database sg;

create table usuarios(
  id int auto_increment not null,
  email varchar(50) not null,
  senha varchar(255) not null,
  nome varchar (30) not null,
  sobreNome varchar(90) not null,
  nascimento varchar(10) not null,
  cpf varchar(14) not null,
  celular varchar(10) not null,
  endereco varchar(90) not null,
  numero varchar(255) not null,
  bairro varchar(10) not null,
  cidade varchar(40) not null,
  estado varchar(3),
  cep varchar(10),
  primary key(id)
);
