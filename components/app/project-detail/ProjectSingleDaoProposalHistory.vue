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
              v-html="$t('project.proposal.history.granted')"
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
              <td class="text-left p-4 py-3 pl-4">
                <span class="rounded border border-darkgrey py-1 px-2">
                  {{ proposal.fundingRound.round }}
                </span>
              </td>

              <td class="text-right p-4 py-3">
                <span v-if="proposal.votes > 0">
                  {{ proposal.votes }}
                </span>

                <span v-else>-</span>
              </td>

              <td class="text-right p-4 py-3">
                <span v-if="proposal.counterVotes > 0">
                  {{ proposal.counterVotes }}
                </span>

                <span v-else>-</span>
              </td>

              <td class="text-right p-4 py-3">
                <div
                  v-if="proposal.grantedToken > 0"
                  class="flex items-center justify-end"
                >
                  {{ proposal.grantedToken }}

                  <img
                    class="self-start pl-1"
                    src="@/assets/images/icons/ocean.svg"
                    alt=""
                  />
                </div>

                <span v-else>-</span>
              </td>

              <td class="text-right p-4 py-3">
                {{
                  proposal.status === 'funded' || 'granted'
                    ? $t('project.proposal.granted.yes')
                    : $t('project.proposal.granted.no')
                }}
              </td>

              <td class="p-4 py-3 pr-4">
                <div class="flex justify-end">
                  <app-link :to="proposal.oceanProtocolPortUrl">
                    <div class="flex items-center">
                      <img
                        class="mr-1"
                        src="@/assets/images/icons/link.svg"
                        alt=""
                      />
                      <span class="text-primary">port</span>
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
import AppLink from '@/components/common/AppLink';

export default {
  name: 'ProjectSingleDaoProposalHistory',

  components: {
    AppLink,
  },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style scoped></style>