/*
 * Mirage JS guide on Models: https://miragejs.com/docs/data-layer/models
 */

import { belongsTo, hasMany, Model } from 'miragejs'

/*
 * Everytime you create a new resource you have
 * to create a new Model and add it here. It is
 * true for Factories and for Fixtures.
 *
 * Mirage JS guide on Relationships: https://miragejs.com/docs/main-concepts/relationships/
 */
export default {
    project: Model.extend({
        daoProposals: hasMany('daoproposal'),
        jobs: hasMany('job'),
    }),
    job: Model.extend({
        project: belongsTo('project')
    }),
    daoproposal: Model.extend({
        project: belongsTo('project'),
        fundingRound: belongsTo('round'),
    }),
    round: Model,
}
