<template>
  <div class="flex flex-col items-center justify-center flex-grow w-44 px-2">
    <div class="flex flex-row items-center justify-center">
      <span v-if="receivedFunding !== requestedFunding && receivedFunding > 0">
        {{ addPunctuation(receivedFunding) }}/
      </span>
      {{ addPunctuation(requestedFunding) }}&nbsp;{{
        $t(
          paymentOption === options.Usd
            ? 'general.types.usd'
            : 'general.types.ocean',
        )
      }}
    </div>
    <div>
      min: {{ addPunctuation(minimumRequestedFunding) }}&nbsp;{{
        $t(
          paymentOption === options.Usd
            ? 'general.types.usd'
            : 'general.types.ocean',
        )
      }}
    </div>
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

    minimumRequestedFunding: {
      type: Number,
      required: true,
      default: 0,
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
