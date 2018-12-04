/*
 *
 * Controller do login
 * 
*/

//importamos a model
var loginModel = require('../models/loginModel')();
var homeController = require('../controllers/homeController');

//exportamos a funcao responsavel por essa requisicao
module.exports.index = function(request, response){
    //apenas retorna a tela de login
    response.render('login/login',{erros:{},dados:{}});

};

module.exports.validar = function(request, response){

    /**
     * salvo as informacoes da requisicao na var dados, pois se
     * ouver algum erro, eu preencho novamente elas no formulario
     */

    var dados = request.body;

    //console.log(dados.usuario);

    loginModel.valida(dados.usuario, function(erro, resultado){        
        /**
         * aqui dentro eu valido as informacoes vindas da tela 
         */
        
        request.assert('usuario', 'Preencha o usuário').notEmpty;
        request.assert('usuario', 'Usuario deve ter entre 5 e 20 caracteres').len(5,20);
        request.assert('senha', 'Preencha a senha').notEmpty;        
        request.assert('senha', 'Senha deve ter entre 8 e 20 caracteres').len(8,20);
        
        //se exisitr algum erro, armazeno em validaErros        
        var validaErros = request.validationErrors();
        
        //console.log(validaErros);

        if(validaErros){
            /**
             * se possuir erros de validacao, volta para a tela de login, 
             * apresenta os erros e preenche novamente o form
             */
            response.render('login/login',{erros:validaErros,dados:dados});
            return;
        } else {  
            for (i in resultado){
                var senha = resultado[i].senha;
            }        
            
            if (dados.senha == senha){

                //se usuario e senha estiverem ok, cria a sessao e direciona para a home
                request.session.user = resultado;
                //request.session.isLogged = true;
                response.redirect('/');

            } else {               
                response.render('login/login',{erros:validaErros,dados:dados});
                return;
            }   

        }

    });

};