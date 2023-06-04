<template>
    <main class="ProductView">
        {{ $route.params.product }}
        <button @click="pus">Clickeame</button>
    </main>
</template>
<script lang="ts" setup>
    import { router } from '../router/router';

    function pus(){
        router.push({path: `/product/motorola_e13`})
    }
</script>
<style lang="scss" scoped>
    
</style>