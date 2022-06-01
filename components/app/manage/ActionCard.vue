<template>
  <app-card class="relative bg-base-200 rounded shadow flex justify-center">
    <!-- loading indicator -->
    <div
      v-if="loading"
      class="absolute rounded bg-neutral bg-opacity-80 z-label w-full h-full flex items-center justify-center"
    >
      <app-loading-spinner class="w-12 h-12" />
    </div>

    <!-- locked overlay -->
    <div
      v-if="!loading && lockedText"
      class="absolute rounded bg-neutral bg-opacity-80 z-label w-full h-full flex flex-col items-center"
    >
      <div class="flex-grow flex items-center">
        <div class="bg-base-200 p-4 rounded-full text-primary">
          <app-icon class="md:hidden" :size="24" :data="icons.lock" />
          <app-icon class="hidden md:block" :size="48" :data="icons.lock" />
        </div>
      </div>

      <span class="hidden md:block pb-6">
        {{ lockedText }}
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

      <app-button
        v-if="expand"
        as="link"
        :to="card.target"
        :icon="card.external ? icons.externalLinkAlt : null"
        class="md:hidden btn-outline btn-primary"
      >
        {{ $t('manage.landing.cards.' + card.key + '.action') }}
      </app-button>

      <app-button
        as="link"
        :to="card.target"
        :icon="card.external ? icons.externalLinkAlt : null"
        class="hidden md:flex btn-outline btn-primary"
      >
        {{ $t('manage.landing.cards.' + card.key + '.action') }}
      </app-button>
    </div>
  </app-card>
</template>

<script>
import externalLinkAlt from '@iconify/icons-la/external-link-alt';
import info from '@iconify/icons-la/info';
import lock from '@iconify/icons-la/lock';
import AppCard from '@/components/common/AppCard';
import AppIcon from '@/components/common/AppIcon';
import AppLoadingSpinner from '@/components/common/AppLoadingSpinner';
import AppButton from '@/components/common/AppButton';

export default {
  name: 'ActionCard',

  components: { AppButton, AppLoadingSpinner, AppIcon, AppCard },

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    card: {
      type: Object,
      required: true,
    },
    lockedText: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      expand: false,

      icons: {
        externalLinkAlt,
        info,
        lock,
      },
    };
  },
};
</script>
