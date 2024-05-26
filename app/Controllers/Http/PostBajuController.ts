
import Database from '@ioc:Adonis/Lucid/Database'
import Application from '@ioc:Adonis/Core/Application';
import PostBajuService from 'App/Services/PostBajuService';
import Product from 'App/Models/Product';
import { inject } from '@adonisjs/core/build/standalone';
import PostBajuRepositoryInterface from 'App/Interfaces/PostBajuRepositoryInterface';

@inject()
export default class PostBajuController {  
  constructor(private PostBajuRepositoryInterface: PostBajuRepositoryInterface ) {}    


  public async GetDataBaju({response} ) {
    const Product = await this.PostBajuRepositoryInterface.getAllProducts()
    console.log(Product)
    return response.json(Product)
  }
    
  public async store({request, session, response}) {   
    const foto = request.file('foto');
    await foto.move(Application.makePath('public/assets/uploads'), {
      name: foto.clientName, 
      overwrite: true
    });
   
    await Database
      .insertQuery() 
      .table('products')
      .insert({ name: request.input('name'), harga: request.input('harga'), deskripsi: request.input('deskripsi'), foto: foto.clientName })
      session.flash({ notification: 'Data Berhasil Disimpan!' })
      return response.redirect('/Product');
  }
  public async GetDetailBaju({ inertia, params}) {
    const dataDetailProduct = await Product.findOrFail(params.id);
    return inertia.render('Admin/Product/ubahProduct', { dataDetailProduct });  
  }
  public async updateBaju({response,inertia, params, request, session}) {    
    const id    = params.id
    const ProductData  = await Product.findOrFail(id)
    ProductData.name    = request.input('name')
    ProductData.harga  = request.input('harga')
    ProductData.deskripsi  = request.input('deskripsi')
    if(request.file('foto') != null) {
      const foto = request.file('foto')
      await foto.move(Application.publicPath('assets/uploads'), {
        name: foto.clientName, 
        overwrite: true
      });      
      if (foto.fileName) {        
        const fs = require('fs')
        fs.unlinkSync(Application.publicPath('assets/uploads', ProductData.foto))
        ProductData.foto = foto.fileName;
      } else {          
          return response.redirect('back');
      }
    }
    await ProductData.save()        

    
    return response.json('anjay');
  }
  public async deleteBaju({response, params}) {
    const dataProduct = await Product.findOrFail(params.id)
    const fs = require('fs')
    fs.unlinkSync(Application.publicPath('assets/uploads', dataProduct.foto))
    await dataProduct.delete()
    return response.redirect('/Product');
  }
}

module.exports = PostBajuController;