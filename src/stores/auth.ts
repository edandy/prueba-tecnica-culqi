import { defineStore } from 'pinia'
import repository from '@/repositories'
import type {IAuth, IFormLogin} from "@/types/types";

const userStorage = localStorage.getItem('user')

export const useAuthStore = defineStore('auth', {
  state: (): IAuth => ({
    user: userStorage ? JSON.parse(userStorage) : '',
    loggedIn: false
  }),

  getters: {
    getUser: (state) => {
      return state.user
    },
    getInitials: (state) => {
      return state.user.nombre
          .split(' ')
          .map(word => word.charAt(0))
          .join('');
    },
  },

  actions: {
    async actionLogin(params: IFormLogin) {
      const response = await repository().auth.postLogin(params)
      if (response && response.status === 'success') {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        this.loggedIn = true
        this.user = response.data.user
      }
      return response
    },

    REMOVE_TOKEN() {
      localStorage.clear();
    },
  },
})
