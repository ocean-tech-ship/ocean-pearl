import faker from 'faker';
import { Factory } from 'miragejs';

export default {
    round: Factory.extend({
        grantCurrency(i) {
            if (i % 2 === 0) {
                return 'OCEAN';
            }

            return 'USD';
        },
        availableFunding: 400000,
        earmarked: 140000,
        maxGrant: 32000,
        round(i) {
            return i;
        },
        submissionEndDate: faker.date.past().toLocaleDateString(),
        votingEndDate: faker.date.past().toLocaleDateString(),
        votingStartDate: faker.date.past().toLocaleDateString(),
        createdAt: faker.date.past().toLocaleDateString(),
        updatedAt: faker.date.past().toLocaleDateString(),
    }),
};
