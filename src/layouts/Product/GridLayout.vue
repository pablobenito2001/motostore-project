<template>
    <div class="GridLayout" :class="$attrs.class">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .GridLayout{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        gap: .625rem;   
        background-color: var(--white);
        @media screen and (max-width: 850px){
            grid-template-columns: 1fr;
        }
    }
</style>