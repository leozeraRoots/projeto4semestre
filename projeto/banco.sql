create database sg;

create table usuarios(
  id int auto_increment not null,
  email varchar(150) not null,
  senha varchar(255) not null,
  nome varchar (60) not null,
  sobreNome varchar(90) not null,
  dataNascimento varchar(100) not null,
  cpf varchar(60) not null,
  celular varchar(100) not null,
  endereco varchar(90) not null,
  numero varchar(255) not null,
  bairro varchar(20) not null,
  cidade varchar(40) not null,
  estado varchar(30),
  cep varchar(20),
  primary key(id)
);

{ email: 'anderson.tec12@gmail.com',
  senha: 'deliver',
  nome: 'Anderson',
  sobreNome: 'Barros Silva',
  dataNascimento: '1992-12-26',
  cpf: '425.566.568-08',
  celular: '(11) 94045-7234',
  endereco: 'teste',
  numero: '331',
  bairro: 'diadema',
  cidade: 'diadema',
  estado: 'SP',
  cep: '09980-580'


create table compras(
  id int auto_increment not null,
  camiseta varchar(20),
  valor varchar(255),
  quantidade varchar(20),
  cor varchar (20),
  codigo varchar(20),
  tamanho varchar(4),
  data varchar(200),
  codCompra varchar(244),
  compradorEmail varchar(255),
  compradorId int(60),
  compradorNome varchar(200)
  primary key(id)
);
