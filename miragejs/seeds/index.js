/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

const projectsSeeder = server => {
    server.createList('project', 15),
    server.createList('job', 12),
    server.createList('daoproposal', 5)
  };
  
  export default function seeds(server) {
    //server.loadFixtures();
    projectsSeeder(server);
  }