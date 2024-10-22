import { axiosInstance } from "./axios.config";

export const userApiFactory = {
    getUsersList(){
        return axiosInstance.get(`/users`)
    },
    getUserById(id: string) {
        return axiosInstance.get(`/users/${id}`);
    },
}