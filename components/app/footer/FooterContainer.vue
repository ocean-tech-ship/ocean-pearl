<template>
  <footer class="w-full absolute bottom-0">
    <div
      class="w-full max-w-1440 mx-auto flex items-center justify-center gap-8 bg-secondary shadow-md py-10"
    >
      <div v-for="item in footerItems" :key="item.id">
        <img
          v-if="item.id === 'supreme'"
          :src="item.icon"
          alt="ocean pearl logo"
          class="w-10 h-10 mx-5 block"
        />
        <footer-item v-else :to="item.route" :src="item.icon" :ext="item.ext">
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
        icon: require('@/assets/icons/footer/twitter_footer.svg'),
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 2,
        name: 'Telegram',
        icon: require('@/assets/icons/footer/telegram_footer.svg'),
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 'supreme',
        name: '',
        icon: require('@/assets/icons/footer/ocean_pearl_footer_logo.svg'),
        route: '/',
      },
      {
        id: 3,
        name: 'Protocol',
        icon: require('@/assets/icons/footer/protocol_footer.svg'),
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 4,
        name: 'Whitepaper',
        icon: require('@/assets/icons/footer/white_paper_footer.svg'),
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 5,
        name: 'Discord',
        icon: require('@/assets/icons/footer/discord_footer.svg'),
        route: 'https://t.co/handle',
        ext: true,
      },
    ],
  }),
})
</script>

<style></style>
