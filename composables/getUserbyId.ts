import { userApiFactory } from "@/apiFactory/users";
import { ref } from "vue";

export const useFetchUserById = () => {
    const user = ref([]) as any;
    const userId = useRoute().params.id as string;
    const loading = ref(false);
    const fetchUser = async () => {
      loading.value = true;
      try {
        const response = await userApiFactory.getUserById(userId);
        user.value = response.data;
      } catch (error: any) {
        let message = "this user not found please try again"
        useNuxtApp().$toast.error(message, {
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
  