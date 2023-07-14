<template>
    <div class="Column" :class="$attrs.class">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Column{
        background-color: var(--white);
        padding: var(--pad);
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        gap: 2.1875rem;
        overflow: hidden;
        @media screen and (max-width: 850px) {
            gap: .625rem;
        }
    }
</style>