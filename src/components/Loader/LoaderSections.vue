<template>
    <div class="Loader">
        <span class="Loader-item Loader-item--1"></span>
        <span class="Loader-item Loader-item--2"></span>
        <span class="Loader-item Loader-item--3"></span>
    </div>
</template>
<script lang='ts' setup>
    
</script>
<style lang='scss' scoped>
    @keyframes load {
        from{
            height: 25px;
        }
        to{
            height: 10px;
        }
    }

    .Loader{
        min-width: 100%;
        min-height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        &-item{
            display: inline-block;
            width: 10px;
            height: 25px;
            background-color: var(--blue);
            margin: 1px;
            &--1{
                animation: load 0.4s linear infinite alternate;
            }
            &--2{
                animation: load 0.4s linear 0.5s infinite alternate;
            }
            &--3{
                animation: load 0.4s linear .10s infinite alternate;
            }
        }
    }
</style>