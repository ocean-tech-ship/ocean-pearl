<template>
  <div class="flex space-x-2">
    <div
      v-for="tag in proposal.tags" :key="tag"
      :class="{ 'bg-complementary text-third bg-opacity-70': isEarmark(tag) }"
      class="rounded p-1 bg-primary bg-opacity-10 small-text text-primary"
    >
      {{ beautifyTagName(tag) }}
    </div>
  </div>
</template>

<script lang="ts">
import { LeaderboardProposal } from '@/models/Leaderboard.model';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import CategoryEnum from '@/components/enums/Category.enum';

export default {
  name: 'ProposalTags',

  props: {
    proposal: {
      type: Object as () => LeaderboardProposal,
      required: true,
    },
  },

  methods: {
    beautifyTagName(tag: string): string {
      return CategoryMap[tag as CategoryEnum] || 'Earmarked';
    },

    isEarmark(tag: string): boolean {
      return tag.toLowerCase() === 'earmarked';
    }
  }
};
</script>
