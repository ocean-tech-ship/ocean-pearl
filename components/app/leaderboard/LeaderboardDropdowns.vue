<template>
  <div>
    <button-emit-with-dropdown
      button-name="Select Round"
      class="rounded w-36 mt-10 bg-base-200 border-base-200"
      button-style="text-base-content"
      label-style="-m-3 text-primary-content"
      :menu-items="roundItems"
      @selected="setItems"
    />
  </div>
</template>

<script>
import ButtonEmitWithDropdown from '@/components/common/ButtonEmitWithDropdown.vue';

export default {
  name: 'LeaderboardDropdowns',

  components: {
    ButtonEmitWithDropdown,
  },
  props: {
    rounds: {
      type: Number,
      required: true,
    },
    filter: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      watching: false,
      roundItems: [
        {
          type: 'rounds',
          content: `Current`,
          id: 0,
          selected: this.filter.round === 0,
        },
      ],
      categoryItems: [],
    };
  },
  watch: {
    $data: {
      deep: true,
      handler: function emit() {
        if (this.watching) {
          const selectedItems = Object.values(
            this.roundItems.reduce((accumulator, current) => {
              if (current.selected) accumulator.push(current.id);
              return accumulator;
            }, []),
          );

          this.$emit('selected-items', {
            round: selectedItems[0],
          });
        }
      },
    },
  },
  created() {
    // set rounds button content
    for (let i = this.rounds - 1; i >= 6; i--) {
      this.roundItems = [
        ...this.roundItems,
        {
          type: 'rounds',
          content: `Round ${i}`,
          id: i,
          selected: this.filter.round === i,
        },
      ];
    }
  },
  methods: {
    setItems(payload) {
      this.watching = true;

      const { type, id } = payload;

      switch (type) {
        case 'rounds':
          this.roundItems.forEach(
            // eslint-disable-next-line no-param-reassign
            (roundItem) => (roundItem.selected = roundItem.id === id),
          );
          break;
        default:
      }
    },
  },
};
</script>
