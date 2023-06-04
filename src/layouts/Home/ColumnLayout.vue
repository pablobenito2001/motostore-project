<template>
    <article class="Column" :class="$attrs.class">
        <div class="Column-container">
            <slot />
        </div>
    </article>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Column{
        max-width: 2000px;
        margin: auto;
        background-color: var(--white);
        padding: var(--pad);
        &-container{
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            gap: 2.1875rem;
            background-color: var(--white);
            overflow: hidden;
            @media screen and (max-width: 850px) {
                gap: .625rem;
            }
        }
    }
</style>