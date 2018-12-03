//importamos o mysql
var mysql = require('mysql');

//criamos uma function com a conexao
var con = function(){
    return mysql.createConnection({
        host:'localhost',
        user:'andre',
        password:'',
        database:'teste'
    });
};

//exportamos a funcao de conexao
module.exports = con;