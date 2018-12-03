/* 
 *
 * router.js e o arquivo responsavel pelo roteamento do app
 *  
*/

//importamos os controllers
var loginController = require('../controllers/loginController');
var homeController = require('../controllers/homeController');

//exportamos a funcao das rotas
module.exports = function(app){

    //requisicao get para a pagina home, retorna a pagina home
    app.get('/', function(request, response){
        homeController.index(request, response);
    });

    //requisicao get para a pagina /login, retorna a pagina de login
    app.get('/login', function(request, response){
        loginController.index(request, response);
    });

    //requisicao post para a pagina /valida, ira direcionar para a validacao de login
    app.post('/valida', function(request,response){
        loginController.validar(request, response);
    });

}