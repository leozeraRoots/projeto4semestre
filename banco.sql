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
  compradorId varchar(255),
  compradorNome varchar(200),
  primary key(id)
);


insert into compras(camiseta,valor,quantidade,cor,codigo,tamanho,data,codCompra,compradorEmail,compradorId,compradorNome) values ('Masculino','59,90','1','preto','0T12','M','Mon Nov 27 2017 11:26:50 GMT-0200 (-02)','1511789210235','mivanebarros.sarinho@gmail.com','116691737978544304403','mivanebarros sarinho');

  : 'Masculino',
   : '59,90',
   : '1',
   : 'preto',
   : '0T12',
   : 'M',
   : 'Mon Nov 27 2017 11:26:50 GMT-0200 (-02)',
   : '1511789210235',
   : 'mivanebarros.sarinho@gmail.com',
   : '116691737978544304403',
   : 'mivanebarros sarinho'
