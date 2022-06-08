<template>
  <div class="md:flex space-y-2 md:space-y-0">
    <blog-meta-item :icon="icons.user" :value="article.author" />
    <span class="px-3 hidden md:block">•</span>
    <blog-meta-item
      :icon="icons.calendar"
      :value="$dateFns.format(article.createdAt, 'yyyy-MM-dd')"
    />
    <span class="px-3 hidden md:block">•</span>
    <blog-meta-item :icon="icons.clock" :value="article.readDuration" />
  </div>
</template>

<script>
import calendar from '@iconify/icons-la/calendar';
import user from '@iconify/icons-la/user-edit';
import clock from '@iconify/icons-la/clock';
import BlogMetaItem from '@/components/app/blog/BlogMetaItem';

export default {
  name: 'BlogMeta',
  components: { BlogMetaItem },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        calendar,
        user,
        clock,
      },
    };
  },
};
</script>
