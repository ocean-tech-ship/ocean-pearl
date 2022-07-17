<template>
  <div class="shadow bg-base-200 rounded p-8 h-275px">
    <div class="animate-pulse w-full h-full flex flex-col justify-between">
      <div
        v-for="h in headlines"
        :key="h.id"
        :class="`${h.w} ${h.mt} h-4 rounded bg-primary opacity-70`"
      />
      <div class="mt-8 w-full flex flex-col">
        <div
          v-for="p in paragraphs"
          :key="p.id"
          :class="`${p.w} ${p.mt}  h-3 rounded bg-primary opacity-70`"
        />
      </div>
      <div class="flex gap-2 mt-6">
        <div class="w-[34px] h-[34px] rounded bg-primary opacity-70" />
        <div class="flex-grow flex flex-col">
          <div
            v-for="s in stats"
            :key="s.id"
            :class="`${s.w} ${s.mt} h-3 rounded bg-primary opacity-70`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProjectUpdatesSkeletonCard',

  data() {
    return {
      headlines: [
        { id: 0, w: 'w-5/6', mt: '' },
        { id: 1, w: 'w-3/5', mt: 'mt-3' },
      ],
      paragraphs: [
        { id: 0, w: 'w-5/6', mt: 'mt-1' },
        { id: 1, w: 'w-5/6', mt: 'mt-3' },
        { id: 2, w: 'w-4/6', mt: 'mt-3' },
      ],
      stats: [
        { id: 0, w: 'w-2/3', mt: '' },
        { id: 1, w: 'w-2/5', mt: 'mt-2' },
      ],
    };
  },
};
</script>
