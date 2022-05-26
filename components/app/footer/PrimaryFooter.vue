<template>
  <footer class="bg-base-200">
    <section-container>
      <div
        class="footer py-10 text-base-content grid-cols-2 grid-flow-row lg:grid-flow-col lg:grid-cols-5"
      >
        <div
          v-for="item in footer1"
          :key="item.id"
          class="w-full justify-center lg:justify-start"
        >
          <div class="grid grid-flow-col mb-2 font-bold">
            <img
              v-if="item.name !== 'Ocean Protocol'"
              :src="item.img"
              :alt="`${item.name} ${$t('general.logo')}`"
              class="w-5 h-5 block mx-auto"
            />
            <svg-ocean-logo v-if="item.name === 'Ocean Protocol'" class="w-5" />
            <span :class="`${item.class} ml-2`">{{ item.name }}</span>
          </div>
          <app-link
            v-for="subItem in item.subItems"
            :key="subItem.id"
            :to="subItem.route"
            class="w-full text-center lg:text-left"
            link-style
            >{{ subItem.name }}</app-link
          >
        </div>
      </div>
      <div
        class="py-4 border-t bg-base-200 text-base-content border-base-300 flex flex-col items-center lg:flex-row md:justify-between gap-2"
      >
        <p class="text-2xs mb-0">
          {{ footer2.name }}
        </p>
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
    </section-container>
  </footer>
</template>

<script>
import twitter from '@iconify/icons-la/twitter';
import discord from '@iconify/icons-la/discord';
import github from '@iconify/icons-la/github';
import linkedin from '@iconify/icons-la/linkedin';
import email from '@iconify/icons-la/envelope';
import SectionContainer from '@/components/common/SectionContainer';
import AppLink from '@/components/common/AppLink.vue';
import AppIcon from '@/components/common/AppIcon';
import SvgOceanLogo from '@/components/common/SvgOceanLogo';
import EmailEnum from '@/enums/Email.enum';

export default {
  components: {
    SectionContainer,
    AppLink,
    AppIcon,
    SvgOceanLogo,
  },
  data() {
    return {
      footer1: [
        {
          id: 0,
          name: 'Ocean Pearl',
          // eslint-disable-next-line global-require
          img: require('@/assets/images/logo/ocean-pearl.svg'),
          class: 'text-primary',
          subItems: [
            {
              id: 0,
              name: this.$t('navbar.navbarLinkDefault'),
              route: '/',
            },
            {
              id: 1,
              name: this.$t('navbar.navbarProjects'),
              route: '/projects',
            },
            {
              id: 2,
              name: this.$t('navbar.navbarProposals'),
              route: '/dao-proposals',
            },
            {
              id: 3,
              name: this.$t('navbar.navbarVoting'),
              route: '/dao-voting',
            },
          ],
        },
        {
          id: 2,
          name: this.$t('footer.socials.heading'),
          // eslint-disable-next-line global-require
          img: require('@/assets/images/logo/ocean-pearl.svg'),
          class: 'text-primary',
          subItems: [
            {
              id: 0,
              name: 'Twitter',
              route: 'https://twitter.com/oceanpearlio',
            },
            {
              id: 1,
              name: 'Discord',
              route: 'https://discord.gg/eswPj8QZRH',
            },
            {
              id: 2,
              name: 'GitHub',
              route: 'https://github.com/ocean-tech-ship',
            },
            {
              id: 3,
              name: 'LinkedIn',
              route: 'https://linkedin.com/company/oceanpearl',
            },
            {
              id: 4,
              name: 'Email',
              route: `mailto:${EmailEnum.Address}`,
            },
          ],
        },
        {
          id: 3,
          name: this.$t('footer.vitals.heading'),
          // eslint-disable-next-line global-require
          img: require('@/assets/images/logo/ocean-pearl.svg'),
          class: 'text-primary',
          subItems: [
            {
              id: 0,
              name: this.$t('footer.vitals.analytics'),
              route: 'https://plausible.io/oceanpearl.io',
            },
            {
              id: 1,
              name: this.$t('footer.vitals.systems'),
              route: 'https://stats.uptimerobot.com/l0923I1O3y',
            },
          ],
        },
        {
          id: 4,
          name: this.$t('footer.opf.heading'),
          route: 'https://oceanprotocol.com/',
          class: 'text-base-content',
          subItems: [
            {
              id: 0,
              name: 'Home',
              route: 'https://oceanprotocol.com',
            },
            {
              id: 1,
              name: 'Port',
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
        name: 'Ocean Pearl 2022',
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
          {
            id: 4,
            name: 'Email',
            icon: email,
            route: `mailto:${EmailEnum.Address}`,
          },
        ],
      },
    };
  },
};
</script>
