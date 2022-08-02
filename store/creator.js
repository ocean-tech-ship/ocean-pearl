import ProjectCategoryEnum from '@/enums/ProjectCategory.enum';

const getDefaultState = () => ({
  /* we only allow one project draft at the same time */
  /* BE: create-project.model.ts */
  project: {
    title: '',
    oneLiner: '',
    description: '',
    category: ProjectCategoryEnum.Other,
    mediaHandles: {},
    logo: undefined,
    images: [],
  },
  loading: false,
});

export const state = () => getDefaultState();

export const mutations = {
  // payload: { key: value, ... }
  updateProperty(state, payload) {
    // Merge rather than replace, so we don't lose observers
    // https://github.com/vuejs/vuex/issues/1118
    Object.assign(state.project, payload);
  },
  reset(state) {
    // Merge rather than replace, so we don't lose observers
    // https://github.com/vuejs/vuex/issues/1118
    Object.assign(state, getDefaultState());
  },
};

export const actions = {
  submit({ state }) {
    console.log('submit project', state.project);
  },
};
