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
    import { router } from '../../router/router';
    import { useHumanizedPrice } from '../../composables/useHumanizedPrice';

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
        border: solid 1px var(--black);
        border-radius: .3125rem;
        cursor: pointer;
        transition: background-color .6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover{
            background-color: var(--alpha-blue);
        }
        &:hover > .ProductsCard-image{
            transform: translateY(-0.3125rem);
        }
        &-image{
            width: 100%;
            max-height: 400px;
            object-fit: contain;
            transition: transform .6s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        &-title{
            font-size: 2em;
            font-weight: 600;
            line-height: 100%;
            margin: .625rem 0;
            &--price{
                font-size: 1.3em
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