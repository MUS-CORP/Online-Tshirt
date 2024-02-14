/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ inertia }) => {
  return inertia.render('Home')
})
Route.get('/api/GetDataBaju', 'PostBajuController.GetDataBaju');
Route.post('/api/PostRegister', 'AuthController.postRegister');
Route.post('/api/PostLogin', 'AuthController.PostLogin');
Route.get('/api/cekLogin', 'AuthController.cekLogin');

Route.get('/welcome', async ({ view }) => {
  return view.render('welcome')
})
Route.group(() => {
  Route.post('/logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    response.redirect().toRoute('/')
  })
}).middleware('auth:web')

Route.get('/login', async ({ inertia }) => {
  return inertia.render('Auth/Login')
})
Route.get('/register', async ({ inertia }) => {
  return inertia.render('Auth/Registrasi')
})