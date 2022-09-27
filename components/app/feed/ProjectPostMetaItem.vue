<template>
  <app-link v-if="to" :to="to" class="flex items-center" link-style>
    <app-icon v-if="icon" class="pr-1" :data="icon" :size="iconSize" />
    <app-logo
      v-if="projectForLogo"
      class="pr-1"
      :project="projectForLogo"
      :size="34"
    />
    <span v-if="value" :class="{ 'line-clamp-1': lineClamp }">{{ value }}</span>
  </app-link>

  <div v-else class="flex items-center">
    <app-icon v-if="icon" class="pr-1" :data="icon" :size="iconSize" />
    <app-logo
      v-if="projectForLogo"
      class="pr-1"
      :project="projectForLogo"
      :size="34"
    />
    <span v-if="value" :class="{ 'line-clamp-1': lineClamp }">{{ value }}</span>
  </div>
</template>

<script>
import AppIcon from '~/components/common/AppIcon';
import AppLogo from '~/components/common/AppLogo';
import AppLink from '~/components/common/AppLink';

export default {
  name: 'PorjectPostMetaItem',
  components: { AppLink, AppIcon, AppLogo },

  props: {
    to: {
      type: [String, null],
      required: false,
      default: null,
    },
    lineClamp: {
      type: Boolean,
      required: false,
      default: false,
    },
    projectForLogo: {
      type: [Object, null],
      required: false,
      default: null,
    },
    icon: {
      type: [Object, null],
      required: false,
      default: null,
    },
    iconSize: {
      type: Number,
      required: false,
      default: 24,
    },
    value: {
      type: [String, null],
      required: false,
      default: null,
    },
  },
};
</script>
