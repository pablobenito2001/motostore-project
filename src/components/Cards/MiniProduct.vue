<template>
    <div class="MiniProduct">
        <img :src="picture" :alt="`${ name }' pic'`" class="MiniProduct-thumbnail">
        <div class="MiniProduct-indoBox">
            <span class="MiniProduct-price">${{ price }},00</span>
            <p class="MiniProduct-info">{{ name }}</p>
        </div>
    </div>  
</template>
<script lang='ts' setup>
    interface Props{
        name: string;
        price: boolean | number;
        picture: string;
    }
    defineProps<Props>()
</script>
<style lang='scss' scoped>
    .MiniProduct{
        padding: 10px;
        background-color: var(--white);
        cursor: pointer;
        box-shadow: 3px 3px 4px #0000002c;
        transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover{
            transform: translateY(-5px);
            box-shadow: 5px 5px 4px #0000002c;
        }
        &-thumbnail{
            max-height: 300px;
            object-fit: contain;
        }
        &-price{
            display: inline-block;
            font-weight: 600;
            line-height: normal;
            font-size: 2em;
            color: var(--black);
            margin-bottom: .625rem;
        }
        &-info{
            font-family: var(--secundary-font);
            font-weight: lighter;
            font-size: 1.25em;
        }
    }
</style>