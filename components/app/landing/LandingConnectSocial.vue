<template>
  <div class="space-y-8">
    <div>
      <h2 class="text-primary-content">
        {{ $t('landing.connect_social.title') }}
      </h2>
      <p class="text-primary-content">
        {{ $t('landing.connect_social.text') }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
      <div v-for="card in cards" :key="card.title">
        <div
          class="shadow bg-base-200 rounded p-8 pb-4 min-h-full flex flex-col"
        >
          <div class="mr-3">
            <app-icon class="mb-4 text-primary" :size="40" :data="card.icon" />
          </div>
          <div class="flex flex-col flex-grow">
            <h4>
              {{ card.title }}
              <span class="text-primary">
                {{ card.titleHighlight }}
              </span>
            </h4>
            <p class="my-4 text-smbase">
              {{ card.text }}
            </p>
            <app-link-icon-right
              :to="card.route"
              class="mt-auto"
              link-class="text-base-content bounce-right"
              paragraph-class="text-base-content text-smbase mr-2"
            >
              {{ card.LinkText }}
            </app-link-icon-right>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import discord from '@iconify/icons-la/discord';
import github from '@iconify/icons-la/github';
import AppLinkIconRight from '@/components/common/AppLinkIconRight.vue';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'LandingConnectSocial',
  components: {
    AppIcon,
    AppLinkIconRight,
  },
  data() {
    return {
      cards: [
        {
          title: 'Meet the crew on ',
          titleHighlight: 'discord',
          route: 'https://discord.gg/eswPj8QZRH',
          LinkText: 'Discord',
          icon: discord,
          text: 'Our main communication platform right now is discord. If you want to get in closer touch with us, just find us here and come on board.',
        },
        {
          title: 'Write an issue on ',
          titleHighlight: 'github',
          route: 'https://github.com/ocean-tech-ship',
          LinkText: 'Github',
          icon: github,
          text: 'Submit your latest ideas and inspirations via writing an issue on our github repo. We will be happy about any input you got for us.',
        },
      ],
    };
  },
};
</script>
