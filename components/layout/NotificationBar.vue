<template>
  <div
    class="
      fixed
      top-0
      w-screen
      flex flex-col
      items-center
      pt-24
      lg:pt-6
      px-2
      z-50
      pointer-events-none
    "
  >
    <div
      v-for="alert in alerts"
      :key="alert.timestamp"
      class="shadow rounded-box bg-white my-2"
    >
      <div
        class="alert pointer-events-auto"
        :class="{
          'alert-info': alert.type === 'info',
          'alert-success': alert.type === 'success',
          'alert-warning': alert.type === 'warning',
          'alert-error': alert.type === 'error',
        }"
      >
        <div class="flex-1 items-center">
          <app-icon class="pr-2" :data="alert.icon" :size="24" />

          <label class="flex-1">{{ $t(alert.content) }}</label>

          <button
            v-if="alert.closeable"
            type="button"
            class="hover:opacity-50"
            @click="$store.commit('alert/removeByTimestamp', alert.timestamp)"
          >
            <app-icon class="pl-2" :data="icons.timesCircle" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import timesCircle from '@iconify/icons-la/times-circle';
import { mapState } from 'vuex';
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'NotificationBar',

  components: { AppIcon },

  data() {
    return {
      icons: {
        timesCircle,
      },
    };
  },

  computed: {
    ...mapState('alert', {
      alerts: 'alerts',
    }),
  },
};
</script>
