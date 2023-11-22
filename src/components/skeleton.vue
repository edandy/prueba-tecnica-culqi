<script setup lang="ts">
    defineProps({
        title: String,
    })
</script>
<template>
    <div class="bg-white p-4 rounded-lg mt-4">
        <div class="flex items-center justify-between mb-3">
            <h2 class="text-lg font-semibold mb-0">{{ title }}</h2>

            <div class="animate-pulse w-24">
                <div class="h-6 bg-gray-200 rounded-xl col-span-2"></div>
            </div>
        </div>

        <div class="flex items-center justify-between gap-4 mb-4 animate-pulse">
            <div class="h-6 bg-gray-200 rounded-xl col-span-2 w-full"></div>
            <div class="h-6 bg-gray-200 rounded-xl col-span-2 w-full"></div>
            <div class="h-6 bg-gray-200 rounded-xl col-span-2 w-full"></div>
        </div>

        <div class="animate-pulse flex gap-2 bg-gray-100 px-3 py-4 rounded-md">
            <div class="flex justify-between w-3/12 gap-2">
                <div class="rounded-full bg-gray-200 h-3 w-3 min-w-3"></div>
                <div class="h-3 bg-gray-200 rounded-xl col-span-2 w-full"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-200 rounded-xl col-span-2 w-full"></div>
                <div class="rounded-full bg-gray-200 h-3 w-3"></div>
            </div>
            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-200 rounded-xl col-span-2 w-full"></div>
                <div class="rounded-full bg-gray-200 h-3 w-3"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-200 rounded-xl col-span-2 w-full"></div>
                <div class="rounded-full bg-gray-200 h-3 w-3"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-200 rounded-xl col-span-2 w-full"></div>
                <div class="rounded-full bg-gray-200 h-3 w-3"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-200 rounded-xl col-span-2 w-full"></div>
                <div class="rounded-full bg-gray-200 h-3 w-3"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-200 rounded-xl col-span-2 w-full"></div>
                <div class="rounded-full bg-gray-200 h-3 w-3"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-200 rounded-xl col-span-2 w-full"></div>
                <div class="rounded-full bg-gray-200 h-3 w-3"></div>
            </div>
        </div>

        <div class="animate-pulse flex gap-2 px-3 py-4 border-b" v-for="n in 8">
            <div class="flex justify-between w-3/12 gap-2">
                <div class="h-3 bg-gray-100 rounded-xl col-span-2 w-full"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-100 rounded-xl col-span-2 w-full"></div>
            </div>
            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-100 rounded-xl col-span-2 w-full"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-100 rounded-xl col-span-2 w-full"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-100 rounded-xl col-span-2 w-full"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-100 rounded-xl col-span-2 w-full"></div>
                <div class="rounded-full bg-gray-100 h-3 w-3"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-100 rounded-xl col-span-2 w-full"></div>
                <div class="rounded-full bg-gray-100 h-3 w-3"></div>
            </div>

            <div class="flex justify-between w-2/12 gap-2">
                <div class="h-3 bg-gray-100 rounded-xl col-span-2 w-full"></div>
                <div class="rounded-full bg-gray-100 h-3 w-3"></div>
            </div>
        </div>
    </div>
</template>
