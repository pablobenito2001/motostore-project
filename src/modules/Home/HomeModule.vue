<template>
    <main class="Home">
        <HeaderModule />
        <CardModule />
    </main>
</template>
<script lang='ts' setup>
    import HeaderModule from './HeaderModule.vue';
    import CardModule from './CardModule.vue';
</script>
<style lang='scss' scoped>
    .Home{
        padding: 4.75rem 0 0 0;
    }
</style>