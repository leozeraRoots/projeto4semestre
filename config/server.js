var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
var servidor = express();

servidor.set('view engine', 'ejs');
servidor.set('views', './app/views');

servidor.use(express.static('./app/public'));
servidor.use(bodyParser.urlencoded({extended:true}))

consign().include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
 .into(servidor);

module.exports = servidor;
