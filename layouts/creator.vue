<template>
  <div tabindex="0">
    <notification-bar />
    <nuxt />
    <primary-footer />
  </div>
</template>

<script>
import Vue from 'vue';
import NotificationBar from '~/components/app/header/NotificationBar';
import PrimaryFooter from '@/components/app/footer/PrimaryFooter';

export default Vue.extend({
  components: { NotificationBar, PrimaryFooter },
});
</script>
