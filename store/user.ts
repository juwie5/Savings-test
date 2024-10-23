import { defineStore } from 'pinia';
import type { IUser } from '~/type/user';

export const useUserStore = defineStore('user', {
    state : () => ({
        user : <IUser[]>[]
    }),
    actions:{
        addUserToStote(user:any){
            this.user.push(user)
        }
    }
})