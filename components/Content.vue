<template>
    <section class="p-5 lg:p-16">
        <div class="w-full flex items-center justify-between">
            <h3 class="text-xl lg:text-[32px] font-mono lg:pb-8">Trending users</h3>
            <NuxtLink to="/users"
                class="flex items-center justify-between font-mono text-purple text-base">
                View all trending users <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" transform="translate(0 0.5)" fill="white"
                        style="mix-blend-mode:multiply" />
                    <path d="M5 3.5V4.5H11.295L3 12.795L3.705 13.5L12 5.205V11.5H13V3.5H5Z" fill="#432361" />
                </svg>
            </NuxtLink>
        </div>
        <div class="w-full flex flex-col justify-evenly lg:flex-row gap-6">
             <div v-for="user in trendingUsers" :key="user.id"  class="flex flex-col items-start border border-[#E0E0E0] w-full min-w-80 rounded-[10px]">
                <div class="p-6 flex flex-col">
                    <h4 class="font-mono text-base text-black">{{ user.name }}</h4>
                    <p class="font-serif text-sm mb-4 flex items-center gap-2">{{ user.email}}</p>
                        <p class="font-serif text-sm"> Street: {{ user?.address?.street }}</p>
                        <p class="font-serif text-sm">City: {{ user?.address?.city }}</p>
                    <NuxtLink :to="`/users/${user.id}`" class="flex items-center gap-1 font-mono text-purple text-sm p-2">View details <svg
                            width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="16" height="16" transform="translate(0 0.5)" fill="white"
                                style="mix-blend-mode:multiply" />
                            <path d="M5 3.5V4.5H11.295L3 12.795L3.705 13.5L12 5.205V11.5H13V3.5H5Z" fill="#432361" />
                        </svg></NuxtLink>
                </div>
            </div> 
        </div>
        <div class="w-full flex flex-col lg:flex-row items-start justify-between py-8 lg:py-32">
            <div class="w-full lg:w-2/5 my-4">
                <h3 class="text-[32px] font-mono mb-6">Discover a World of Users Tailored Just for You.</h3>
                <NuxtLink to="/users" class="py-2.5 px-6 bg-purple-2 text-white font-mono rounded-[10px] mb-2 lg:mb-0">View all users</NuxtLink>
            </div>
            <div class="flex flex-wrap gap-6 w-full">
                <div class="relative text-white text-center">
                    <img src="../assets/images/online-event.png" alt="online-event">
                    <div class="absolute top-1/2 left-1/2 adjust text-2xl font-mono">Online Users</div>
                </div>
                <div class="relative text-white text-center">
                    <img src="../assets/images/physical-event.png" alt="physical-event">
                    <div class="absolute top-1/2 left-1/2 adjust text-2xl font-mono">Physical Users</div>
                </div>
                <div class="relative text-white text-center">
                    <img src="../assets/images/hybrid-event.png" alt="hybrid-event">
                    <div class="absolute top-1/2 left-1/2 adjust text-2xl font-mono">Hybrid Users</div>
                </div>    
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

import { useFetchUsers } from '@/composables/fetchUser';

const { fetchUsers, usersList, loading } = useFetchUsers();

fetchUsers();

const trendingUsers = computed(() => {
   return usersList.value.slice(0,3)
});



// onMounted(() => {
//     fetchEvents();
// })

</script>

<style scoped>
 .adjust{
    transform: translate(-50%, -50%);
 }
</style>