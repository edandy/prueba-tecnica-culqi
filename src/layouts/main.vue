<template>
    <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen shadow transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
            <div class="-mx-6 px-6 py-4">
                <a href="#" title="home">
                    <img src="@/assets/images/logo_black.svg" class="w-32 mx-auto" alt="Culqi logo">
                </a>
            </div>

            <ul class="space-y-2 tracking-wide mt-8">
                <li>
                    <a class="flex items-center gap-2 text-primary py-2.5 my-4 rounded transition duration-200 hover:text-secondary" href="#">
                        <UsersIcon />
                        Empleados
                    </a>
                </li>
                <li>
                    <a class="flex items-center gap-2 text-[#111827] py-2.5 my-4 rounded transition duration-200 hover:text-secondary" href="#">
                        <BriefcaseIcon />
                        Reclutamiento
                    </a>
                </li>
            </ul>
        </div>

        <div class="pt-4">
            <button class="block w-full px-4 py-2.5 border rounded-md text-gray-600 transition duration-200 hover:bg-black hover:text-white">
                Salir
            </button>
        </div>
    </aside>
    <div class="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-gray-50">
        <div class="sticky z-5 top-0 h-16 shadow bg-white lg:py-2.5">
            <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                &nbsp;
                <button class="w-12 h-16 -mr-2 border-r lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div class="flex space-x-4">
                    <a href="#" class="flex items-center gap-2">
                        <span class="flex items-center justify-center text-xs bg-orange rounded-full w-8 h-8 text-white p-1">CQ</span>
                        Chistian Quispe
                    </a>
                </div>
            </div>
        </div>

        <div class="p-6 2xl:container min-h-screenxxx">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
    import BriefcaseIcon from '@/components/icons/IconBriefcase.vue'
    import UsersIcon from '@/components/icons/IconUsers.vue'
</script>
