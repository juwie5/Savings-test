<template>
 <main>
    <section class="p-5 lg:px-16 lg:pt-10">
      <Navbar :single="true"></Navbar>
      <h3 class="text-xl lg:text-[32px]font-mono my-5">All Users</h3>
      <div>
        <div v-if="usersList.length === 0 && !loading">
          <h1>Opps no events were found. Try again</h1>
        </div>
        <div v-else class="grid grid-cols-1 lg:grid-cols-4 gap-3 my-5">
          <div v-for="user in usersList" :key="user.id"
            class="flex flex-col items-start border border-[#E0E0E0] w-fit rounded-[10px]">
            <div class="w-full min-w-80 p-6 flex flex-col">
              <h4 class="font-mono text-base text-black">{{ user.name }}</h4>
              <p class="font-serif text-sm mb-4 flex items-center gap-2">{{ user.email }}</p> 
              <p class="font-serif text-sm"> Street: {{ user?.address?.street }}</p>
              <p class="font-serif text-sm">City: {{ user?.address?.city }}</p>
              <RouterLink :to="`/users/${user.id}`" class="flex items-center gap-1 font-mono text-purple text-sm p-2">
                View details <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="16" transform="translate(0 0.5)" fill="white"
                    style="mix-blend-mode:multiply" />
                  <path d="M5 3.5V4.5H11.295L3 12.795L3.705 13.5L12 5.205V11.5H13V3.5H5Z" fill="#432361" />
                </svg></RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { useFetchUsers } from '@/composables/fetchUser';

const { fetchUsers, usersList, loading } = useFetchUsers();

fetchUsers();

</script>

<style scoped></style>
