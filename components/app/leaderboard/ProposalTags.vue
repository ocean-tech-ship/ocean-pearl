<template>
  <div>
    <template
      v-for="tag in proposal.tags"
    >
      <app-link
        :key="tag"
        :to="targetTagLink(tag)"
      >
        <div
          :class="{ 'bg-complementary text-third bg-opacity-70': isEarmark(tag) }"
          class="
            rounded
            m-0.5
            p-1
            bg-primary
            bg-opacity-10
            small-text
            text-primary
            hover:opacity-70
            ease-in-out
            duration-300
          "
        >
          {{ beautifyTagName(tag) }}
        </div>
      </app-link>
    </template>
  </div>
</template>

<script lang="ts">
import { LeaderboardProposal } from '@/models/Leaderboard.model';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import CategoryEnum from '@/components/enums/Category.enum';
import AppLink from '~/components/common/AppLink.vue';

export default {
  name: 'ProposalTags',
  components: { AppLink },
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
    },

    targetTagLink(tag: string): string {
      return `/dao-proposals?category=${tag}`
    }
  }
};
</script>
