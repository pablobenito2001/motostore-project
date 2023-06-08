<template>
    <div class="NavMobile">
        <ul class="NavMobile-linkBox">
            <li class="NavMobile-link"><router-link to="/">Inicio</router-link></li>
            <li class="NavMobile-link"><router-link to="/products">Productos</router-link></li>
            <li class="NavMobile-link"><router-link to="/exclusive">Exclusive</router-link></li>
            <li class="NavMobile-link"><router-link to="/stores">Stores</router-link></li>
        </ul>
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .NavMobile{
        background-color: var(--white);
        min-height: calc(100vh - 5.5rem);
        &-link{
            font-size: 2em;
            font-weight: 600;
            cursor: pointer;
            line-height: 100%;
            margin: .9375rem 0;
        }
    }
</style>