<template>
    <article class="NewPhone">
        <picture class="NewPhone-picture">
            <source
            v-for="pic in pictures"
            :srcset="pic.source"
            :media="`(max-width: ${pic.media}px)`"
            >
            <img :src="picture" :alt="`${ title }'advertising'`" :title="title">
        </picture>
        <div class="NewPhone-infoBox">
            <h3 class="NewPhone-title NewPhone-text">{{ title }}</h3>
            <p class="NewPhone-caption">{{ caption }}</p>
            <GeneralButton>Ver mas</GeneralButton>  
            <span v-if="price" class="NewPhone-title NewPhone-text">${{ price }}</span>
            <span v-else class="NewPhone-title NewPhone-text">Proximamente</span>
        </div>
    </article>
</template>
<script lang='ts' setup>
    import GeneralButton from '../Buttons/GeneralButton.vue';

    interface Props {
        title: string;
        price: boolean | number;
        caption: string;
        picture: string;
        pictures: { media: number, source: string }[];
    }

    defineProps<Props>();
</script>
<style lang='scss' scoped>
    .NewPhone{
        position: relative;
        &-picture{
            width: 100%;
        }
        &-infoBox{
            padding: .625rem;
            position: absolute;
            top: 0;
            left: 0;
            max-width: 850px;
            background-color: var(--white);
            @media screen and (max-width: 850px) {
                max-width: 27.5rem;
            }
            @media screen and (max-width: 400px) {
                max-width: 18.75rem;
            }
        }
        &-text{
            line-height: normal;
            font-weight: 700;
        }
        &-title{
            text-transform: lowercase;
            font-size: clamp(1.5625em, 4vw, 4em);
            color: var(--black);
        }
        &-caption{
            line-height: 1em;
            font-family: var(--secundary-font);
            font-weight: lighter;
            font-size: clamp(1em, 3vw, 3em);
            margin-bottom: 1.25rem;
        }
    }
</style>