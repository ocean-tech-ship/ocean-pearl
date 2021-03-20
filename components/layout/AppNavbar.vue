<template>
 <nav>
     <div class="px-20 sm:px-30 mx-auto max-w-1440 flex justify-between items-center py-12">
         <div class="flex items-center">
             <img src="@/assets/images/logo/pearl-logo.png" alt="pearl-logo">
             <p class="pl-2 text-primary">Ocean Pearl</p>
         </div>
         <div class="flex space-x-12 pr-12">
             <NuxtLink class="px-8" to="/">Projects</NuxtLink>
             <NuxtLink class="px-8" to="/">Tracker</NuxtLink>
             <NuxtLink class="px-8" to="/">Jobs</NuxtLink>
         </div>
         <div class="flex space-x-4">
           <NuxtLink to="/">
            <img src="@/assets/images/icons/icons8-plus.png" alt="pearl-plus">
           </NuxtLink>
           <NuxtLink to="/">
             <img src="@/assets/images/icons/icons8-search.png" alt="pearl-search">
           </NuxtLink>  
         </div>
     </div>
 </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>