<template>
    <button class="Button" :class="$attrs.class"><slot /></button>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Button{
        padding: .625rem 1.875rem;
        background-color: var(--blue);
        font-size: clamp(1em, 1.3vw, 1.3em);
        font-family: var(--secundary-font);
        line-height: normal;
        font-weight: 600;
        color: var(--white);
        cursor: pointer;
        transition: filter 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover{
            filter: brightness(150%);
        }
        @media screen and (max-width: 850px){
            padding: .3125rem 1.25rem;
        }
    }
</style>