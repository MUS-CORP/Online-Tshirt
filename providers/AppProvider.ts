import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import PostBajuRepository from 'App/Repositories/PostBajuRepository';
import PostBajuService from 'App/Services/PostBajuService'
export default class AppProvider {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
   // Binding PostBajuRepository to IPostBajuRepository
  //  this.app.container.singleton('App/Interfaces/PostBajuRepositoryInterface', () => {
  //   return new PostBajuRepository();
  // });

  // // Binding PostBajuService
  // this.app.container.singleton('App/Services/PostBajuService', () => {
  //   const repo = this.app.container.use('App/Interfaces/PostBajuRepositoryInterface');
  //   return new PostBajuService(repo);
  // });
  //  this.setupOrderBindings()
  }

  public async boot () {
    // IoC container is ready
  }

  public async ready () {
    // App is ready
    await this.setupOrderBindings()
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
  private async setupOrderBindings() {
    const { default: PostBajuRepository } = await import(
      'App/Repositories/PostBajuRepository'
    )
    const { default: PostBajuService } = await import('App/Services/PostBajuService')

    const { default: PostBajuController } = await import(
      'App/Controllers/Http/PostBajuController'
    )

    this.app.container.singleton(
      'App/Interfaces/OrderRepositoryInterface',
      () => new PostBajuRepository(),
    )

    this.app.container.bind('App/Controllers/Http/Services/PostBajuService', () => {
      const repo = this.app.container.use(
        'App/Interfaces/PostBajuRepositoryInterface',
      )
      return new PostBajuService(repo)
    })

    this.app.container.singleton('App/Controllers/Http/PostBajuController', () => {
      const repo = this.app.container.use('App/Interfaces/OrderRepositoryInterface',)
      return new PostBajuController(repo)
    })
  }
}
