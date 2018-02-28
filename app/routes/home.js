module.exports = function(parametro){
  parametro.get('/', function(req, res){
    res.render('index');
  })


  var dadosDoUsuarioLogado = [];

  parametro.post('/google',function(req, res){
    var conexao = parametro.config.dbConnection();
    var model = parametro.app.models.geral;
    var noticia = req.body;
    console.log(noticia);

    model.salvarUsuario(noticia, conexao,function(error, result){
      res.render('acessoPer',{dados:noticia});
    })
  });

  // parametro.post('/logIn',function(req, res){
  //   var conexao = parametro.config.dbConnection();
  //   var model = parametro.app.models.geral;
  //   var noticia = req.body;
  //   //console.log(noticia.email);
  //   // console.log(noticia.senha);
  //
  //   var validaEmail = noticia.email;
  //   var validaSenha = noticia.senha;
  //
  //   model.listaUsuarios(conexao,function(error, result){
  //     // console.log(result[0].email);
  //     // console.log(result.length);
  //
  //     for(var i = 0 ; i < result.length; i++){
  //         // console.log(result[i].email);
  //         if(validaEmail == result[i].email ){
  //           console.log("email validado");
  //           if(validaSenha == result[i].senha ){
  //             console.log("senha validado");
  //
  //               person =  [{
  //                 email: result[i].email,
  //                 nome: result[i].nome,
  //                 id:result[i].id
  //               }] ;
  //
  //               dadosDoUsuarioLogado =[{
  //                 email:result[i].email,
  //                 nome:result[i].nome,
  //                 id:result[i].id
  //               }];
  //
  //             res.render('acessoPer',{dados:person});
  //           }else{
  //             //var msg = "Email esta certo porem a senha esta errada";
  //             //res.render('failLogin',{msg:msg});
  //           }
  //         }else{
  //           //var msg = "email errado";
  //           //res.render('failLogin',{msg:msg});
  //         }
  //     }
  //
  //   })
  // })

  parametro.get('/confirma', function(req, res){
    res.render('confirma');
  })

  parametro.post('/log',function(req, res){
    var conexao = parametro.config.dbConnection();
    var model = parametro.app.models.geral;
    var noticia = req.body;

    model.log(noticia.email, conexao,function(err, result){

      var compras = [];
      for(var i = 0; i < result.length; i++ ){
        compras[i] = [{
            camiseta: result[i].camiseta,
            valor:result[i].valor,
            quantidade:result[i].quantidade,
            cor:result[i].cor,
            codigo:result[i].codigo,
            tamanho:result[i].tamanho,
            data:result[i].data,
            codCompra:result[i].codCompra,
            compradorEmail:result[i].compradorEmail,
            compradorNome:result[i].compradorNome,
          }];
      }

      res.render('log',{dados:compras});
    })

  })

  parametro.get('/index', function(req, res){
    res.render('index');
  })

  // parametro.get('/erro', function(req, res){
  //   var msg = "Email errado";
  //   res.render('failLogin',{msg:msg});
  // })

  // parametro.post('/cadastroUsuario', function(req, res){
  //   var noticia = req.body;
  //   var conexao = parametro.config.dbConnection();
  //   var model = parametro.app.models.geral;
  //   console.log(noticia);
  //
  //   model.salvarUsuario(noticia, conexao,function(error, result){
  //     res.render('userCadastro');
  //   })
  // })

  parametro.post('/comprar', function(req,res){
    var conexao = parametro.config.dbConnection();
    var model = parametro.app.models.geral;
    var dados = req.body;
    console.log(dados);

    model.salvarCompra(dados,conexao,function(error,result){
      res.render('compraRetorno',{dados:dados});

    })
  });


}
