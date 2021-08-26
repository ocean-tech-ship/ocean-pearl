/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs';

export default {
  job: Factory.extend({
    id(i) {
      return `Job${i}`;
    },
    title(i) {
      return `Job ${i + 1}`;
    },
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
    position: 'Data Analyst',
    website: 'https://oceanprotocol.com/',
    logo: require('@/assets/images/poseidon-network.png'),
    pictures: ['@/assets/images/poseidon-cover.png'],
    salary: '50000€ - 60000€',
  }),
};
