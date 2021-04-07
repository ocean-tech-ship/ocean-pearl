<template>
  <footer class="w-full absolute bottom-0">
    <div
      class="w-full max-w-1440 mx-auto flex items-center justify-center gap-8 bg-secondary shadow-md py-10"
    >
      <div v-for="item in footerItems" :key="item.id">
        <img
          v-if="item.id === 'supreme'"
          :src="item.icon"
          alt="_ocean_pearl_logo"
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
import oceanPearl from '../../../assets/icons/footer/ocean_pearl_footer_logo.png'
import discord from '../../../assets/icons/footer/discord_footer.png'
import twitter from '../../../assets/icons/footer/twitter_footer.png'
import telegram from '../../../assets/icons/footer/telegram_footer.png'
import protocol from '../../../assets/icons/footer/protocol_footer.png'
import whitePaper from '../../../assets/icons/footer/white_paper_footer.png'
import FooterItem from './FooterItem.vue'
export default {
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
        icon: twitter,
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 2,
        name: 'Telegram',
        icon: telegram,
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 'supreme',
        name: '',
        icon: oceanPearl,
        route: '/',
      },
      {
        id: 3,
        name: 'Protocol',
        icon: protocol,
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 4,
        name: 'Whitepaper',
        icon: whitePaper,
        route: 'https://t.co/handle',
        ext: true,
      },
      {
        id: 5,
        name: 'Discord',
        icon: discord,
        route: 'https://t.co/handle',
        ext: true,
      },
    ],
  }),
}
</script>

<style></style>
