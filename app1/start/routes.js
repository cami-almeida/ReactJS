'use strict'
    
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post("/users", "UserController.create")

Route.post("/sessions", "SessionController.create")

Route.get("/listar", "UserController.index")

Route.get("/pesquisar/:id", "UserController.show")

Route.delete("/deletar/:id", "UserController.delete")

Route.post("/alterar/:id", "UserController.update")