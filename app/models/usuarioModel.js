/**
 * 
 * Model do usuario
 * 
 */

 //importamos a conexao com o banco de dados
 const database = require('../../config/database');

 module.exports = function(){
    
    //salva no banco
    this.salvar  = function(dados, retorno){
        //conecta com o banco
        var con = database();

        //insere os dados no banco
        //retorna a funcao retorno, com os erros e o resultado da query
        return con.query('INSERT INTO usuarios SET ?', dados, retorno);

    };

    return this;

 };