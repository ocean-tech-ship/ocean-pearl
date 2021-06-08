<template>
  <footer class="w-full">
    <div
      class="w-full max-w-1440 mx-auto py-10 grid gap-10 md:flex md:items-center md:gap-20 md:justify-center lg:gap-5"
    >
      <div v-for="item in footerItems" :key="item.id">
        <img
          v-if="item.id === 'supreme'"
          :src="item.icon"
          :alt="`${item.name} logo`"
          class="w-10 h-10 xl:block hidden"
        />
        <footer-block v-else :theme="item.theme" :item="item" />
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'
import FooterBlock from './FooterBlock.vue'

export default Vue.extend({
  components: { FooterBlock },
  data() {
    return {
      footerItems: [
        {
          id: 0,
          name: 'Ocean Pearl',
          icon: require('@/assets/images/footer/ocean_pearl_footer_logo.svg'),
          route: '/',
          theme: 'text-primary',
          block: true,
          hasSubItem: true,
          subItems: [
            {
              id: 0,
              name: 'Twitter',
              icon: require('@/assets/images/footer/twitter_footer.svg'),
              route: 'https://twitter.com/oceanpearlio',
              ext: true,
            },
            {
              id: 1,
              name: 'Discord',
              icon: require('@/assets/images/footer/discord_footer.svg'),
              route: 'https://discord.gg/eswPj8QZRH',
              ext: true,
            },
            {
              id: 2,
              name: this.$t('analytics'),
              icon: require('@/assets/images/footer/analytics.svg'),
              route: 'https://plausible.io/oceanpearl.io',
              ext: true,
            },
          ],
        },
        {
          id: 'supreme',
          name: 'ocean pearl',
          icon: require('@/assets/images/footer/ocean_pearl_footer_logo.svg'),
          route: '/',
        },
        {
          id: 1,
          name: 'Ocean Protocol',
          icon: require('@/assets/images/footer/protocol_footer.svg'),
          route: 'https://oceanprotocol.com/',
          theme: 'text-third',
          ext: true,
          block: true,
          hasSubItem: true,
          subItems: [
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
        },
      ],
    }
  },
})
</script>

<style></style>
