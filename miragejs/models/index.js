/*
 * Mirage JS guide on Models: https://miragejs.com/docs/data-layer/models
 */

import { Model } from 'miragejs'

/*
 * Everytime you create a new resource you have
 * to create a new Model and add it here. It is
 * true for Factories and for Fixtures.
 *
 * Mirage JS guide on Relationships: https://miragejs.com/docs/main-concepts/relationships/
 */
export default {
  project: Model,
  job: Model,
  daoproposal: Model
}
