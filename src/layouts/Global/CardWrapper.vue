<template>
    <div class="CardWrapper">
        <div class="CardWrapper-container">
            <slot />
        </div>
    </div>  
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .CardWrapper{
        padding: var(--pad);
        background-attachment: fixed;
        background-color: #001C57;
        background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, var(--black) 28px ), repeating-linear-gradient( #3d3d3d55, #35353591 );
        @media screen and (max-width: 800px) {
            gap: .625rem;
        }
        &-container{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(min(100%, 400px), 1fr));
            grid-auto-rows: auto;
            gap: 1.25rem;
            max-width: 125rem;
            margin: auto;
            @media screen and (max-width: 800px) {
                gap: .625rem;
            }
        }
    }
</style>