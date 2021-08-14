import faker from 'faker'
import { Factory } from 'miragejs'

export default {
    project: Factory.extend({
        featured: false,
        title(i) {
            return `Project Title ${i + 1}`
        },
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
        teamName(i) {
            return `Teamname ${i + 1}`
        },
        website: 'https://oceanprotocol.com/',
        logo: require('@/assets/images/poseidon-network.png'),
        pictures: [require('@/assets/images/detail/poseidon-cover.png')],
        category(i) {
            const categories = [
                'dao',
                'newEntrants',
                'buildAndIntegrate',
                'outreach',
            ]

            return categories[i % categories.length];
        },
        createdAt: faker.date.past().toLocaleDateString(),
        updatedAt: faker.date.past().toLocaleDateString(),
        afterCreate(project, server) {
            project.update({
                daoProposals: server.createList('daoproposal', 5, { project }),
            })
        }
    }),
}
