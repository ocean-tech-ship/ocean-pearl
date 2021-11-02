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
import twitter from '@iconify/icons-la/twitter-square';
import discord from '@iconify/icons-la/discord';
import github from '@iconify/icons-la/github-square';
import chartLine from '@iconify/icons-la/chart-line';
import scroll from '@iconify/icons-la/scroll';
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
          // eslint-disable-next-line global-require
          img: require('@/assets/images/logo/ocean-pearl.svg'),
          route: '/',
          block: true,
          hasSubItem: true,
          subItems: [
            {
              id: 0,
              name: 'Twitter',
              icon: twitter,
              route: 'https://twitter.com/oceanpearlio',
              ext: true,
            },
            {
              id: 1,
              name: 'Discord',
              icon: discord,
              route: 'https://discord.gg/eswPj8QZRH',
              ext: true,
            },
            {
              id: 2,
              name: 'GitHub',
              icon: github,
              route: 'https://github.com/ocean-tech-ship',
              ext: true,
            },
            {
              id: 3,
              name: this.$t('footer.analytics'),
              icon: chartLine,
              route: 'https://plausible.io/oceanpearl.io',
              ext: true,
            },
          ],
        },
        {
          id: 1,
          name: 'Ocean Protocol',
          theme: 'text-third',
          // eslint-disable-next-line global-require
          img: require('@/assets/images/logo/ocean-protocol.svg'),
          route: 'https://oceanprotocol.com/',
          ext: true,
          block: true,
          hasSubItem: true,
          subItems: [
            {
              id: 4,
              name: 'Whitepaper',
              icon: scroll,
              route: 'https://oceanprotocol.com/tech-whitepaper.pdf',
              ext: true,
            },
            {
              id: 5,
              name: 'Discord',
              icon: discord,
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
