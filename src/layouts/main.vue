<script setup lang="ts">
    import BriefcaseIcon from '@/components/icons/IconBriefcase.vue'
    import UsersIcon from '@/components/icons/IconUsers.vue'
    import { useAuthStore } from '@/stores/auth'
    import router from "@/router";
    import {storeToRefs} from "pinia";
    const { REMOVE_TOKEN } = useAuthStore()
    const { user, getInitials } = storeToRefs(useAuthStore())

    const logout = async () => {
        await REMOVE_TOKEN()
        await router.push('/')
    }
</script>

<template>
    <aside class="ml-[-100%] fixed z-20 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen shadow transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] bg-white">
        <div>
            <div class="-mx-6 px-6 py-4">
                <a href="#" title="home">
                    <img src="@/assets/images/logo_black.svg" class="w-32 mx-auto" alt="Culqi logo">
                </a>
            </div>

            <ul class="space-y-2 tracking-wide mt-8">
                <li>
                    <router-link to="/employees" class="flex items-center gap-2 text-primary py-2.5 my-4 rounded transition duration-200 hover:text-secondary group" :class="router.currentRoute.value.name === 'employees' ? 'text-secondary' : ''">
                        <UsersIcon :fillClass="`group-hover:fill-secondary ${router.currentRoute.value.name === 'employees' ? 'fill-secondary' : 'fill-primary'}`"/>
                        Empleados
                    </router-link>
                </li>
                <li>
                    <router-link to="/recruitment" class="group flex items-center gap-2 text-primary py-2.5 my-4 rounded transition duration-200 hover:text-secondary" :class="router.currentRoute.value.name === 'recruitment' ? 'text-secondary' : ''">
                        <BriefcaseIcon :fillClass="`group-hover:fill-secondary ${router.currentRoute.value.name === 'recruitment' ? 'fill-secondary' : 'fill-primary'}`"/>
                        Reclutamiento
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="pt-4">
            <button class="block w-full px-4 py-2.5 border rounded-md text-gray-600 transition duration-200 hover:bg-black hover:text-white" @click.prevent="logout">
                Salir
            </button>
        </div>
    </aside>
    <div class="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-gray-50">
        <div class="sticky z-10 top-0 h-16 shadow bg-white lg:py-2.5 flex items-center">
            <div class="px-6 flex items-center justify-between w-full">&nbsp;
                <button class="w-12 h-16 -mr-2 border-r lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div class="flex space-x-4">
                    <a href="#" class="flex items-center gap-2">
                        <span class="flex items-center justify-center text-xs bg-orange rounded-full w-8 h-8 text-white p-1">
                            {{getInitials}}
                        </span>
                        {{ user.nombre }}
                    </a>
                </div>
            </div>
        </div>

        <div class="p-6">
            <slot></slot>
        </div>
    </div>
</template>
