<template>
    <div class="ProductSlider">
        <div class="ProductSlider-header" :style="{'background-image': `linear-gradient(0deg, ${ props.color }, ${ props.color }), url(${ props.source }`}">
            <slot />
        </div>
        <div class="ProductSlider-container">
            <div class="ProductSlider-slider ProductSlider-slider--left" @click="scrollLeft">
                <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="ProductSlider-arrow">
                    <path d="M15.2953 28.0113L38.0707 5.23711C39.1688 4.13906 40.95 4.13906 42.0481 5.23711L44.7047 7.89375C45.8016 8.99063 45.8028 10.7672 44.7094 11.8664L26.659 30L44.7082 48.1348C45.8028 49.234 45.8004 51.0105 44.7035 52.1074L42.0469 54.7641C40.9489 55.8621 39.1676 55.8621 38.0696 54.7641L15.2953 31.9887C14.1973 30.8906 14.1973 29.1094 15.2953 28.0113Z" fill="#F6F6F6"/>
                </svg>
            </div>
            <div class="ProductSlider-productBox" :style="{ transform: `translateX(-${ move }px)` }" ref="card">  
                <MiniProduct 
                v-for="mini in props.products"
                :key="mini.id"
                :name="mini.name"
                :picture="mini.picture"
                :price="mini.price"
                :codeName="mini.codeName"
                class="ProductSlider-product"
                />
            </div>
            <div class="ProductSlider-slider ProductSlider-slider--right" @click.prevent="scrollRight">
                <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="ProductSlider-arrow">
                    <path d="M15.2953 28.0113L38.0707 5.23711C39.1688 4.13906 40.95 4.13906 42.0481 5.23711L44.7047 7.89375C45.8016 8.99063 45.8028 10.7672 44.7094 11.8664L26.659 30L44.7082 48.1348C45.8028 49.234 45.8004 51.0105 44.7035 52.1074L42.0469 54.7641C40.9489 55.8621 39.1676 55.8621 38.0696 54.7641L15.2953 31.9887C14.1973 30.8906 14.1973 29.1094 15.2953 28.0113Z" fill="#F6F6F6"/>
                </svg>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { ref, onMounted, onUnmounted, computed } from 'vue';

    import MiniProduct from './MiniProduct.vue';
    // props
        interface Props{
        source: string;
        color: string;
        products: { name: string, price: number | boolean, picture: string, id: number, codeName: string }[];
    }

    const props = defineProps<Props>();

    // slider
    const move = ref<number>(0);
    const card = ref<HTMLDivElement>();
    const cardSize = ref<number>(460);
    const maxScroll = computed<number>(() => (cardSize.value * props.products.length) - cardSize.value);

    function scrollRight(e: MouseEvent): void{
        if(move.value !== maxScroll.value) move.value += cardSize.value;
    }
    function scrollLeft(e: MouseEvent): void{
        if(move.value !== 0) move.value -= cardSize.value;
    }

    function updateCardSize(): void{
        // responsive scroll
        const element: HTMLElement = card.value!.childNodes[1] as HTMLElement;
        cardSize.value = element.offsetWidth + 10;
    }

    onMounted(() => {
        updateCardSize();
        window.addEventListener('resize', updateCardSize)
    });
    onUnmounted(() => window.removeEventListener('resize', updateCardSize));
</script>
<style lang='scss' scoped>
    .ProductSlider{
        display: grid;
        grid-template-columns: 28.125rem calc(100% - 28.125rem - 10px);
        grid-template-rows: 28.125rem;
        gap: .625rem;
        overflow: hidden;
        @media screen and (max-width: 850px) {
            grid-template-columns: 1fr;
            grid-template-rows: 28.125rem 28.125rem;
        }
        &-header{
            display: flex;
            justify-content: center;
            align-items: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            z-index: 2;
        }
        &-container{
            position: relative;
            overflow: hidden;
            @media screen and (max-width: 850px) {
                padding: 0 3px;
            }
        }
        &-productBox{
            display: flex;
            flex-wrap: nowrap;
            gap: .625rem;
            transition: transform .6s cubic-bezier(0.215, 0.610, 0.355, 1);
        }
        &-product{
            flex: 1 0 auto;
            max-width: 28.125rem;
            width: 100%;
            height: 28.125rem;
            @media screen and (max-width: 400px) {
                max-width: unset;
            }
        }
        &-slider{
            position: absolute;
            padding: 10px;
            z-index: 2;
            background-color: var(--blue);
            cursor: pointer;
            transition: transform .6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &--left{
                top: 50%;
                left: 0;
                transform: translateY(-50%);
            }
            &--right{
                top: 50%;
                right: 0;
                transform: translateY(-50%) rotate(180deg);
                
            }
            &:hover .ProductSlider-arrow{
                transform: translateX(-2px);
            }
        }
    }

    :slotted(.ProductSlider-title){
        text-align: center;
        line-height: 3rem;
        font-size: clamp(3.123em, 4vw, 4em);
        font-weight: 400;
        color: var(--white);
    }
    :slotted(.ProductSlider-strong){
        font-weight: 600;
    }
</style>