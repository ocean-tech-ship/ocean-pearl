<template>
  <footer class="w-full">
    <div
      class="
        w-full
        max-w-1440
        mx-auto
        py-10
        grid
        gap-10
        md:flex md:items-center md:gap-0 md:justify-center
        lg:gap-5
      "
    >
      <div v-for="(item, i) in footerItems" :key="item.id">
        <footer-block
          :theme="item.theme"
          :item="item"
          :class="{ 'md:mr-20 lg:mr-0': i < footerItems.length - 1 }"
        />
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue';
import FooterBlock from './FooterBlock.vue';

export default Vue.extend({
  components: { FooterBlock },
  data() {
    return {
      footerItems: [
        {
          id: 0,
          name: 'Ocean Pearl',
          theme: 'text-primary',
          icon: require('@/assets/images/footer/ocean_pearl_footer_logo.svg'),
          route: '/',
          block: true,
          hasSubItem: true,
          subItems: [
            {
              id: 0,
              name: 'Twitter',
              icon: require('@/assets/images/social/twitter.svg'),
              route: 'https://twitter.com/oceanpearlio',
              ext: true,
            },
            {
              id: 1,
              name: 'Discord',
              icon: require('@/assets/images/social/discord.svg'),
              route: 'https://discord.gg/eswPj8QZRH',
              ext: true,
            },
            {
              id: 2,
              name: 'GitHub',
              icon: require('@/assets/images/social/github.svg'),
              route: 'https://github.com/ocean-tech-ship',
              ext: true,
            },
            {
              id: 3,
              name: this.$t('footer.analytics'),
              icon: require('@/assets/images/footer/analytics.svg'),
              route: 'https://plausible.io/oceanpearl.io',
              ext: true,
            },
          ],
        },
        {
          id: 1,
          name: 'Ocean Protocol',
          theme: 'text-third',
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
              icon: require('@/assets/images/social/discord.svg'),
              route: 'https://discord.gg/Yuawx9EP6e',
              ext: true,
            },
          ],
        },
      ],
    };
  },
});
</script>

<style></style>
