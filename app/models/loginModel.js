/*
 *
 * Model do login
 * 
*/

//importamos as informacoes do banco de dados
const database = require('../../config/database');

//exportamos a funcao do model
module.exports = function(){

    //funcao de validacao do usuario
    this.valida = function(usuario, retorno){
        //abrimos a conexao com o banco na variavel con
        var con = database();

        return con.query('SELECT * FROM usuarios WHERE usuario = ?', usuario, retorno);

    };

    return this;
};