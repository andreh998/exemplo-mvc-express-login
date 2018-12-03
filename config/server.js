/*
 * 
 * server.js e responsavel por iniciar toda a aplicacao
 * aqui todas as dependencias serao importadas
 * e o servidor e iniciado
 * 
*/

 //exportamos o server como uma funcao
 module.exports = function(){
    
    //importamos o express
    var express = require('express');

    //importamos o body-parser
    var bodyParser = require('body-parser');

    //importamos o express-validator
    var expressValidator = require('express-validator');

    //iniciamos o app
    var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(expressValidator());

    //setamos a view engine para o ejs
    app.set('view engine', 'ejs');
    //definimos a pasta das views
    app.set('views','./app/views');

    /*
     * importamos a configuracao das rotas e executamos a funcao passando o app
     */
    var rotas = require('../app/routes/router');
    rotas(app); 

    //inicia o servidor
    app.listen(8000, function(){

    });

 };