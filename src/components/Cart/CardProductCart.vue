<template>
    <div class="CardCart">
        <div class="CardCart-element">
            <span class="CardCart-title">Producto</span>
            <div class="CardCart-content">
                <img :src="props.thumbnail" :alt="`${ props.name }'s image'`" class="CardCart-image">
                <span class="CardCart-text CardCart-pointer" @click="goto">{{ props.name }}</span>
            </div>
        </div>
        <div class="CardCart-element">
            <span class="CardCart-title">Cantidad</span>
            <div class="CardCart-amount">
                <button class="CardCart-elementButton">-</button>
                <span class="CardCart-visualizerAmount">{{ props.amount }}</span>
                <button class="CardCart-elementButton CardCart-elementButton--rigth">+</button>
            </div>
        </div>
        <div class="CardCart-element">
            <span class="CardCart-title">Envío</span>
        </div>
        <div class="CardCart-element">
            <span class="CardCart-title">Precio</span>
            <div>
                <span class="CardCart-text">${{ humanizedFunction }},00</span>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { useHumanizedPrice } from '../../composables/useHumanizedPrice';
    import { router } from '../../router/router';

    interface Props{
        name: string;
        price: number;
        thumbnail: string;
        codeName: string;
        amount: number;
    }

    const props = defineProps<Props>()
    const { humanizedFunction } = useHumanizedPrice(props.price);

    function goto(){
        router.push({ path: `products/${ props.codeName }` })
    }
</script>
<style lang='scss' scoped>
    .CardCart{
        display: grid;
        grid-template-columns: 18.75rem repeat(3, 1fr);
        grid-auto-rows: auto;
        gap: .3125rem;
        padding: .625rem;
        border: solid 2px var(--black);
        border-radius: .3125rem;
        &-pointer{
            cursor: pointer;
        }
        &-image{
            max-width: 6.25rem;
        }
        &-content{
            display: flex;
            gap: 5px;
        }
        &-title{
            font-size: 1.1em;
            font-weight: 600;
        }
        &-product{
            font-size: 0.7em;
        }
        &-text{
            line-height: 100%;
            display: block;
            margin: 0 0 5px 0;
            font-family: var(--secundary-font);
        }
        &-amount{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: auto;
        }
        &-elementButton{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5em;
            color: var(--white);
            background-color: var(--blue);
            padding: 1px .625rem;
            border-radius: .3125rem 0 0 .3125rem;
            cursor: pointer;
            text-align: center;
            transition: filter .6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &--rigth{
                border-radius: 0 .3125rem .3125rem 0;
            }
            &:hover{
                filter: brightness(130%);
            }
        }
        &-visualizerAmount{
            display: grid;
            place-items: center;
            background-color: var(--alpha-blue);
        }
    }
</style>