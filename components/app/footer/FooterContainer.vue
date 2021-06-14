<template>
  <footer class="w-full">
    <div
      class="w-full max-w-1440 mx-auto py-10 grid gap-10 md:flex md:items-center md:gap-0 md:justify-center lg:gap-5"
    >
      <div v-for="(item, i) in footerItems" :key="item.id">
        <img
          v-if="item.id === 'supreme'"
          :src="item.icon"
          :alt="`${item.name} logo`"
          class="w-10 h-10 lg:block hidden"
        />
        <footer-block
          v-else
          theme="text-primary"
          :item="item"
          :class="{ 'md:mr-20 lg:mr-0': i < footerItems.length - 1 }"
        />
      </div>
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
  }),
})
</script>

<style></style>
