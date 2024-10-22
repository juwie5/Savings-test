import { userApiFactory } from "@/apiFactory/users";
import { ref } from "vue";


//cache user to store

export const useFetchUserById = () => {
    const user = ref([]) as any;
    const userId = useRoute().params.id as string;
    const loading = ref(false);
    const fetchUser = async () => {
      loading.value = true;
      try {
        const response = await userApiFactory.getUserById(userId);
        user.value = response.data;
        console.log(user.value)
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
  
    return { fetchUser, user, loading };
  };
  