import faker from 'faker'
import { Factory } from 'miragejs'

export default {
    daoproposal: Factory.extend({
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
        logo: require('@/assets/images/poseidon-network.png'),
        startDate: faker.date.past().toLocaleDateString(),
        endDate: faker.date.past().toLocaleDateString(),
        votes: 40000,
        counterVotes: 3000,
        requestedGrantToken: 24000,
        grantedToken: 24000,
        status: 'funded',
        walletAddress: '0xe6E3459bA0d70699F54464cc4b5d273810E7EC7B',
        paymentWalletsAddresses: ['0xe6E3459bA0d70699F54464cc4b5d273810E7EC7B'],
        title(i) {
            return `Test Title ${i}`   
        },
        oceanProtocolPortUrl: `portUrl`,
        deliverables: [],
        fundamentalMetric: 'dataConsumeVolume',
        ipfsHash: 'randomHash123',
        snapshotBlock: '1234',
        category(i) {
            let categories = [
                'dao',
                'newEntrants',
                'buildAndIntegrate',
                'outreach',
            ]

            return categories[i % categories.length];
        },
        fundingRoundId(i) {
            return (i % 5) + 1;
        }
    }),
}
