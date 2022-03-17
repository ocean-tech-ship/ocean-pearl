<template>
  <app-card class="relative bg-base-200 rounded shadow flex justify-center">
    <!-- unlock overlay -->
    <div
      v-if="card.key !== 'create-project'"
      class="absolute rounded bg-neutral bg-opacity-80 z-label w-full h-full flex flex-col items-center"
    >
      <div class="flex-grow flex items-center">
        <div class="bg-base-200 p-4 rounded-full text-primary">
          <app-icon class="md:hidden" :size="24" :data="icons.lock" />
          <app-icon class="hidden md:block" :size="48" :data="icons.lock" />
        </div>
      </div>

      <span class="hidden md:block pb-6">
        {{ $t('manage.landing.unlock') }}
      </span>
    </div>

    <!-- expand action (until md) -->
    <div class="md:hidden absolute p-4 w-full flex justify-end text-primary">
      <button
        type="button"
        class="btn btn-primary btn-circle btn-sm"
        @click="expand = !expand"
      >
        <app-icon :size="24" :data="icons.info" />
      </button>
    </div>

    <!-- content -->
    <div class="w-full flex flex-col items-center p-4 space-y-6">
      <div class="self-start sm:self-center flex items-center text-primary">
        <app-icon class="pr-2" :size="32" :data="card.icon" />
        <h4 class="text-base">
          {{ $t('manage.landing.cards.' + card.key + '.title')[0] }}
          <span class="text-base-content">
            {{ $t('manage.landing.cards.' + card.key + '.title')[1] }}
          </span>
        </h4>
      </div>

      <img
        class="hidden md:block w-2/3 h-32 justify-center"
        :src="card.img"
        alt=""
      />

      <p
        v-if="expand"
        class="md:hidden small-text px-4 text-base-content text-center"
      >
        {{ $t('manage.landing.cards.' + card.key + '.subtitle') }}
      </p>

      <p
        class="hidden md:block small-text h-16 px-4 text-base-content text-center"
      >
        {{ $t('manage.landing.cards.' + card.key + '.subtitle') }}
      </p>

      <nuxt-link
        v-if="expand"
        :to="card.target"
        class="md:hidden btn btn-outline btn-primary"
      >
        {{ $t('manage.landing.cards.' + card.key + '.action') }}
      </nuxt-link>

      <nuxt-link
        :to="card.target"
        class="hidden md:flex btn btn-outline btn-primary"
      >
        {{ $t('manage.landing.cards.' + card.key + '.action') }}
      </nuxt-link>
    </div>
  </app-card>
</template>

<script>
import info from '@iconify/icons-la/info';
import lock from '@iconify/icons-la/lock';
import AppCard from '@/components/common/AppCard';
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'ActionCard',
  components: { AppIcon, AppCard },

  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      expand: false,

      icons: {
        info,
        lock,
      },
    };
  },
};
</script>
