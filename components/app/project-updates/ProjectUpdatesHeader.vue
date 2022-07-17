<template>
  <div>
    <h2>
      {{ $t('projectUpdates.header.title') }}
      <span class="text-primary">{{
        $t('projectUpdates.header.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('projectUpdates.header.text') }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectUpdatesHeader',
};
</script>
