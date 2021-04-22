/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs'

export default {
  project: Factory.extend({
    title(i) {
      return `Project ${i + 1}` // Project 1, Project 2, etc.
    },
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
    website: 'https://oceanprotocol.com/',
    logo: require('@/assets/images/poseidon-network.png'),
    pictures: ['@/assets/images/poseidon-cover.png'],
    category: 'Category1',
    createdAt: '1 month ago'
  }),
}
