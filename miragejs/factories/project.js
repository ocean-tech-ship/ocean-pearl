/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs'

export default {
  project: Factory.extend({
    _id(i) {
      return i + 1
    },
    title(i) {
      return `Project ${i + 1}` 
    },
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
    website: 'https://oceanprotocol.com/',
    logo: require('@/assets/images/poseidon-network.png'),
    pictures: [require('@/assets/images/detail/poseidon-cover.png')], 
    category: 'Category1',
    createdAt: '2021-05-20T22:03:19.072Z'
  }),
}
