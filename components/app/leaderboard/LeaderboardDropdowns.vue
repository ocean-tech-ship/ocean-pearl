<template>
  <div>
    <app-form-control class="mt-3 w-40">
      <template #label>
        <span class="label-text text-neutral-content">Select Round</span>
      </template>
      <app-dropdown
        :btn-text="btnText"
        btn-class="justify-start bg-base-200 hover:bg-base-300 btn-block border-0 text-base-content"
        :icon="icons.caretDown"
        :icon-active="icons.caretUp"
      >
        <app-dropdown-menu class="mb-1 h-60 overflow-y-auto">
          <li v-for="roundItem in roundItems" :key="roundItem.id">
            <app-button
              class="btn-ghost"
              :name="roundItem.content"
              :value="roundItem.id"
              :active="roundItem.selected"
              @click="
                setItems({
                  type: 'rounds',
                  id: roundItem.id,
                  content: roundItem.content,
                })
              "
            >
              <span class="text-left w-full">{{ roundItem.content }}</span>
            </app-button>
          </li>
        </app-dropdown-menu>
      </app-dropdown>
    </app-form-control>
  </div>
</template>

<script>
import caretDown from '@iconify/icons-la/caret-down';
import caretUp from '@iconify/icons-la/caret-up';
import AppDropdown from '@/components/common/AppDropdown';
import AppDropdownMenu from '@/components/common/AppDropdownMenu';
import AppButton from '@/components/common/AppButton';
import AppFormControl from '@/components/common/AppFormControl';
import ButtonEmitWithDropdown from '@/components/common/ButtonEmitWithDropdown.vue';

export default {
  name: 'LeaderboardDropdowns',

  components: {
    ButtonEmitWithDropdown,
    AppFormControl,
    AppButton,
    AppDropdownMenu,
    AppDropdown,
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
      btnText: 'Current',
      roundItems: [
        {
          type: 'rounds',
          content: `Current`,
          id: 0,
          selected: this.filter.round === 0,
        },
      ],
      icons: {
        caretDown,
        caretUp,
      },
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

      if (this.filter.round === i) {
        this.btnText = `Round ${i}`;
      }
    }
  },

  methods: {
    setItems(payload) {
      this.watching = true;

      const { type, id, content } = payload;

      switch (type) {
        case 'rounds':
          this.roundItems.forEach(
            // eslint-disable-next-line no-param-reassign
            (roundItem) => (roundItem.selected = roundItem.id === id),
          );
          this.btnText = content;
          break;
        default:
      }
    },
  },
};
</script>
