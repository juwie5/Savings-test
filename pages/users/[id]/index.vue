<template>
    <main>
        <section class="p-5 lg:px-16 lg:pt-10">
            <Navbar :single="true"></Navbar>
            <div v-if="loading">
                <Loading></Loading>
            </div>
            <div v-else class="flex flex-col lg:flex-row gap-9 py-12">
                    <div class="mb-8 w-4/5">
                        <h1 class="font-sans text-2xl mb-4">{{ user?.name }}</h1>
                        <div>
                            <div class="flex gap-6 mb-2">
                                <div class="flex items-center gap-1.5">
                                    <img src="@/assets/icons/user.svg">
                                    <p>{{ user?.username }}</p>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <img src="@/assets/icons/mail.svg">
                                    <p>{{ user?.email }}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="flex gap-6 mb-2">
                                <div class="flex items-center gap-1.5">
                                    <img src="@/assets/icons/location.svg">
                                    <p>{{ user?.address?.street }}</p>
                                </div>
                                <div class="flex items-center gap-1.5">

                                    <p>{{ user?.address?.suite }}</p>
                                    <p>{{ user?.address?.city }}</p>
                                    <p>ZipCode : {{ user?.address?.zipcode }}</p>
                                    <p>Latitude: {{ user?.address?.geo?.lat }}</p>
                                    <p>Longitude: {{ user?.address?.geo?.lng }}</p>
                                </div>
                            </div>
                            <div class="flex gap-6 mb-2">
                                <div class="flex items-center gap-1.5">
                                    <img src="@/assets/icons/phone.svg">
                                    <p>{{ user?.phone }}</p>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <img src="@/assets/icons/website.svg">
                                    <p>{{ user?.website }}</p>
                                </div>
                            
                            </div>
                            <div class="flex gap-6 mb-2">
                                <div class="flex items-center gap-1.5">
                                    <img src="@/assets/icons/organization.svg">
                                    <p>{{ user?.company?.name }}</p>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <p>{{ user?.company?.catchPhrase }}</p>
                                    <p>{{ user?.company?.bs }}</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        
    </main>
    <Footer class="fixed bottom-0 w-full" />
</template>

<script setup lang="ts">
import { useFetchUserById } from '@/composables/getUserbyId';
import { useUserStore } from '~/store/user'

const store = useUserStore();
const { fetchUser, user, loading } = useFetchUserById();

fetchUser();

store.addUserToStote(user)

</script>

<style scoped>

</style>