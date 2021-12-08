<template>
  <div>
    <app-link :to="targetCategoryPath(findCategory(proposal.tags))">
      <proposal-tag :tag="findCategory(proposal.tags)" />
    </app-link>

    <proposal-tag
      v-if="proposal.earmarkType"
      is-earmark
      :tag="proposal.earmarkType"
    />
  </div>
</template>

<script lang="ts">
import { LeaderboardProposal } from '@/models/Leaderboard.model';
import CategoryEnum from '@/enums/Category.enum';
import AppLink from '@/components/common/AppLink.vue';
import ProposalTag from '@/components/app/leaderboard/ProposalTag.vue';

export default {
  name: 'ProposalTags',
  components: { ProposalTag, AppLink },
  props: {
    proposal: {
      type: Object as () => LeaderboardProposal,
      required: true,
    },
  },

  methods: {
    findCategory(tags: string[]): CategoryEnum {
      return tags.find((tag) =>
        Object.values(CategoryEnum).includes(tag as CategoryEnum),
      ) as CategoryEnum;
    },

    targetCategoryPath(tag: string): string {
      return `/dao-proposals?category=${tag}`;
    },
  },
};
</script>
