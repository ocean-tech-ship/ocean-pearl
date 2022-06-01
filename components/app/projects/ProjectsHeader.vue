<template>
  <LandingSectionContainer>
    <h2>
      {{ $t('projects.header.title') }}
      <span class="text-primary">{{
        $t('projects.header.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('projects.header.text') }}</p>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '../landing/LandingSectionContainer';

export default {
  name: 'ProjectsHeader',

  components: {
    LandingSectionContainer,
  },
};
</script>
