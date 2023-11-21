import { defineStore } from 'pinia'
import repository from '@/repositories'

const initialState = {
  user: null,
  loggedIn: false,
}

export const useAuthStore = defineStore('auth', {
  state: () => ({ ...initialState }),
  getters: {},
  actions: {
    actionLogin: async (params: Ilogin) => {
      const response = await repository().auth.postLogin(params)
      if(response.status === 'success') {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response
    },
    actionFetchEmployees: async () => {
      const response = await repository().auth.getEmployees()
      console.log('response employess => ', response)
    }
  }
})

export interface Ilogin {
  correo: string
  password: string
}
