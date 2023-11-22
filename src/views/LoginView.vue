<script setup lang="ts">
import AlertIcon from '@/components/icons/IconAlert.vue'
import { useAuthStore } from '@/stores/auth'
import {inject, ref} from 'vue'
import type { Ref } from 'vue'
import router from "@/router";
import type {IErrors, IFormLogin} from "@/types/types";
const { actionLogin } = useAuthStore()

const errors: Ref<IErrors> | undefined = inject('errors')

const form: Ref<IFormLogin> = ref({
    correo: '',
    password: ''
})

const loading: Ref<boolean> = ref(false)

const postLogin = async () => {
    loading.value = true
    const res = await actionLogin(form.value)

    loading.value = false
    if(res && res.status === 'success') {
        await router.push('/employees')
    }
}
</script>

<template>
    <div class="min-h-screen bg-white text-gray-900 flex justify-center">
        <div class="bg-white flex justify-center flex-1">
            <div class="bg-primary hidden md:block h-screen w-1/2">
                <div class="bg-gray-900 h-screen">
                    <img src="@/assets/images/login.png" alt="" class="h-2/3 object-cover w-full"/>
                    <div class="border-t-4 border-secondary h-1/3">
                        <div class="max-w-screen-sm flex ml-auto">
                            <div class="text-white pt-10 px-16">
                                <img src="@/assets/images/logo_white.svg" alt="" class="mb-6" />
                                <h2 class="font-[700] text-2xl lg:text-4xl mb-6">
                                    Dale más power ⚡ a tus empleados hoy 💪
                                </h2>
                                <p class="">Te ayudamos a gestionarlos de manera más sencilla</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/2">
                <div class="max-w-screen-md flex flex-col h-screen">
                    <div class="mx-12 lg:mx-24 flex items-center h-screen">
                        <div class="w-full">
                            <h1 class="text-2xl xl:text-3xl text-center">Iniciar sesión</h1>
                            <div class="w-full flex-1 mt-8">
                                <div class="mx-auto">
                                    <form @submit.prevent="postLogin">
                                        <div class="mb-4">
                                            <label for="email" class="block text-gray-700 text-sm mb-2"
                                            >Correo electrónico <span class="text-red-500">*</span></label
                                            >
                                            <input
                                                id="email"
                                                class="w-full px-8 py-4 rounded-lg border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-secondary focus:bg-white"
                                                v-model="form.correo"
                                                type="email"
                                                placeholder="Ingrese el correo electrónico"
                                            />
                                        </div>

                                        <div class="mb-4">
                                            <label for="password" class="block text-gray-700 text-sm mb-2"
                                            >Contraseña <span class="text-red-500">*</span></label
                                            >
                                            <input
                                                id="password"
                                                class="w-full px-8 py-4 rounded-lg border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-secondary focus:bg-white"
                                                v-model="form.password"
                                                type="password"
                                                placeholder="Ingrese la contraseña"
                                            />
                                        </div>

                                        <p v-if="errors && errors.message" class="text-red-500 flex items-center gap-2 text-sm">
                                            <AlertIcon /> {{ errors.message }}
                                        </p>

                                        <button
                                            type="submit"
                                            class="mt-5 tracking-wide bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                            :disabled="loading"
                                            :class="{'btn-loading':loading}"
                                        >
                                            Iniciar sesión
                                        </button>
                                    </form>
                                    <p class="mt-6 text-sm text-gray-500 text-center">
                                        ¿Eres nuevo aquí?
                                        <a href="#" class="text-secondary"> Crear una cuenta </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-500 text-sm text-center -mt-10">
                        © 2023 Culqi . Todos los derechos reservados
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
