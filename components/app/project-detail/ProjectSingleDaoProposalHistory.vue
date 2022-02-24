<template>
  <div class="shadow rounded p-4">
    <p class="small-text text-primary">
      {{ $t('project.proposal.title.plural') }}
      <span class="text-third">
        (<span class="text-primary">{{ project.daoProposals.length }}</span
        >)
      </span>
    </p>

    <div class="-mx-4 -mb-4 overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-primary">
            <th
              class="p-2 px-4 text-left pl-4"
              v-html="$t('project.proposal.history.round')"
            />
            <th
              class="p-2 px-4 text-right"
              v-html="$t('project.proposal.history.yes')"
            />
            <th
              class="p-2 px-4 text-right"
              v-html="$t('project.proposal.history.no')"
            />
            <th
              class="p-2 px-4 text-right"
              v-html="$t('project.proposal.history.funding')"
            />
            <th
              class="p-2 px-4 text-right"
              v-html="$t('project.proposal.history.status')"
            />
            <th
              class="p-2 px-4 text-right pr-4"
              v-html="$t('project.proposal.history.view')"
            />
          </tr>
        </thead>

        <tbody>
          <template v-for="(proposal, index) in project.daoProposals">
            <tr
              :key="index"
              :class="
                index + 1 < project.daoProposals.length
                  ? 'border-b border-darkgrey'
                  : ''
              "
            >
              <td class="text-left p-4 py-3 pl-4 flex">
                <div class="rounded border border-darkgrey w-10 text-center py-1 px-2">
                  <span>{{ proposal.fundingRound.round }}</span>
                </div>
              </td>

              <td class="text-right p-4 py-3">
                <span v-if="proposal.votes > 0">
                  {{ addPunctuation(proposal.votes) }}
                </span>

                <span v-else>-</span>
              </td>

              <td class="text-right p-4 py-3">
                <span v-if="proposal.counterVotes > 0">
                  {{ addPunctuation(proposal.counterVotes) }}
                </span>

                <span v-else>-</span>
              </td>

              <td class="text-right p-4 py-3">
                <div
                  v-if="proposal.grantedToken > 0"
                  class="flex items-center justify-end"
                >
                  {{ addPunctuation(proposal.grantedToken) }}

                  <img
                    class="self-start pl-1"
                    src="@/assets/images/icons/ocean.svg"
                    alt="$OCEAN"
                  />
                </div>

                <span v-else>-</span>
              </td>

              <td class="text-right p-4 py-3">
                {{ $t('project.proposal.status.' + proposal.status) }}
              </td>

              <td class="p-4 py-3 pr-4">
                <div class="flex justify-end">
                  <app-link :to="proposal.oceanProtocolPortUrl">
                    <div class="flex items-center text-primary">
                      <app-icon
                        class="mr-1"
                        :size="17"
                        :data="icons.externalLinkAlt"
                      />

                      <span>port</span>
                    </div>
                  </app-link>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import externalLinkAlt from '@iconify/icons-la/external-link-alt';
import Numbers from '@/mixins/Numbers';
import AppLink from '@/components/common/AppLink.vue';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'ProjectSingleDaoProposalHistory',

  components: {
    AppIcon,
    AppLink,
  },

  mixins: [Numbers],

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      icons: {
        externalLinkAlt,
      },
    };
  },
};
</script>
