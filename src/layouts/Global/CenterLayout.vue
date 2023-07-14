<template>
    <div class="LayoutGlobal">
        <slot />
    </div>  
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .LayoutGlobal{
        padding: 5.625rem var(--pad) var(--pad) var(--pad);
        max-width: 87.5rem;
        margin: auto;
    }
</style>