<script setup lang="ts">
    import layout from '../layouts/main.vue'
    import skeleton from '@/components/skeleton.vue'
    import { ref } from "vue";
    import type{ Ref } from "vue";

    const loading:Ref<boolean> = ref(true)
</script>

<template>
    <layout>
        <skeleton title="Reclutamiento" v-if="loading"/>
    </layout>
</template>
