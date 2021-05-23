<template>
  <div class="flex items-center flex-wrap">
    <div class="flex items-center">
      <img
        class="h-16px w-16px mr-2"
        src="@/assets/images/detail/member.svg"
        :alt="$t('project.team') + ' ' + $t('general.icon')"
      />

      <span class="small-text">
        {{ member.name + ', ' + member.purpose }}
      </span>
    </div>

    <div class="flex">
      <span
        v-for="social in member.socials"
        :key="social.type"
        class="small-text"
      >
        &nbsp;(<a
          class="text-primary small-text"
          :href="social.url"
          target="_blank"
          >{{ social.type }}</a
        >)
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectSingleDetailsMember',

  props: {
    member: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
