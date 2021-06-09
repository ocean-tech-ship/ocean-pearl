<template>
  <main-dropdown>
    <template slot-scope="context">
      <img
        @click="context.toggleOpen"
        class="h-10 w-10 cursor-pointer rounded-full object-cover"
        src="@/assets/images/icons/treasure-card.svg"
        alt="treasure icon navbar"
      >
        <div
          v-if="context.open"
          class="shadow origin-top-right absolute right-0 mt-2 w-64 bg-grey border border-primary rounded overflow-hidden shadow-md"
        >
          <ul @click="context.toggleOpen">
            <li>
              <NuxtLink class="font-bold block px-4 py-3" to="/">{{ $t('navbar.navbarLinkDefault') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink class="font-bold block px-4 py-3" to="/projects">{{ $t('navbar.navbarProjects') }}</NuxtLink>
            </li>  
            <li>
              <NuxtLink class="font-bold block px-4 py-3" to="/dao-project-overview">{{ $t('navbar.navbarDao') }}</NuxtLink>
            </li>
            <li>
             <app-link to="https://github.com/oceanprotocol/oceandao/wiki/Grant-Proposal-Template">
              <div class="flex px-4 py-3 text-primary">
                <img
                  class="mr-2"
                  src="@/assets/images/icons/vote.svg"
                  :alt="$t('project.proposal.submit') + ' ' + $t('general.icon')"
                />
                <p>{{$t('project.proposal.submit')}}</p>
              </div>
             </app-link>
            </li>
          </ul>
        </div>
    </template>
  </main-dropdown>
</template>

<script>
import MainDropdown from "@/components/common/MainDropdown"
import AppButton from '@/components/common/AppButton'
import AppLink from '@/components/common/AppLink.vue'

export default {
  name: "button-with-dropdown",
  data() {
    return {
      username: "John Wick",
      email: "dontkillmydog@johnwick.com"
    };
  },
  components: { 
    MainDropdown,
    AppLink,
    AppButton
  }
};
</script>


<style scoped>

 li > a:hover {
     background: #bb2c7636;
     transition: 200ms;
 }

</style>
