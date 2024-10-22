<template>
  <nav class="hidden lg:block  py-4 px-6 mx-auto rounded-[20px]"
        :class="[!single ? 'bg-[#FFFFFF99]': '']" >
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink to="/">
            <img src="../assets/images/logo.svg" alt="">
          </NuxtLink>
         
        </div>
        <div class="flex items-center justify-center gap-6">
          <NuxtLink to="/users" class="text-purple font-sans text-base">Discover users</NuxtLink>
          <NuxtLink to="" class="text-purple font-sans text-base">About us</NuxtLink>
          <NuxtLink to="" class="text-purple font-sans  text-base">FAQs</NuxtLink>
          <NuxtLink  to="" class="text-purple font-sans text-base">Contact us</NuxtLink>
        </div>
        <div class="flex items-center gap-6">
          <NuxtLink to="" class="text-purple font-sans  text-base">Login</NuxtLink>
          <NuxtLink to="" class="py-3 px-8 bg-purple-2 text-white font-sans  rounded-[10px]">Sign up</NuxtLink>
        </div>
      </div>
  </nav>
  <nav class="lg:hidden w-full mx-auto rounded-[20px] p-3"
         :class="[!single ? 'bg-[#FFFFFF99]': '']"> 
    <div class="flex items-center justify-between">
        <div class="w-full flex items-center justify-between">
          <NuxtLink to="/">
            <img src="../assets/images/logo.svg" alt="">
          </NuxtLink>
          <img @click="showMobileNav" src="../assets/icons/hambuger.svg">
        </div>  
    </div>
    <div class="flex flex-col" v-if="show">
           <div class="flex flex-col items-center justify-center gap-6">
              <NuxtLink to="/users" class="text-purple font-sans text-base">Discover Users</NuxtLink>
              <NuxtLink to="/" class="text-purple font-sans text-base">About us</NuxtLink>
              <NuxtLink to="/" class="text-purple font-sans  text-base">FAQs</NuxtLink>
              <NuxtLink  to="/" class="text-purple font-sans text-base">Contact us</NuxtLink>
           </div>
            <div class="flex flex-col items-center gap-6">
              <NuxtLink to="/" class="text-purple font-sans  text-base">Login</NuxtLink>
              <NuxtLink to="/" class="py-3 px-8 bg-purple-2 text-white font-sans  rounded-[10px]">Sign up</NuxtLink>
            </div> 
        </div>
  </nav>
</template>

<script setup lang="ts">

defineProps({
  single: Boolean
});

let show = ref(false);

const showMobileNav = () => {
  show.value = !show.value;
};

</script>

<style  scoped>

 a.router-link-exact-active {
    border-bottom: 2.5px solid #432361;
    padding-bottom: 3px;
}

</style>
