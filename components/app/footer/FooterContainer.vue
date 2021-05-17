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
        icon: require('@/assets/images/footer/twitter_footer.svg'),
        route: 'https://twitter.com/oceanpearlio',
        ext: true,
      },
      {
        id: 2,
        name: 'Discord',
        icon: require('@/assets/images/footer/discord_footer.svg'),
        route: 'https://discord.gg/eswPj8QZRH',
        ext: true,
      },
      {
        id: 'supreme',
        name: 'ocean pearl',
        icon: require('@/assets/images/footer/ocean_pearl_footer_logo.svg'),
        route: '/',
      },
      {
        id: 3,
        name: 'Protocol',
        icon: require('@/assets/images/footer/protocol_footer.svg'),
        route: 'https://oceanprotocol.com/',
        ext: true,
      },
      {
        id: 4,
        name: 'Whitepaper',
        icon: require('@/assets/images/footer/white_paper_footer.svg'),
        route: 'https://oceanprotocol.com/tech-whitepaper.pdf',
        ext: true,
      },
      {
        id: 5,
        name: 'Discord',
        icon: require('@/assets/images/footer/discord_footer.svg'),
        route: 'https://discord.gg/Yuawx9EP6e',
        ext: true,
      },
    ],
  }),
})
</script>

<style></style>
