<template>
  <footer class="w-full bg-secondary">
    <div
      class="w-full max-w-1440 mx-auto py-10 grid gap-10 md:flex md:items-center md:gap-20 md:justify-center lg:gap-5"
    >
      <footer-block theme="text-primary" :items="footerItems.slice(0, 3)" />
      <img
        :src="footerDivider.icon"
        :alt="`${footerDivider.name} logo`"
        class="w-10 h-10 lg:block hidden"
      />
      <footer-block :items="footerItems.slice(4, 7)" />
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'
import FooterBlock from './FooterBlock.vue'

export default Vue.extend({
  components: { FooterBlock },
  data: () => ({
    footerItems: [
      {
        id: 0,
        name: 'Ocean Pearl',
        icon: require('@/assets/images/footer/ocean_pearl_footer_logo.svg'),
        route: '/',
        block: true,
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
        name: 'Ocean Protocol',
        icon: require('@/assets/images/footer/protocol_footer.svg'),
        route: 'https://oceanprotocol.com/',
        ext: true,
        block: true,
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

  computed: {
    footerDivider() {
      return this.footerItems.find((el) => el.id === 'supreme')
    },
  },
})
</script>

<style></style>
