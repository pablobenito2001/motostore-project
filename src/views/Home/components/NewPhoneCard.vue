<template>
    <article class="NewPhone">
        <picture class="NewPhone-picture">
            <source
            v-for="pic in props.pictures"
            :srcset="pic.source"
            :media="`(max-width: ${pic.media}px)`"
            >
            <img :src="props.picture" :alt="`${ props.title }'advertising'`" :title="props.title">
        </picture>
        <div class="NewPhone-infoBox">
            <span class="NewPhone-branch NewPhone-text">Motorola</span>
            <h3 class="NewPhone-title NewPhone-text">{{ title.toLocaleLowerCase().replace('motorola', '') }}</h3>
            <p class="NewPhone-caption">{{ props.caption }}</p>
            <span v-if="props.price" class="NewPhone-title NewPhone-text">${{ humanizedFunction }}</span>
            <span v-else class="NewPhone-title NewPhone-text">Proximamente</span>
            <GeneralButton v-if="props.price" @click="() => router.push(`/products/${ props.codeName }`)">Ver mas</GeneralButton>  
        </div>
    </article>
</template>
<script lang='ts' setup>
    import { router } from '../../../router/router';
    import { useHumanizedPrice } from '../../../composables/useHumanizedPrice';
    import GeneralButton from '../../../components/Buttons/GeneralButton.vue';

    interface Props {
        title: string;
        price: boolean | number;
        caption: string;
        picture: string;
        pictures: { media: number, source: string }[];
        codeName: string;
    }

    const props = defineProps<Props>();    
    const { humanizedFunction } = useHumanizedPrice(props.price)
</script>
<style lang='scss' scoped>
    .NewPhone{
        position: relative;
        &-picture{
            width: 100%;
        }
        &-infoBox{
            padding: 2.1875rem 2.8125rem;
            position: absolute;
            top: 0;
            left: 0;
            max-width: 53.125rem;
            width: 100%;
            background-color: var(--white);
            @media screen and (max-width: 980px) {
                max-width: 27.5rem;
                padding: 15px;
            }
            @media screen and (max-width: 480px) {
                max-width: 18.75rem;
            }
        }
        &-text{
            line-height: 100%;
            font-weight: 700;
        }
        &-title{
            display: block;
            text-transform: capitalize;
            font-size: clamp(1.5625em, 4vw, 4em);
            color: var(--black);
            margin: 0 0 1.5625rem 0;
        }
        &-branch{
            display: inline-block;
            font-size: 2em;
        }
        &-caption{
            line-height: 1em;
            font-family: var(--secundary-font);
            font-size: 1.5em;
            margin-bottom: 1.25rem;
        }
    }
</style>