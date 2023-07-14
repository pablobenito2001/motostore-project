<template>
    <main class="MaxLayout">
        <slot />
    </main>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .MaxLayout{
        max-width: var(--full-width);
        margin: auto;
    }
</style>