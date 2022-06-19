<template>
  <section-container
    class="py-16 xl:pt-0 xl:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8"
  >
    <SvgNotFound />

    <div>
      <h2 class="flex flex-col mb-20 xl:mb-28">
        <span class="text-primary">{{ $t('notFound.title.primary') }}</span>
        <span>{{ $t('notFound.title.secondary') }}</span>
      </h2>

      <div class="flex flex-col gap-4">
        <p>{{ $t('notFound.text') }}</p>
        <ul class="flex flex-col">
          <li v-for="page in pages" :key="page.to">
            <app-link-icon-right
              :to="page.to"
              link-class="text-primary bounce-right mt-3"
              paragraph-class="text-primary text-smbase mr-2"
              >{{ page.title }}</app-link-icon-right
            >
          </li>
        </ul>
      </div>
    </div>
  </section-container>
</template>

<script>
import SectionContainer from '@/components/common/SectionContainer.vue';
import AppLinkIconRight from '@/components/common/AppLinkIconRight';
import SvgNotFound from '@/components/common/SvgNotFound';

export default {
  name: 'NotFound',

  components: {
    SvgNotFound,
    SectionContainer,
    AppLinkIconRight,
  },

  data() {
    return {
      pages: [
        {
          title: this.$t('navbar.navbarLinkDefault'),
          to: '/',
        },
        {
          title: this.$t('navbar.navbarProjects'),
          to: '/projects',
        },
        {
          title: this.$t('navbar.navbarProposals'),
          to: '/dao-proposals',
        },
        {
          title: this.$t('navbar.navbarVoting'),
          to: '/dao-voting',
        },
      ],
    };
  },
};
</script>
