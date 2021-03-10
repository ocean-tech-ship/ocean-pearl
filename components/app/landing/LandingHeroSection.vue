<template>
    <LandingSectionContainer>
        <span>Test</span>
        <AppButton />
    </LandingSectionContainer>
</template>

<script>
import AppButton from "@/components/common/AppButton.vue";
import LandingSectionContainer from "./LandingSectionContainer";

export default {
  name: "LandingHeroSection",

  components: {
    AppButton,
    LandingSectionContainer
  },
};
</script>

<style scoped></style>
