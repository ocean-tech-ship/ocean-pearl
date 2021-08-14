import { createServer } from 'miragejs'
// import fixtures from './fixtures'
import factories from './factories'
import routes from './routes'
import models from './models'
import seeds from './seeds'

const config = (environment) => {
  const config = {
    environment,
    factories,
    models,
    routes,
    seeds,
  }

  // if (Object.keys(fixtures).length) {
  //   config.fixtures = fixtures
  // }

  return config
}

export function makeServer({ environment = 'development' } = {}) {
  return new createServer(config(environment))
}
