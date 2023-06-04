<template>
    <div class="MiniProduct" :class="$attrs.class" @click="navegate">
        <img :src="props.picture" :alt="`${ props.name }' pic'`" class="MiniProduct-thumbnail">
        <div class="MiniProduct-indoBox">
            <span class="MiniProduct-price">${{ props.price }},00</span>
            <p class="MiniProduct-info">{{ props.name }}</p>
        </div>
    </div>  
</template>
<script lang='ts' setup>
    import { router } from '../../router/router';

    interface Props{
        name: string;
        price: boolean | number;
        picture: string;
        codeName: string;
    }
    const props = defineProps<Props>()

    function navegate(){
        router.push(`/product/${ props.codeName }`)
    }
</script>
<style lang='scss' scoped>
    .MiniProduct{
        padding: .625rem;
        background-color: var(--white);
        cursor: pointer;
        border: solid 1px var(--black);
        &:hover .MiniProduct-thumbnail{
            transform: translateY(-10px);
        }
        &-thumbnail{
            max-height: 18.75rem;
            object-fit: contain;
            transition: transform .6s cubic-bezier(0.075, 0.82, 0.165, 1);
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