<template>
  <LandingSectionContainer class="my-32 py-16 gradient-background">
    <div class="mb-42px">
      <h2 class="text-white">
        {{ $t('landing.connect_social.title') }}
      </h2>
      <p class="text-white">{{ $t('landing.connect_social.text') }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
      <div v-for="card in cards" :key="card.title">
        <div class="shadow bg-white rounded p-8 pb-4 min-h-full flex flex-col">
          <div class="mr-3">
            <img
              class="inline-block h-10 w-10 mb-4"
              :src="card.imageURL"
              :alt="card.title"
            />
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
              paragraph-class="text-smbase mr-2"
              icon-class="mdi mdi-arrow-right-thick text-smbase"
            >
              {{ card.LinkText }}
            </app-link-icon-right>
          </div>
        </div>
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from './LandingSectionContainer.vue';
import AppLinkIconRight from '@/components/common/AppLinkIconRight.vue';

export default {
  name: 'LandingConnectSocial',
  components: {
    LandingSectionContainer,
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
          imageURL: require('@/assets/images/footer/discord_footer.svg'),
          text: 'Our main communication platform right now is discord. If you want to get in closer touch with us, just find us here and come on board.',
        },
        {
          title: 'Write an issue on ',
          titleHighlight: 'github',
          route: 'https://github.com/ocean-tech-ship',
          LinkText: 'Github',
          imageURL: require('@/assets/images/social/github.svg'),
          text: 'Submit your latest ideas and inspirations via writing an issue on our github repo. We will be happy about any input you got for us.',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.gradient-background {
  background-image: url('../../../assets/images/landing/waves.svg'),
    linear-gradient(to bottom right, #7b3070 5%, #d45b8d);
  background-position: center top;
  background-repeat: no-repeat;
  animation: animatedBackground 8s linear infinite alternate;
}

@media only screen and (max-width: 1100px) {
  .gradient-background {
    background-position: center center;
  }
}
</style>
