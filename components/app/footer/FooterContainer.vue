<template>
  <div class="bg-base-200">
    <section-container>
      <footer class="footer py-10 text-base-content">
        <div v-for="item in footer1" :key="item.id">
          <div class="grid grid-flow-col mb-2 uppercase font-bold">
            <img
              :src="item.img"
              :alt="`${item.name} ${$t('general.logo')}`"
              class="w-5 h-5 block mx-auto"
            />
            <span :class="`${item.class} ml-2`">{{ item.name }}</span>
          </div>
          <app-link
            v-for="subItem in item.subItems"
            :key="subItem.id"
            :to="subItem.route"
            class="link link-hover"
            >{{ subItem.name }}</app-link
          >
        </div>
      </footer>
      <footer
        class="footer py-4 border-t bg-base-200 text-base-content border-base-300"
      >
        <p class="text-2xs mb-0">
          {{ footer2.name }}
        </p>
        <div class="md:place-self-center md:justify-self-end">
          <div class="grid grid-flow-col gap-4">
            <app-link
              v-for="subItem in footer2.subItems"
              :key="subItem.id"
              :to="subItem.route"
            >
              <app-icon :data="subItem.icon" width="30" height="30" />
            </app-link>
          </div>
        </div>
      </footer>
    </section-container>
  </div>
</template>

<script>
import twitter from '@iconify/icons-la/twitter';
import discord from '@iconify/icons-la/discord';
import github from '@iconify/icons-la/github';
import linkedin from '@iconify/icons-la/linkedin';
import AppLink from '@/components/common/AppLink.vue';
import AppIcon from '@/components/common/AppIcon.vue';
import SectionContainer from '@/components/common/SectionContainer';

export default {
  components: {
    SectionContainer,
    AppLink,
    AppIcon,
  },
  // TODO 1: Add translations
  // TODO 2: Add SVGs for dark mode
  data() {
    return {
      footer1: [
        {
          id: 0,
          name: 'Ocean Pearl',
          // eslint-disable-next-line global-require
          img: require('@/assets/images/logo/ocean-pearl.svg'),
          route: '/',
          class: 'text-primary',
          subItems: [
            {
              id: 0,
              name: 'Analytics',
              route: 'https://twitter.com/oceanpearlio',
            },
            {
              id: 1,
              name: 'Server Status',
              route: 'https://stats.uptimerobot.com/l0923I1O3y',
            },
            {
              id: 2,
              name: 'Contact',
              route: 'https://github.com/ocean-tech-ship',
            },
          ],
        },
        {
          id: 1,
          name: 'Ocean Protocol',
          // eslint-disable-next-line global-require
          img: require('@/assets/images/logo/ocean-protocol.svg'),
          route: 'https://oceanprotocol.com/',
          class: 'base-200',
          subItems: [
            {
              id: 0,
              name: 'Website',
              route: 'https://oceanprotocol.com',
            },
            {
              id: 1,
              name: 'Ocean Port',
              route: 'https://port.oceanprotocol.com/',
            },
            {
              id: 2,
              name: 'Github',
              route: 'https://github.com/oceanprotocol',
            },
            {
              id: 3,
              name: 'Discord',
              route: 'https://discord.gg/Yuawx9EP6e',
            },
          ],
        },
      ],
      footer2: {
        name: '© 2022 Ocean Pearl - MIT License',
        subItems: [
          {
            id: 0,
            name: 'Twitter',
            icon: twitter,
            route: 'https://twitter.com/oceanpearlio',
          },
          {
            id: 1,
            name: 'Discord',
            icon: discord,
            route: 'https://discord.gg/eswPj8QZRH',
          },
          {
            id: 2,
            name: 'GitHub',
            icon: github,
            route: 'https://github.com/ocean-tech-ship',
          },
          {
            id: 3,
            name: 'Linkedin',
            icon: linkedin,
            route: 'https://linkedin.com/company/oceanpearl',
          },
        ],
      },
    };
  },
};
</script>
