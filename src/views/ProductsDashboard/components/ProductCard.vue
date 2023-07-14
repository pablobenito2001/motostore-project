<template>
    <div class="ProductsCard" @click="() => router.push({ path: `/products/${ props.codeName }` })">
        <img :src="props.picture" :alt="`${ props.name }'s picture'`" class="ProductsCard-image" loading="lazy">
        <div class="ProductsCard-indoBox">
            <h3 class="ProductsCard-title">{{ props.name }}</h3>
            <span class="ProductsCard-title ProductsCard-title--price">${{ humanizedFunction }},00</span>
        </div>
        <div>
            <p class="ProductsCard-resume">{{ props.resume }}</p>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { router } from '../../../router/router';
    import { useHumanizedPrice } from '../../../composables/useHumanizedPrice';

    interface Props{
        id: number;
        name: string;
        price: number;
        picture: string;
        family: string;
        codeName: string;
        resume: string;
    }   

    const props = defineProps<Props>();
    const { humanizedFunction } = useHumanizedPrice(props.price)
</script>
<style lang='scss' scoped>
    .ProductsCard{
        padding: .9375rem;
        background-color: var(--white);
        cursor: pointer;
        overflow: hidden;
        position: relative;
        &::before{
            content: "Ver Producto";
            width: 100%;
            padding: 20px 10px;
            position: absolute;
            bottom: -64px;
            left: 0;
            background-color: var(--blue);
            z-index: 2;
            text-transform: uppercase;
            color: var(--white);
            font-size: 1.2em;
            transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
            opacity: 0;
        }
        &:hover::before{
            bottom: 0;
            opacity: 1;
        }
        &-image{
            width: 100%;
            max-height: 25rem;
            object-fit: contain;
            background-color: var(--grey);
        }
        &-title{
            font-size: 1.5em;
            font-weight: 600;
            line-height: 100%;
            margin: .625rem 0;
            text-transform: uppercase;
            &--price{
                font-size: 1.3em;
            }
        }
        &-resume{
            display: block;
            margin: 10px 0 0 0;
            font-family: var(--secundary-font);
            font-weight: lighter;
        }
    }
</style>