// src/server.js
import { createServer, Model, Factory } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      project: Model,
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return `Name ${i + 1}`
        },
      }),
      project: Factory.extend({
        title(i) {
          return `Project ${i}` // Movie 1, Movie 2, etc.
        },
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
        website: 'https://oceanprotocol.com/',
        logo: require('@/assets/images/project-logos/poseidon-network.png'),
        category: 'Category1'
      }),
    },

    seeds(server) {
      server.createList('user', 20)
      server.createList('project', 15)
    },

    routes() {
      this.namespace = 'api'

      this.get('/users', (schema) => {
        return schema.users.all()
      }),
      this.get('/projects', (schema) => {
        return schema.projects.all()
      })
    },
  })

  return server
}
