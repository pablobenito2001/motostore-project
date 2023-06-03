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
        overflow: hidden;
        &-container{
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            gap: 2.1875rem;
            padding: var(--pad);
            background-color: var(--white);
            @media screen and (max-width: 850px) {
                gap: .625rem;
            }
        }
    }
</style>