
import Database from '@ioc:Adonis/Lucid/Database'
import Post from 'App/Models/Post';
import View from '@ioc:Adonis/Core/View'
export default class PostsController {
  public async index({view} ) {
    const posts = await Database
    .query()
    .from('posts')
    .select('*')

    return await View.render('welcome', {
      posts: posts
    })

  }
  
  public async create({view}) {
    return view.render('Post.create');
  }
  public async show({view, params}) {
    const dataPost = await Post.findOrFail(params.id)
    return view.render('Post.show',{dataPost: dataPost});
  }
  public async store({request, session, response}) {
    await Database
      .insertQuery() 
      .table('posts')
      .insert({ title: request.input('title'), content: request.input('content') })
      session.flash({ notification: 'Data Berhasil Disimpan!' })
      response.redirect().toRoute('home')
  }
  public async ubah({view, params}) {
    const dataPost = await Post.findOrFail(params.id)
    return view.render('Post.ubah',{dataPost: dataPost});
  }
  public async Update({view,params, request, session, response}) {
    const id    = params.id
  const post  = await Post.findOrFail(id)

    post.title    = request.input('title')
    post.content  = request.input('content')
    await post.save()
    session.flash({ notification: 'Data Berhasil Disimpan!' })    
    return view.render('Post.ubah',{dataPost: post});
  }
  public async destroy({view,response, params}) {
    const dataPost = await Post.findOrFail(params.id)
    await dataPost.delete()
    response.redirect().toRoute('home')
  }
}

module.exports = PostsController;