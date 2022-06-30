export const state = () => ({
  /* we only allow one project draft at the same time */
  /* derived from our Open-Proposal-Standard */
  // TODO: need to link img upload (ids) | waiting for new backend api
  project: {
    name: null,
    oneLiner: null,
    description: null,
    category: null,
    walletAddresses: [],
    links: [],
    team: [],
  },
  // TODO: for proposals we need to decide if we want to support multiple at the same time
});

export const mutations = {};

export const actions = {};
