<template>
 <nav>
   <div class="mb-32 md:mb-16 ">
     <div class="px-1 shadow md:shadow-none mb-12 2sm:px-4 sm:px-16 md:px-32 bg-secondary fixed md:relative top-0 mx-auto w-full md:max-w-1440 flex justify-between items-center py-4 md:py-12">
        <NuxtLink to="/">
         <div class="flex items-center">
             <img src="@/assets/images/pearl-logo.svg" alt="pearl-logo">
             <p class="pl-2 text-primary">{{ $t('navbar.logoText') }}</p>   
         </div>
        </NuxtLink>
         <div class="flex md:space-x-62px lg:space-x-128px hidden md:block">
             <NuxtLink to="/project-overview">{{ $t('navbar.navbarLink1') }}</NuxtLink>
             <NuxtLink to="/dao-project-overview">{{ $t('navbar.navbarLink2') }}</NuxtLink>
         </div>
         <div class="md:hidden"> 
           <button-with-dropdown />
         </div>
     </div>
     </div>
 </nav>
</template>

<script>
import ButtonWithDropdown from "@/components/common/ButtonWithDropdown";
export default {
  components: { ButtonWithDropdown }
};
</script>

<style>

</style>