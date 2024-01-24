

import Database from '@ioc:Adonis/Lucid/Database'
import View from '@ioc:Adonis/Core/View'
export default class HomeController {
  public async index({ view }) {
    const posts = await Database
    .query()
    .from('posts')
    .select('*')

    return await View.render('welcome', {
      posts: posts
    })
  }
  
}
