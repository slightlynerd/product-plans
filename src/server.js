import { Server, Response } from 'miragejs'
import plans from './data/plans'

export function makeServer({ environment = 'development' } = {}) {

  let server = new Server({
    environment,

    routes() {

      this.namespace = 'api'

      this.get('/plans', schema => {
        return new Response(200, {}, plans)
      })

      this.post('/plans', (schema, request) => {
        const headers = {}
        const plan = JSON.parse(request.requestBody)
        return new Response(
          200,
          headers,
          { message: `Successfully subscribed to ${plan.name} plan`}
        )
      }, { timing: 2000 })
    },
  })

  return server
}
