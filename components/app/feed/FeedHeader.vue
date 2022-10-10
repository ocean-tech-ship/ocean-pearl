<template>
  <div>
    <h2>
      {{ $t('feed.header.title') }}
      <span class="text-primary">{{ $t('feed.header.titleHighlight') }}</span>
    </h2>
    <p>{{ $t('feed.header.text') }}</p>
  </div>
</template>

<script>
export default {
  name: 'FeedHeader',
};
</script>
