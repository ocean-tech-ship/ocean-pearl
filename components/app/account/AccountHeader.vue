<template>
  <div class="grid xl:grid-cols-2 gap-4 pb-8 xl:pb-0">
    <div>
      <h2>
        {{ $t('manage.title[0]') }}
        <span class="text-primary">{{ $t('manage.title[1]') }}</span>
      </h2>

      <div class="flex flex-wrap my-2">
        <button
          v-for="(project, index) in projects"
          :key="project.id"
          class="shadow rounded text-primary border-2 p-2 mr-2 mb-2"
          :class="[
            project.id === selectedProject.id
              ? 'border-primary'
              : 'border-none',
          ]"
          @click="$emit('selectProject', index)"
        >
          {{ project.title }}
        </button>
      </div>

      <p v-if="!!projects && projects.length === 0">
        {{ $t('manage.project.empty') }}
      </p>
    </div>

    <div>
      <div class="shadow rounded">
        <h6 class="text-primary pt-4 pl-4 pb-2">{{ $t('manage.admins') }}</h6>

        <hr class="text-primary" />

        <div class="p-4">
          <div
            v-for="address in accessAddresses"
            :key="address"
            class="flex items-center"
          >
            <jazzicon
              class="flex items-center w-5 h-5 mr-2"
              :diameter="20"
              :address="address"
            />
            <span class="text-primary break-all">{{ address }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jazzicon from 'vue-jazzicon';

export default {
  name: 'AccountHeader',

  components: {
    Jazzicon,
  },

  props: {
    wallet: {
      type: String,
      required: true,
      default: '',
    },

    projects: {
      type: Array,
      required: true,
      default: () => [],
    },

    selectedProject: {
      type: Object,
      required: false,
      default: () => {},
    },
  },

  computed: {
    accessAddresses() {
      return this.$props.selectedProject?.accessAddresses || [this.$props.wallet]
    }
  },
}
</script>
