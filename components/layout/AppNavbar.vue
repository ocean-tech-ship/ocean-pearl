<template>
 <nav>
   <div class="mb-32 md:mb-16 ">
     <div class="px-1 shadow md:shadow-none mb-12 2sm:px-4 sm:px-16 md:px-32 bg-secondary fixed md:relative top-0 mx-auto w-full md:max-w-1440 flex justify-between items-center py-4 md:py-12">
        <NuxtLink to="/">
         <div class="flex items-center">
             <img src="@/assets/images/pearl-logo.svg" alt="pearl-logo">
             <p class="xs:block md:hidden xl:block pl-2 text-primary">{{ $t('navbar.logoText') }}</p>
         </div>
        </NuxtLink>
         <div class="flex md:space-x-62px lg:space-x-128px hidden md:block">
             <NuxtLink to="/projects">{{ $t('navbar.navbarProjects') }}</NuxtLink>
             <NuxtLink to="/dao-project-overview">{{ $t('navbar.navbarDao') }}</NuxtLink>
             <app-link to="https://github.com/oceanprotocol/oceandao/wiki/Grant-Proposal-Template">
                <app-button-style
                  class="text-center"
                  :icon="require('@/assets/images/icons/vote-white.svg')"
                  :text="$t('project.proposal.submit')"
                />
             </app-link>
         </div>
         <div class="md:hidden">
           <button-with-dropdown />
         </div>
     </div>
     </div>
 </nav>
</template>

<script>
import ButtonWithDropdown from "@/components/common/ButtonWithDropdown"
import AppButtonStyle from '@/components/common/AppButtonStyle'
import AppLink from '@/components/common/AppLink.vue'

export default {
  components:
  {
    ButtonWithDropdown,
    AppButtonStyle,
    AppLink
   }
};
</script>

<style>

</style>
