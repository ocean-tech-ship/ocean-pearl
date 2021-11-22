<template>
  <div
    :class="{ 'text-white': primary }"
    class="flex items-center text-primary font-bold text-center"
  >
    <div
      :class="{ 'w-2/5': !primary, 'w-1/2': primary }"
      class="pl-20 text-left"
    >
      {{ $t('leaderboard.proposal.header.name') }}
    </div>

    <div class="w-48 flex-grow">
      {{ $t('leaderboard.proposal.header.votes') }}
    </div>

    <div v-if="!primary" class="w-28 flex-grow">
      {{ $t('leaderboard.proposal.header.needed') }}
    </div>

    <div class="w-28 flex-grow">
      {{ $t('leaderboard.proposal.header.funding') }}
    </div>

    <div class="w-14 flex-grow">
      {{ $t('leaderboard.proposal.header.completed') }}
    </div>
  </div>

  <!--
  <div
    :class="{ 'text-white': primary }"
    class="flex items-center text-primary font-bold w-full"
  >
    <div class="w-1/2 border border-primary">
      {{ $t('leaderboard.proposal.header.name') }}
    </div>

    <div class="w-1/4 border border-primary">
      {{ $t('leaderboard.proposal.header.votes') }}
    </div>

    <div v-if="!primary" class="col-span-2 border border-primary">
      {{ $t('leaderboard.proposal.header.needed') }}
    </div>

    <div class="w-1/5 border border-primary">
      {{ $t('leaderboard.proposal.header.funding') }}
    </div>

    <div class="flex-grow border border-primary">
      {{ $t('leaderboard.proposal.header.completed') }}
    </div>
  </div>
  -->

  <!--
  <div
    :class="{ 'text-white': primary }"
    class="flex items-center text-primary font-bold"
  >
    <div
      :class="{
        'w-1/2': primary,
        'w-2/5': !primary,
      }"
      class="pl-20"
    >
      <div>{{ $t('leaderboard.proposal.header.name') }}</div>
    </div>

    <div class="text-center px-2 xl:px-5">
      <div class="w-48">{{ $t('leaderboard.proposal.header.votes') }}</div>
    </div>

    <div v-if="!primary" class="px-2 xl:px-5 text-center break-all">
      <div class="w-1/6">{{ $t('leaderboard.proposal.header.needed') }}</div>
    </div>

    <div class="flex-grow text-center px-2 xl:px-5 text-center break-all">
      <div class="w-28">{{ $t('leaderboard.proposal.header.funding') }}</div>
    </div>

    <div class="flex-grow text-center break-all px-2 xl:px-5">
      <div>{{ $t('leaderboard.proposal.header.completed') }}</div>
    </div>
  </div>
  -->
</template>

<script>
export default {
  name: 'ProposalHeader',

  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
