/*
 * Mirage JS guide on Routes: https://miragejs.com/docs/route-handlers/functions
 */

export default function routes() {
  this.namespace = 'api'
  
  /*
   * A resource comprises all operations for a CRUD
   * operation. .get(), .post(), .put() and delete().
   * Mirage JS guide on Resource: https://miragejs.com/docs/route-handlers/shorthands#resource-helper
   */
  this.resource('projects', { only: ['index', 'show'], path: "/project" })
  this.resource('jobs', { only: ['index', 'show'], path: "/job"  })
  this.resource('daoproposals', { only: ['index', 'show'], path: "/dao-proposal"  })

  this.get("/project/featured", (schema) => {
    return schema.projects.all().slice(0,4)
  })

  this.get("/project/detail/:id", (schema, request) => {
    let id = request.params.id
    return schema.projects.find(id)
  })

  this.get("/dao-proposal/featured", (schema) => {
    return schema.daoproposals.all().slice(0,4)
  })

  this.get("/dao-proposal/detail/:id", (schema, request) => {
    let id = request.params.id
    return schema.daoproposals.find(id)
  })
}
