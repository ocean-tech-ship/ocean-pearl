<template>
  <div class="flex flex-wrap text-primary">
    <div class="flex border py-1 px-2 mr-1 mt-1">
      <img
        class="mr-1 p-1"
        src="@/assets/images/icons/dropdown.svg"
        alt="dropdown"
      />
      <p class="small-text pr-2">{{ $t('projects.status.dropDown1') }}</p>
    </div>
    <div class="flex border py-1 px-2 mt-1 lg:hidden">
      <img
        class="mr-1 p-1"
        src="@/assets/images/icons/dropdown.svg"
        alt="dropdown"
      />
      <p class="small-text">{{ $t('projects.status.dropDown2') }}</p>
    </div>
  </div>
</template>

<script>
import CategoryEnum from '../../../enums/Category.enum';

export default {
  data() {
    return {
      CategoryEnumMap: {
        [CategoryEnum.Other]: 'Other',
        [CategoryEnum.BuildAndIntegrate]: 'Build & Integrate',
        [CategoryEnum.CoreSoftware]: 'Core Software',
        [CategoryEnum.DAO]: 'DAO',
        [CategoryEnum.NewEntrants]: 'New Entrants',
        [CategoryEnum.Outreach]: 'Outreach',
        [CategoryEnum.UnleashData]: 'Unleach Date',
      },
    };
  },
};
</script>

<style></style>
