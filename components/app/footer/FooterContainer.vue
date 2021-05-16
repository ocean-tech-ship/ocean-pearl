<template>
  <footer class="w-full">
    <div
      class="w-full max-w-1440 mx-auto flex items-center justify-center gap-8 bg-secondary py-10"
    >
      <div v-for="item in footerItems" :key="item.id">
        <img
          v-if="item.id === 'supreme'"
          :src="item.icon"
          :alt="`${item.name} logo`"
          class="w-10 h-10 mx-5 block"
        />
        <footer-item v-else :item="item">
          <template #title>
            {{ item.name }}
          </template>
        </footer-item>
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'
import FooterItem from './FooterItem.vue'

export default Vue.extend({
  components: { FooterItem },
  data: () => ({
    footerItems: [
      {
        id: 0,
        name: '© Ocean Pearl',
        route: '',
        icon: '',
      },
      {
        id: 1,
        name: 'Twitter',
        icon: require('@/assets/icons/twitter_footer.svg'),
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 2,
        name: 'Telegram',
        icon: require('@/assets/icons/telegram_footer.svg'),
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 'supreme',
        name: 'ocean pearl',
        icon: require('@/assets/icons/ocean_pearl_footer_logo.svg'),
        route: '/',
      },
      {
        id: 3,
        name: 'Protocol',
        icon: require('@/assets/icons/protocol_footer.svg'),
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 4,
        name: 'Whitepaper',
        icon: require('@/assets/icons/white_paper_footer.svg'),
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 5,
        name: 'Discord',
        icon: require('@/assets/icons/discord_footer.svg'),
        route: 'https://t.co/handle',
        ext: true,
      },
    ],
  }),
})
</script>

<style></style>
