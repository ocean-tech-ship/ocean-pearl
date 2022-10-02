<template>
  <div class="bg-base-200 rounded p-4 flex items-center">
    <div class="flex-grow">
      <!-- collapsed content -->
      <div class="flex items-center space-x-2">
        <app-logo :project="item.project" :size="32" />
        <span class="text-primary font-bold">
          {{ item.project.title }}
        </span>
        <span>•</span>
        <span class="text-primary">
          {{ $dateFns.formatDistanceToNowStrict(item.timestamp) }}
        </span>
        <span>•</span>
        <span>
          {{ categoryMap[item.project.category] }}
        </span>
      </div>

      <!-- expanded content -->
      <div v-if="expanded">
        TODO: content

        <!-- review actions -->
        <div class="flex space-x-3">
          <input
            type="text"
            placeholder="Review comment"
            class="input flex-grow"
          />
          <button type="button" class="btn btn-error">Decline</button>
          <button type="button" class="btn btn-success">Accept</button>
        </div>
      </div>
    </div>

    <!-- collapse action -->
    <button
      type="button"
      class="btn btn-sm btn-circle ml-4 self-start"
      @click="expanded = !expanded"
    >
      <app-icon :data="expanded ? icons.chevronUp : icons.chevronDown" />
    </button>
  </div>
</template>

<script>
import chevronUp from '@iconify/icons-mdi/chevron-up';
import chevronDown from '@iconify/icons-mdi/chevron-down';
import AppIcon from '@/components/common/AppIcon';
import AppLogo from '@/components/common/AppLogo';
import { ProjectCategoryTypeMap } from '@/mapper/ProjectCategoryType.mapper';

export default {
  name: 'ReviewItem',

  components: { AppLogo, AppIcon },

  props: {
    item: {
      type: Object,
      required: true,
    },
    expand: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      categoryMap: ProjectCategoryTypeMap,
      icons: {
        chevronDown,
        chevronUp,
      },

      expanded: this.expand ?? false,
    };
  },
};
</script>

