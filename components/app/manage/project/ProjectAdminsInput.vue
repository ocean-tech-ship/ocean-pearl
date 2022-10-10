<template>
  <div
    class="rounded shadow p-4 bg-base-200 flex items-center justify-between gap-4"
  >
    <div class="w-6 h-6">
      <jazzicon
        v-if="address.length > 0"
        class="flex items-center"
        :diameter="24"
        :address="address"
      />

      <div v-else class="rounded-full w-6 h-6 bg-base-100"></div>
    </div>

    <input
      v-model="address"
      :placeholder="$t('manage.admins.add')"
      type="text"
      class="input flex-1"
    />

    <button
      type="button"
      class="btn btn-primary"
      :class="{ 'btn-disabled': !isValidInput }"
      @click="addAddress()"
    >
      {{ $t('general.add') }}
    </button>
  </div>
</template>

<script>
import Jazzicon from 'vue-jazzicon';
import AddressFormatter from '@/mixins/AddressFormatter';

export default {
  name: 'ProjectAdminsInput',

  components: {
    Jazzicon,
  },

  mixins: [AddressFormatter],

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      address: '',
    };
  },

  computed: {
    isValidInput() {
      return (
        this.isValidAddress(this.address) &&
        !this.project.accessAddresses.includes(this.address)
      );
    },
  },

  watch: {
    address(val) {
      if (!this.isValidAddress(val)) return;
      const formattedAddress = this.formatAddress(val);
      if (val !== formattedAddress) {
        this.address = formattedAddress;
      }
    },
  },

  methods: {
    addAddress() {
      this.$emit('add', this.address);
      this.address = '';
    },
  },
};
</script>
