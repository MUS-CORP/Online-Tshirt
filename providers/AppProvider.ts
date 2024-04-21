import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import PostBajuService from 'App/Services/PostBajuService'
export default class AppProvider {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
    // this.app.container.singleton('app/Services/PostBajuService', () => new PostBajuService())
    // this.app.container.singleton('App/Controllers/Http/Controllers/PostBajuController', () => {
    //   const service = this.app.container.use('App/Controllers/Http/Services/PostBajuService')
    //   return new PostBajuController(service)
    // })
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

    this.app.container.singleton('App/Controllers/Http/Services/OrderService', () => {
      const repo = this.app.container.use(
        'App/Interfaces/PostBajuRepositoryInterface',
      )
      return new PostBajuService(repo)
    })

    this.app.container.singleton('App/Controllers/Http/PostBajuController', () => {
      const service = this.app.container.use('App/Services/PostBajuService')
      return new PostBajuController(service)
    })
  }
}
