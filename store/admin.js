const getDefaultState = () => ({
  // TODO: decide if the api provides all review types once or per request
  items: [
    {
      type: 'project',
      timestamp: Date.now() - 1000 * 64 * 64 * 2,
      project: {
        title: 'Indian Ocean Program',
        category: 'outreach',
      },
    },
    {
      type: 'post',
      timestamp: Date.now() - 1000 * 64 * 64 * 33,
      project: {
        title: 'Ocean Pearl',
        category: 'dao',
      },
      post: 'This is a very short to showcase our new admin portal',
    },
  ],
  loading: false,
});

export const state = () => getDefaultState();

export const mutations = {
  reset() {
    // Merge rather than replace, so we don't lose observers
    // https://github.com/vuejs/vuex/issues/1118
    Object.assign(state, getDefaultState());
  },
};

export const actions = {};
