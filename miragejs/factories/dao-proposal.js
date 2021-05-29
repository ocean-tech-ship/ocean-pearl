/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs'

export default {
  daoproposal: Factory.extend({
    _id(i) {
      return i
    },
    project(i) {
      return `Project ${i + 1}` // Project 1, Project 2, etc.
    },
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
    logo: require('@/assets/images/poseidon-network.png'),
    startDate: '2021-05-20T22:03:19.072Z',
    endDate: '2021-05-28T22:03:19.072Z',
    category: 'Category1',
    fundRound: '2',
  }),
}
