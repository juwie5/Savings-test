import { userApiFactory } from "@/apiFactory/users";
import { ref } from "vue";
import { useNuxtApp } from "#app";

export const useFetchUsers = () => {
    const usersList = ref([]) as any;
    const loading = ref(false);
 
    const fetchUsers = async () => {
      loading.value = true;
      try {
        const response = await userApiFactory.getUsersList();
        usersList.value = response.data;
      } catch (error: any) {
        useNuxtApp().$toast.error(error.message, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
        return error;
      } finally {
        loading.value = false;
      }
    };

    return {
      fetchUsers,
      usersList,
      loading
    };
  };
  