<template>
  <div>
    <h4>
      General
      <span class="text-primary"> information </span>
    </h4>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
});
</script>
