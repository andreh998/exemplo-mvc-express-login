/**
 * 
 * Controller do usuario
 * 
 */

 //importamos o model e executamos a funcao
 var usuarioModel = require('../models/usuarioModel')();

 //funcao que retorna a pagina de cadastro de usuarios
 module.exports.index = function(request, response){
    //retorna a pagina e a sessao ativa
    //erros e dados sao das validacoes, caso precise retornar algum erro ou dado para a pagina
    response.render('usuario/cadastroUsuario', {sessao:request.session.user, erros:{},dados:{}});
 };

 //funcao que ira validar e salvar o usuario no banco
 module.exports.validar = function(request, response){

    //salvar a request
    var dados = request.body;

    usuarioModel.salvar(dados, function(erro, resultado){
        
        //verificamos as informacoes dos inputs
        request.assert('usuario', 'Preecha o campo Usuário').notEmpty;
        request.assert('nome', 'Preecha o campo Nome').notEmpty;
        request.assert('senha', 'Preecha o campo Senha').notEmpty;
        request.assert('email', 'Preecha o campo E-mail').notEmpty;
        request.assert('usuario', 'Usuário deve ter entre 5 e 20 caracteres').len(5,20);
        request.assert('nome', 'O Nome deve ter entre 5 e 20 caracteres').len(5,60);
        request.assert('senha', 'A Senha deve ter entre 5 e 20 caracteres').len(5,20);
        request.assert('email', 'Preencha um e-mail válido').isEmail;

        //se existir erro, sera armazenado em validaErros
        var validaErros = request.validationErrors();

        //se validaErros for verdadeiro, significa que existem erros
        if(validaErros){
            //se possui erros:
            //retorno a sessao, os erros, e novamente os dados dos inputs para a tela de cadastro
            response.render('usuario/cadastroUsuario', {sessao:request.session.user, erros:validaErros, dados:dados});
        } else {
            //senao possuir erros
            //apenas retorna de volta para a tela de cadastro
            response.render('usuario/cadastroUsuario', {sessao:request.session.user});
        }

    });

 };