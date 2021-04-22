/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs'

export default {
  daoproposal: Factory.extend({
    project(i) {
      return `Project ${i + 1}` // Project 1, Project 2, etc.
    },
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
    logo: require('@/assets/images/poseidon-network.png'),
    startDate: '12. Nov 2021 12PM',
    endDate: '12. Nov 2021 12PM',
    category: 'Category1',
    fundRound: '2',
  }),
}
