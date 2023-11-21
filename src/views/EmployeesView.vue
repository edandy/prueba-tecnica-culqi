<script setup lang="ts">
    import layout from '../layouts/main.vue'
    import skeleton from '@/components/skeleton.vue'
    import ViewIcon from '@/components/icons/IconView.vue'
    import EditIcon from '@/components/icons/IconEdit.vue'
    import DeleteIcon from '@/components/icons/IconDelete.vue'
    import SearchIcon from '@/components/icons/IconSearch.vue'
    import PlusIcon from '@/components/icons/IconPlus.vue'
    import DownloadIcon from '@/components/icons/IconDownload.vue'
    import {storeToRefs} from "pinia";
    import {onMounted, ref} from "vue";
    import { useEmployeeStore } from '@/stores/employee'
    const { actionFetchEmployees } = useEmployeeStore()
    const { employees } = storeToRefs(useEmployeeStore())

    const loading = ref(true)

    onMounted(async () => {
        await actionFetchEmployees()
        loading.value = false
    })
</script>

<template>
    <layout>
        <skeleton v-if="loading" />

        <div v-else class="bg-white p-4 rounded-lg">
            <div class="flex items-center justify-between mb-4 text-sm">
                <div class="">
                    <h2 class="text-lg font-semibold mb-0">Empleados</h2>
                    <p class="text-gray-600">Gestionar empleados</p>
                </div>

                <div class="flex gap-3">
                    <button type="button" class="flex gap-2 w-full px-4 py-2.5 border rounded-md transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                        <DownloadIcon />
                        Descargar
                    </button>
                    <button
                        type="button"
                        class="tracking-wide bg-black text-gray-100 w-full px-4 py-2.5 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                        <PlusIcon />
                        Nuevo
                    </button>
                </div>
            </div>

            <div class="flex mb-3 text-sm items-center justify-between gap-4">
                <div class="relative w-9/12">
                    <input type="search" id="search" class="w-full pl-3 pr-10 py-3 border border-gray-200 rounded-lg hover:border-green-500 focus:outline-none focus:border-green-500 transition-colors" placeholder="Buscar empleado">
                    <button class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
                        <SearchIcon />
                    </button>
                </div>

                <div class="dropdown inline-block relative w-3/12">
                    <button class="border text-gray-700 py-3 px-4 rounded-lg inline-flex items-center w-full justify-between">
                        <span class="mr-1">Nombre de cargo</span>
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                    </button>
                    <ul class="dropdown-menu bg-white shadow absolute hidden text-gray-700 w-full rounded">
                        <li class=""><a class="rounded-t hover:bg-gray-100 py-3 px-4 block whitespace-no-wrap" href="#">UI UX Designer</a></li>
                        <li class=""><a class="hover:bg-gray-100 py-3 px-4 block whitespace-no-wrap" href="#">Graphic Designer</a></li>
                        <li class=""><a class="hover:bg-gray-100 py-3 px-4 block whitespace-no-wrap" href="#">Finance</a></li>
                        <li class=""><a class="hover:bg-gray-100 py-3 px-4 block whitespace-no-wrap" href="#">Project Manager</a></li>
                        <li class=""><a class="rounded-b hover:bg-gray-100 py-3 px-4 block whitespace-no-wrap" href="#">Creative Director</a></li>
                    </ul>
                </div>
            </div>

            <table class="w-full table-auto text-sm text-gray-600 text-left mb-5">
                <thead class="bg-gray-500x rounded-lg">
                    <tr class="text-sm leading-normal">
                        <th class="py-4 px-4 rounded-l-xl bg-gray-50 font-medium text-sm text-left">Nombre</th>
                        <th class="py-4 px-4 bg-gray-50 font-medium text-sm">Nombre de cargo</th>
                        <th class="py-4 px-4 bg-gray-50 font-medium text-sm">Departamento</th>
                        <th class="py-4 px-4 bg-gray-50 font-medium text-sm">Oficina</th>
                        <th class="py-4 px-4 bg-gray-50 font-medium text-sm">Cuenta</th>
                        <th class="py-4 px-4 rounded-r-xl bg-gray-50 font-medium text-sm text-right">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-grey-lighter" v-for="employee in employees" :key="employee.id">
                        <td class="py-3 px-4 border-b border-gray-100">
                            <p>
                                {{ employee.nombre }}
                            </p>

                            <a :href="`mailto:${employee.correo}`" class="text-xs text-gray-400" target="_blank">
                                {{ employee.correo }}
                            </a>
                        </td>
                        <td class="py-3 px-4 border-b border-gray-100">{{ employee.cargo }}</td>
                        <td class="py-3 px-4 border-b border-gray-100">{{ employee.departamento }}</td>
                        <td class="py-3 px-4 border-b border-gray-100">{{ employee.oficina }}</td>
                        <td class="py-3 px-4 border-b border-gray-100">{{ employee.estadoCuenta }}</td>
                        <td class="py-3 px-4 border-b border-gray-100 text-right">
                            <div class="flex justify-end gap-2">
                                <button
                                    type="button"
                                    class="tracking-wide bg-green-500 text-gray-100 px-2 py-1 rounded-md hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <ViewIcon />
                                </button>
                                <button
                                    type="button"
                                    class="tracking-wide bg-blue-500 text-gray-100 px-2 py-1 rounded-md hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <EditIcon />
                                </button>
                                <button
                                    type="button"
                                    class="tracking-wide bg-red-500 text-gray-100 px-2 py-1 rounded-md hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <DeleteIcon />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="flex justify-between items-center text-sm">
                <nav aria-label="Pagination" class="flex items-center text-gray-600 gap-2">
                    <a href="#" class="p-1 mr-3 rounded border border-gray-200 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </a>
                    <a href="#" class="px-2 py-1 rounded hover:bg-gray-100 hover:font-medium border border-white hover:border-gray-100"> 1 </a>
                    <a href="#" class="px-2 p-1 rounded bg-gray-100 border border-gray-100 text-gray-900 font-medium hover:bg-gray-100"> 2 </a>
                    <a href="#" class="px-2 py-1 rounded hover:bg-gray-100 hover:font-medium border border-white hover:border-gray-100"> 3 </a>
                    <a href="#" class="px-2 py-1 rounded hover:bg-gray-100 hover:font-medium border border-white hover:border-gray-100"> ... </a>
                    <a href="#" class="px-2 py-1 rounded hover:bg-gray-100 hover:font-medium border border-white hover:border-gray-100"> 9 </a>
                    <a href="#" class="p-1 ml-3 rounded border border-gray-200 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </nav>
                <div class="text-gray-600 flex justify-between gap-3 items-center">
                    <p>Mostrando 1 a 8 de 50 registros</p>
                    <div class="dropdown inline-block relative">
                        <ul class="dropdown-menu bg-white shadow absolute bottom-7 hidden text-gray-700 w-full rounded">
                            <li class=""><a class="rounded-t hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="#">20</a></li>
                            <li class=""><a class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="#">30</a></li>
                            <li class=""><a class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="#">40</a></li>
                            <li class=""><a class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="#">50</a></li>
                        </ul>
                        <button class="border text-gray-700 py-1 px-2 rounded-lg inline-flex items-center w-full justify-between">
                            <span class="mr-1">Mostrar 10</span>
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<style>
.dropdown:hover .dropdown-menu {
    display: block;
}
</style>
