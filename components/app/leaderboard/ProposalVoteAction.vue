<template>
  <app-link :to="voteUrl" :data-analytics="dataAnalytics">
    <div
      :class="{ 'bg-primary bg-opacity-10': background }"
      class="
        relative
        rounded
        w-12
        h-12
        flex
        items-center
        justify-center
        transition
        duration-300
        ease-in-out
        lg:hover:scale-125
      "
    >
      <app-icon class="text-primary" :data="icons.vote" />
    </div>
  </app-link>
</template>

<script>
import vote from '@iconify/icons-mdi/vote';
import AppIcon from '@/components/common/AppIcon.vue';
import AppLink from '@/components/common/AppLink.vue';
import CategoryEnum from '@/enums/Category.enum';

export default {
  name: 'ProposalVoteAction',

  components: { AppLink, AppIcon },

  props: {
    proposal: {
      type: Object,
      required: true,
    },

    background: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      icons: {
        vote,
      },
    };
  },

  computed: {
    dataAnalytics() {
      const proposal = this.$props.proposal;
      return `"Vote: Click", {"props":{"url":"${this.voteUrl}","project":"${
        proposal.project?.title
      }","category":"${this.getCategory(proposal.tags)}"}}`;
    },

    voteUrl() {
      const stdUrl = 'https://vote.oceanprotocol.com/#/officialoceandao.eth';
      return this.$props.proposal.voteUrl || stdUrl;
    },
  },

  methods: {
    getCategory(tags) {
      for (const tag of tags) {
        if (Object.values(CategoryEnum).includes(tag)) {
          return tag;
        }
      }
    },
  },
};
</script>
