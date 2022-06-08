<template>
  <div>
    <app-modal :open="open" @close="open = false">
      <template #body>
        <nuxt-content :document="doc" />
      </template>
    </app-modal>

    <!-- activator -->
    <slot :open="() => showModal()">
      <button
        type="button"
        class="btn btn-sm btn-circle"
        :class="btnClass"
        @click="showModal()"
      >
        <app-icon :data="icon" :size="iconSize" />
      </button>
    </slot>
  </div>
</template>

<script>
import info from '@iconify/icons-la/info';
import AppModal from '@/components/common/AppModal';
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'CmsInfoModal',

  components: { AppIcon, AppModal },

  props: {
    icon: {
      type: Object,
      default: () => info,
    },
    iconSize: {
      type: Number,
      default: 24,
    },
    btnClass: {
      type: String,
      required: false,
      default: null,
    },
    document: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      open: false,
      doc: null,
    };
  },

  methods: {
    async showModal() {
      // Fetch only once
      if (!this.doc) {
        this.doc = await this.$content(this.$props.document).fetch();
      }

      this.open = true;
    },
  },
};
</script>
