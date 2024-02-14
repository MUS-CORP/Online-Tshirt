// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from "App/Models/User";
export default class AuthController {
    public async postRegister({request,response ,auth}) {
    try {
      console.log(request.body())
        const {username, email, password} = request.body()

        const user = await User.create({
          username,
          email,
          password
        })        
        return response.redirect().toRoute('/')
      } catch (error) {          
          console.log(error)
      }
      
      
      }
      public async PostLogin({ auth, response ,request}) {
        
        const { email, password} = request.body()
      
        try {
          await auth.use('web').attempt(email, password)
          return response.redirect().toRoute('/')
        } catch {
          return response.badRequest('Invalid credentials')
        }
     
      }

      public async cekLogin({ auth, response }) {
        // Memeriksa apakah pengguna sudah login
        if (await auth.check()) {
          // Pengguna sudah login
          return response.send('Pengguna sudah login');
        } else {
          // Pengguna belum login
          return response.send('Pengguna belum login');
        }
      }
}
