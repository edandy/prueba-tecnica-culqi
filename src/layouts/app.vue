<template>
    <div class="flex flex-col h-screen bg-gray-100">
        <div class="bg-white text-whitexx shadow w-full p-2 flex items-center justify-between">

            <div class="flex items-center">
                <div class="hidden md:flex items-center"> <!-- Se oculta en dispositivos pequeños -->
                    <img src="@/assets/images/logo_black.svg" alt="Logo" class="w-28 h-18 mr-2">
                </div>
                <div class="md:hidden flex items-center"> <!-- Se muestra solo en dispositivos pequeños -->
                    <button id="menuBtn">ss
                        <font-awesome-icon icon="fa fa-bars" class="text-gray-500 text-lg"></font-awesome-icon> <!-- Ícono de menú -->
                    </button>
                </div>
            </div>

            <!-- Ícono de Notificación y Perfil -->
            <div class="space-x-5">
                <button>x
                    <font-awesome-icon icon="fa-solid fa-bell" class="text-gray-500 text-lg" />
                </button>
                <!-- Botón de Perfil -->
                <button>y
                    <font-awesome-icon icon="fa-solid fa-user-group" class="text-gray-500 text-lg" />
                </button>
            </div>
        </div>

        <!-- Contenido principal -->
        <div class="flex-1 flex">
            <!-- Barra lateral de navegación (oculta en dispositivos pequeños) -->
            <div class="p-2 bg-white w-60 flex shadow flex-col hidden md:flex" id="sideNav">
                <nav>
                    <a class="flex items-center gap-2 text-[#111827] py-2.5 px-4 my-4 rounded transition duration-200 hover:text-[#00A19B]" href="#">
                        <UsersIcon />
                        Empleados
                    </a>
                    <a class="flex items-center gap-2 text-[#111827] py-2.5 px-4 my-4 rounded transition duration-200 hover:text-[#00A19B]" href="#">
                        <BriefcaseIcon />
                        Reclutamiento
                    </a>
                </nav>

                <div class="px-4 mt-auto">
                    <a class="block text-center text-black py-2.5 px-4 my-2 border rounded transition duration-200 hover:bg-black hover:text-white" href="#">
                        Salir
                    </a>
                </div>
            </div>


            <div class="flex-1 p-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-2">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import BriefcaseIcon from '@/components/icons/IconBriefcase.vue'
    import UsersIcon from '@/components/icons/IconUsers.vue'
</script>
