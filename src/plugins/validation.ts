import { useValidationStore } from '@/stores/validation'
import {storeToRefs} from "pinia";
export default {
    install: (app: any) => {
        const { getErrors } = storeToRefs(useValidationStore())
        app.provide('errors', getErrors)
    }
}
