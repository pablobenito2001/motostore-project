<template>
    <nav class="Nav">
        <div class="Nav-container">
            <span class="Nav-branch"><router-link to="/">motostore</router-link></span>
        </div>
    </nav>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Nav{
        padding: 1.25rem 1.25rem;
        background-color: var(--white);
        min-width: 100%;
        z-index: 5;
        &-container{
            max-width: 2100px;
            margin: auto;
            background-color: transparent;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        &-branch{
            font-weight: 600;
            font-size: clamp(.7em, 1.875vw, 1.875em);
            text-transform: lowercase;
            color: var(--black);
        }
    }
</style>