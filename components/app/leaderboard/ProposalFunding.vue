<template>
  <div class="flex flex-row items-center justify-center flex-grow w-44 px-2">
    <span
      v-if="receivedFunding !== requestedFunding && receivedFunding > 0"
    >
      {{ addPunctuation(receivedFunding) }}/
    </span>
    <span>
      {{ addPunctuation(requestedFunding) }}
    </span>
    <span>
      &nbsp;{{
        $t(
          paymentOption === options.Usd
            ? 'general.types.usd'
            : 'general.types.ocean',
        )
      }}
    </span>
  </div>
</template>

<script lang="ts">
import Numbers from '@/mixins/Numbers';
import PaymentOptionEnum from '@/enums/PaymentOption.enum';

export default {
  name: 'ProposalFunding',

  mixins: [Numbers],

  props: {
    receivedFunding: {
      type: Number,
      required: true,
    },

    requestedFunding: {
      type: Number,
      required: true,
    },

    paymentOption: {
      type: String as () => PaymentOptionEnum,
      required: true,
    },
  },

  data() {
    return {
      options: PaymentOptionEnum,
    };
  },
};
</script>
