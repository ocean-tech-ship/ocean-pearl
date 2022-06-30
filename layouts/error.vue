<template>
  <div>
    <!-- 404 page  -->
    <not-found v-if="error.statusCode === 404" />

    <!--  other error components go here  -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NotFound from '@/components/app/error/NotFound.vue';

export default Vue.extend({
  components: {
    NotFound,
  },

  props: {
    error: {
      type: Object,
      required: true,
    },
  },
});
</script>
