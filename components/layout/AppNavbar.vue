<template>
 <nav>
     <div class="px-1 mb-12 2sm:px-4 sm:px-16 md:px-32 mx-auto max-w-1440 flex justify-between items-center py-12">
        <NuxtLink to="/">
         <div class="flex items-center">
             <img src="@/assets/images/logo/pearl-logo.svg" alt="pearl-logo">
             <p class="pl-2 text-primary">Ocean Pearl</p>   
         </div>
        </NuxtLink>
         <div class="flex space-x-128px pr-12">
             <NuxtLink to="/project-overview">Projects</NuxtLink>
             <NuxtLink to="/job-overview">Jobs</NuxtLink>
             <NuxtLink to="/">Tracker</NuxtLink>
         </div>
         <div class="flex space-x-4"> 
           <button-with-dropdown />
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