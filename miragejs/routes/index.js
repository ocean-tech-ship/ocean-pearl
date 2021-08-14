/*
 * Mirage JS guide on Routes: https://miragejs.com/docs/route-handlers/functions
 */

export default function routes() {
  this.namespace = 'api';

  /*
   * A resource comprises all operations for a CRUD
   * operation. .get(), .post(), .put() and delete().
   * Mirage JS guide on Resource: https://miragejs.com/docs/route-handlers/shorthands#resource-helper
   */
  this.resource('projects', { only: ['index', 'show'] });
  this.resource('jobs', { only: ['index', 'show'] });
  this.resource('daoproposals', { only: ['index', 'show'] });
  this.resource('rounds', { only: ['index', 'show'] });

  this.get('/projects', (schema) => schema.projects.all());

  this.get('/projects/featured', (schema) => schema.projects.all().slice(0, 4));

  this.get('/projects/:id', (schema, request) => {
    const { id } = request.params;
    return schema.projects.find(id);
  });

  this.get('/dao-proposals', (schema) => schema.daoproposals.all());

  this.get('/dao-proposals/featured', (schema) =>
    schema.daoproposals.all().slice(0, 4),
  );

  this.get('/dao-proposals/:id', (schema, request) => {
    const { id } = request.params;
    return schema.daoproposals.find(id);
  });

  this.get('pages/index', (schema) => ({
    featuredProjects: schema.projects.all().slice(0, 4),
    latestProjects: schema.projects.all().slice(0, 4),
    daoFeaturedProjects: schema.projects.all().slice(0, 4),
    daoProposals: schema.daoproposals.all().slice(0, 4),
    metrics: {
      fundingRound: 120000,
      totalDaoProposals: 12,
      endDate: new Date(),
      startDate: new Date(),
      submissionEndDate: new Date(),
      totalRequestedFunding: 150000,
      totalVotes: 800000,
    },
  }));
}
