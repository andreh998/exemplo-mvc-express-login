/*
 *
 * Controller da home
 * 
*/

//importamos a model
var homeModel = require('../models/homeModel');

//exportamos a funcao responsavel por essa requisicao
module.exports.index = function(request, response){
    //apenas retorna a home com a sessao do usuario
    response.render('home/home', {sessao:request.session.user});

};