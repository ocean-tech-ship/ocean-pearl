import project from './project';
import job from './job';
import daoproposal from './dao-proposal';
import round from './round';

/*
 * factories are contained in a single object, that's why we
 * destructure what's coming from users and the same should
 * be done for all future factories
 */
export default {
  ...project,
  ...daoproposal,
  ...round,
  ...job,
};
