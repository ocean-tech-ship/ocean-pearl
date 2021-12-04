import iconInfo from '@iconify/icons-la/info-circle';
import iconSuccess from '@iconify/icons-la/check-circle';
import iconWarning from '@iconify/icons-la/wrench';
import iconError from '@iconify/icons-la/exclamation-triangle';

const FADE_TIMEOUT = 4000;

export const state = () => ({
  alerts: [],
});

export const mutations = {
  clear(state) {
    state.alerts = [];
  },

  removeByTimestamp(state, timestamp) {
    const index = state.alerts.findIndex((el) => el.timestamp === timestamp);
    if (index > -1) {
      state.alerts.splice(index, 1);
    }
  },

  add(state, payload) {
    state.alerts.push(payload);
  },
};

export const actions = {
  custom({ commit }, payload) {
    const alert = {
      type: payload.type,
      content: payload.content,
      closeable: payload.closeable ?? true,
      timestamp: payload.timestamp ?? Date.now(),
      icon: payload.icon,
    };

    commit('add', alert);

    if (payload.autoFade) {
      setTimeout(
        () => commit('removeByTimestamp', alert.timestamp),
        FADE_TIMEOUT,
      );
    }
    return alert.timestamp;
  },

  info({ dispatch }, payload) {
    dispatch('custom', {
      ...payload,
      type: 'info',
      content: payload.content ?? payload,
      icon: iconInfo,
    });
  },

  success({ dispatch }, payload) {
    dispatch('custom', {
      ...payload,
      type: 'success',
      content: payload.content ?? payload,
      icon: iconSuccess,
    });
  },

  warning({ dispatch }, payload) {
    dispatch('custom', {
      ...payload,
      type: 'warning',
      content: payload.content ?? payload,
      icon: iconWarning,
    });
  },

  error({ dispatch }, payload) {
    dispatch('custom', {
      ...payload,
      type: 'error',
      content: payload.content ?? payload,
      icon: iconError,
    });
  },
};
