<script setup>
    import{RouterLink}from 'vue-router'

    defineProps({
        to:{
            type: String
        }
    })
</script>


<template>

        <RouterLink :to="{name: to}" class="block md:inline-block rounded bg-green-400 p-2 uppercase shadow text-sm text-gray-800 hover:bg-green-700 hover:text-white">
            <slot></slot> 
        </RouterLink>
    
</template>