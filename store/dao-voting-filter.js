import { getLeaderboard } from '@/api';

const getLeaderBoardTest = async () =>
  await new Promise((resolve) =>
    resolve({
      fundedProposals: [
        {
          id: 'string',
          title: 'string',
          project: {
            id: 'string',
            completedProposals: 0,
            logoUrl: '',
            title: 'string',
          },
          requestedFunding: 0,
          receivedFunding: 0,
          grantPoolShare: {},
          yesVotes: 0,
          noVotes: 0,
          effectiveVotes: 0,
          isEarmarked: true,
          earmarkType: 'string',
          tags: ['Outreach'],
          voteUrl: 'string',
          neededVotes: {
            fullyFunded: 0,
            partiallyFunded: 0,
          },
        },
      ],
      partiallyFundedProposals: [
        {
          id: 'string',
          title: 'string',
          project: {
            id: 'string',
            completedProposals: 0,
            logoUrl: 'string',
            title: 'string',
          },
          requestedFunding: 0,
          receivedFunding: 0,
          grantPoolShare: {},
          yesVotes: 0,
          noVotes: 0,
          effectiveVotes: 0,
          isEarmarked: true,
          earmarkType: 'string',
          tags: ['Outreach'],
          voteUrl: 'string',
          neededVotes: {
            fullyFunded: 0,
            partiallyFunded: 0,
          },
        },
      ],
      notFundedProposals: [
        {
          id: 'string',
          title: 'string',
          project: {
            id: 'string',
            completedProposals: 0,
            logoUrl: 'string',
            title: 'string',
          },
          requestedFunding: 0,
          receivedFunding: 0,
          grantPoolShare: {},
          yesVotes: 0,
          noVotes: 0,
          effectiveVotes: 0,
          isEarmarked: true,
          earmarkType: 'string',
          tags: ['Outreach'],
          voteUrl: 'string',
          neededVotes: {
            fullyFunded: 1000000,
            partiallyFunded: 0,
          },
        },
      ],
      amountProposals: 3,
      maxVotes: 10000000,
      grantPools: {},
      paymentOption: 'OCEAN',
      votingStartDate: '2022-01-30T14:02:14.172Z',
      votingEndDate: '2022-01-30T14:02:14.172Z',
      status: 'proposalSubmission',
      round: 13,
      overallFunding: 200000,
      overallRequestedFunding: 129999,
      totalVotes: 1000000,
    }),
  );

const initialState = {
  error: false,
  pending: true,
  leaderboard: {},
  filter: {
    round: 0,
  },
};

export const state = () => initialState;

export const mutations = {
  state(state, payload) {
    Object.assign(state, payload);
  },

  error(state, payload) {
    state.error = payload;
  },

  pending(state, payload) {
    state.pending = payload;
  },

  timer(state, payload) {
    state.timer = payload;
  },

  leaderboard(state, payload) {
    state.leaderboard = payload;
  },

  filter(state, payload) {
    const newFilter = { ...state.filter, ...payload };
    state.filter = newFilter;
  },
};

export const actions = {
  resetState({ commit }) {
    commit('state', initialState);
  },

  setPending({ commit, state }, payload) {
    if (state.pending !== payload) commit('pending', payload);
  },

  setFilter({ commit }, payload) {
    commit('filter', payload);
  },

  async fetchLeaderboard({ commit, state }) {
    // reset
    commit('error', null);

    // prepare query object
    const query = { ...state.filter };
    if (query.round === 0) delete query.round;

    try {
      /*const leaderBoardResponse = await getLeaderboard(this.$axios, query);*/
      const leaderBoardResponse = await getLeaderBoardTest();

      if (leaderBoardResponse.status === 204) {
        commit('error', 'general.error.retry');
        commit('leaderboard', {});
      } else {
        commit('leaderboard', leaderBoardResponse);
        commit('pending', false);
        // return query for url mutations
        return query;
      }
    } catch {
      commit('pending', false);
      commit('error', 'general.error.retry');
      commit('leaderboard', {});
    }
  },
};
