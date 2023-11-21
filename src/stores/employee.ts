import { defineStore } from 'pinia'
import repository from '@/repositories'

const initialState = {
  employees: []
}

export const useEmployeeStore = defineStore('employee', {
  state: () => ({ ...initialState }),
  getters: {},
  actions: {
    async actionFetchEmployees() {
      const response = await repository().auth.getEmployees()
      if (response.status === 'success') {
        this.employees = response.data
      }
    }
  }
})

export interface Ilogin {
  correo: string
  password: string
}
