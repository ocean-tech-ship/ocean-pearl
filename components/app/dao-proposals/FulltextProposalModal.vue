<template>
  <app-modal :open="open" close-button large @close="$emit('close')">
    <template #body>
      <div class="xl:p-4">
        <i18n v-if="proposal" path="proposal.excerpt" tag="p" class="pb-4">
          <template #src>
            <app-link :to="proposal.oceanProtocolPortUrl" class="link"
              >port.oceanprotocol.com</app-link
            >
          </template>
        </i18n>

        <!-- skeleton loader -->
        <fulltext-proposal-skeleton v-if="loading" />

        <div
          v-dompurify-html="content"
          class="prose prose-sm break-words max-w-none"
        />
      </div>
    </template>
  </app-modal>
</template>

<script>
import { getFulltextProposal } from '@/api';
import AppModal from '@/components/common/AppModal';
import FulltextProposalSkeleton from '@/components/app/dao-proposals/FulltextProposalSkeleton';
import AppLink from '@/components/common/AppLink';

export default {
  name: 'FulltextProposalModal',

  components: { AppLink, FulltextProposalSkeleton, AppModal },

  props: {
    proposal: {
      validator: (val) => ['null', 'object'].includes(typeof val),
      required: true,
    },
  },

  data() {
    return {
      open: false,
      loading: false,
      content: '',
    };
  },

  watch: {
    proposal(val) {
      if (val) {
        this.open = true;
        this.fetchProposal();
      } else {
        this.open = false;
      }
    },
  },

  methods: {
    async fetchProposal() {
      this.loading = true;

      try {
        const response = await getFulltextProposal(
          this.$axios,
          this.$props.proposal.id,
        );

        this.content = response.data;
      } catch (error) {
        if (error.response?.status === 404) {
          this.content = this.$i18n.t('general.error.unknown');
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

