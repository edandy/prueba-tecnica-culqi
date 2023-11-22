import { defineStore } from 'pinia'
import repository from '@/repositories'
import type {IQuery} from "@/types/types";

const initialState = {
  employees: [],
  total: 0
}

export const useEmployeeStore = defineStore('employee', {
  state: () => ({ ...initialState }),
  getters: {},
  actions: {
    async actionFetchEmployees(query: IQuery) {
      const response = await repository().employee.getEmployees(query)
      if (response.status === 'success') {
        this.employees = response.data
        this.total = response.total
      }
    }
  }
})
