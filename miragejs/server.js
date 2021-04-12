// src/server.js
import { createServer, Model, Factory } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      todo: Model
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return `Name ${i + 1}`;
        }
      }),
      todo: Factory.extend({
        text(i) {
          return `Text ${i + 1}`;
        }
      })
    },

    seeds(server) {
      server.createList('user', 20)
      server.createList('todo', 20)
    },

    routes() {
      this.namespace = "api"

      this.get("/users", (schema) => {
        return schema.users.all()
      })
      this.get('/todos', (schema) => {
        return schema.todos.all()
      })
    },
  })

  return server
}