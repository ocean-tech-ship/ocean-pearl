<template>
  <div
    :class="{
      'bg-accent text-accent-content bg-opacity-70 hover:opacity-100': isEarmark,
    }"
    class="
      rounded
      m-0.5
      p-1
      bg-primary bg-opacity-10
      small-text
      text-primary
      hover:opacity-70
      ease-in-out
      duration-300
    "
  >
    {{ beautifyTagName(tag) }}
  </div>
</template>

<script lang="ts">
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import { EarmarkTypeMap } from '@/mapper/EarmarkType.mapper';
import CategoryEnum from '@/enums/Category.enum';
import EarmarkTypeEnum from '@/enums/EarmarkType.enum';

export default {
  name: 'ProposalTag',

  props: {
    tag: {
      type: String,
      required: true,
    },

    isEarmark: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    beautifyTagName(tag: string): string {
      return (
        CategoryMap[tag as CategoryEnum] ??
        EarmarkTypeMap[tag as EarmarkTypeEnum]
      );
    },
  },
};
</script>
