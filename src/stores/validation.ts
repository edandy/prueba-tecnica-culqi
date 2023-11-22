import { defineStore } from 'pinia'
import type {IErrors} from "@/types/types";

const initialState: IErrors = {
  errors: ''
}

export const useValidationStore = defineStore('validation',
  {
    state: (): IErrors => ({...initialState}),
    getters: {
      getErrors: (state) => {
        return state.errors
      },
    },
    actions: {
      setErrors(params: any) {
        this.errors = params
      },
    },
  })
