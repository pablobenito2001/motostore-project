<template>
    <div class="ProductSlider">
        <div class="ProductSlider-header" :style="{'background': `linear-gradient(0deg, ${ color }, ${ color }), url(${ source })`}">
            <slot />
        </div>
        <div class="ProductSlider-container">
            <div class="ProductSlider-productBox">  
                <MiniProduct 
                v-for="mini in products"
                :key="mini.id"
                :name="mini.name"
                :picture="mini.picture"
                :price="mini.price"
                />
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import MiniProduct from './MiniProduct.vue';

    interface Props{
        source: string;
        color: string;
        products: { name: string, price: number | boolean, picture: string, id: number }[];
    }

    defineProps<Props>();
</script>
<style lang='scss' scoped>
    .ProductSlider{
        display: grid;
        grid-template-columns: 28.125rem 100%;
        grid-template-rows: 28.125rem;
        gap: .625rem;
        &-header{
            display: flex;
            justify-content: center;
            align-items: center;
            background-blend-mode: difference normal;
        }
        &-productBox{
            display: grid;
            grid-template-columns: repeat(auto-fill, 28.125rem);
            grid-template-rows: 28.125rem;
            gap: .625rem;
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