module.exports = function(){
  this.listaUsuarios = function(connection, callback){
    connection.query("select * from usuarios", callback);
  }


  this.getNoticia = function(conexao, callback){
    conexao.query('select * from noticias where id_noticia = 5',callback);
  }

  this.log = function(noticia, conexao, callback){
    conexao.query('select * from compras where compradorEmail ='+"\""+noticia+"\"",callback);
    console.log("select * from compras where compradorEmail ="+"\""+noticia+"\"");
  }

  this.salvarUsuario = function(noticia, conexao, callback){
    conexao.query('insert into usuarios set ?',noticia,callback);
  }

  this.salvarCompra = function(noticia, conexao, callback){
    conexao.query('insert into compras set ?',noticia,callback);
    console.log(noticia);
  }

  return this;
}
