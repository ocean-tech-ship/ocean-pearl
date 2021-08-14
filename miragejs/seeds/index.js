/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

const projectsSeeder = async (server) => {
    await server.createList('round', 7);
    await server.createList('project', 15);
};

export default function seeds(server) {
    // server.loadFixtures();
    projectsSeeder(server);
}
