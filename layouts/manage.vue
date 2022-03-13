<template>
  <div>
    <nuxt />
    <primary-footer />
  </div>
</template>

<script>
import Vue from 'vue';
import PrimaryFooter from '@/components/app/footer/PrimaryFooter';

export default Vue.extend({
  components: { PrimaryFooter },
});
</script>
