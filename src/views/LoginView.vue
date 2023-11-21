<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import router from "@/router";
const { actionLogin } = useAuthStore()

const form = ref({
  correo: '',
  password: ''
})
const postLogin = async () => {
    const res = await actionLogin(form.value)

    if(res.status === 'success') {
        router.push('/employees')
    }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div class="max-w-screen-2xl bg-white shadow flex justify-center flex-1">
      <div class="lg:w-1/2 sm:p-12">
        <div class="mx-12 flex flex-col__x items-center min-h-full">
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
                      class="w-full px-8 py-4 rounded-lg border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green-500 focus:bg-white"
                      v-model="form.correo"
                      type="email"
                      placeholder="Ingrese el correo electrónico"
                    />
                  </div>

                  <div class="mb-4">
                    <label for="password" class="block text-gray-700 text-sm mb-2"
                      >Correo electrónico <span class="text-red-500">*</span></label
                    >
                    <input
                      id="password"
                      class="w-full px-8 py-4 rounded-lg border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green-500 focus:bg-white"
                      v-model="form.password"
                      type="password"
                      placeholder="Ingrese la contraseña"
                    />
                  </div>
                  <button
                    type="submit"
                    class="mt-5 tracking-wide bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    Iniciar sesión
                  </button>
                </form>
                <p class="mt-6 text-sm text-gray-500 text-center">
                  ¿Eres nuevo aquí?
                  <a href="#" class="text-green-500"> Crear una cuenta </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p class="text-gray-500 text-sm text-center">
          © 2023 Culqi . Todos los derechos reservados
        </p>
      </div>
      <div class="flex-1 bg-indigo-100 hidden lg:flex">
        <div class="bg-gray-900">
          <img src="@/assets/images/login.png" alt="" />
          <div class="border-t-4 border-green-500 text-white pt-10 px-16">
            <img src="@/assets/images/logo_white.svg" alt="" class="mb-6" />
            <h2 class="font-[700] text-4xl mb-6">
              Dale más power ⚡ a tus <br />
              empleados hoy 💪
            </h2>
            <p class="">Te ayudamos a gestionarlos de manera más sencilla</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
