<template>
    <div class="Title">
        <h2 class="Title-text"><slot /></h2>
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Title{
        background-color: var(--white);
        max-width: 125rem;
        margin: auto;
        @media screen and (max-width: 400px){
            margin: 0 0 0 .625rem;
        }
        &-text{
            line-height: normal;
            font-weight: 700;
            font-size: clamp(4.375em, 9vw, 9em);
            color: var(--black);
            text-transform: lowercase;
        }
    }
</style>