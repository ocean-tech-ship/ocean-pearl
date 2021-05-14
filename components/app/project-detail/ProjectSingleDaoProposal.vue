<template>
  <div>
    <h4 class="mt-24">DAO <span class="text-primary">proposal</span></h4>

    <div class="flex flex-col justify-between md:flex-row mt-8">
      <!-- Start Date -->
      <div class="flex justify-between md:flex-col">
        <div class="flex">
          <img
            class="mr-1"
            src="@/assets/images/icons/start-fund.svg"
            alt="funding-start"
          />

          <p class="text-primary">Start</p>
        </div>

        <p class="small-text" v-text="start" />
      </div>

      <!-- Finish Date -->
      <div class="flex justify-between md:flex-col">
        <div class="flex">
          <img
            class="mr-1"
            src="@/assets/images/icons/finish-fund.svg"
            alt="funding-finish"
          />

          <p class="text-primary">Finish</p>
        </div>

        <p class="small-text" v-text="finish" />
      </div>

      <!-- Fund Round -->
      <div class="flex justify-between md:flex-col">
        <div class="flex">
          <img
            class="mr-1"
            src="@/assets/images/icons/fund-round.svg"
            alt="funding-round"
          />

          <p class="text-primary">Fund round</p>
        </div>

        <p class="small-text" v-text="round" />
      </div>

      <!-- Fund Action -->
      <div class="mt-4">
        <AppButtonStyle
          :icon="require('@/assets/images/detail/fund-here.svg')"
          :text="$t('project_detail.fundHereButton')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppButtonStyle from '@/components/common/AppButtonStyle'

export default {
  name: 'ProjectSingleDaoProposal',

  components: {
    AppButtonStyle,
  },

  props: ['start', 'finish', 'round'],
}
</script>

<style scoped></style>
