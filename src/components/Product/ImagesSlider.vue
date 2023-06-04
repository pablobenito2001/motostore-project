<template>
    <div class="ImageSlider" :class="$attrs.class">
        <div class="ImageSlider-container" :style="{ 'transform': `translateX(-${ position }px)` }" ref="imageElement">
            <img 
            v-for="(img, index) in props.pictures"
            :key="index"
            :src="img" 
            alt="Product's image"
            class="ImageSlider-image">
        </div>
        <div class="ImageSlider-preview">    
            <div class="ImageSlider-container" ref="prevElement">
                <img 
                v-for="(img, index) in props.pictures"
                :key="index"
                :src="img" 
                alt="Product's image"
                class="ImageSlider-prevImage"
                @click.self="move">
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const props = defineProps<{ pictures: string[] }>()

    // show phone
    const prevElement = ref<HTMLDivElement>();
    const imageElement = ref<HTMLDivElement>();
    const position = ref<number>(0);
    const imageSize = ref<number>(0);

    function move(e: MouseEvent): void{
        const elem = prevElement.value!.childNodes as NodeList;
        elem.forEach((elem, index) => {
            if(e.target === elem){
                position.value = (imageSize.value * (index - 1))
            };
        })
    }

    function updateImageSize(): void{
        const element: HTMLElement = imageElement.value!.childNodes[1] as HTMLImageElement;
        imageSize.value = element.offsetWidth;
    }

    onMounted(() => {
        updateImageSize()
        window.addEventListener('resize', updateImageSize)
    });
    onUnmounted(() => window.removeEventListener('resize', updateImageSize));
</script>
<style lang='scss' scoped>
    .ImageSlider{
        background-image: url('/img/bg_product.png');
        background-color: var(--black);
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;
        &-container{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: nowrap;
            transition: transform .6s cubic-bezier(0.215, 0.610, 0.355, 1);
        }
        &-image{
            flex: 1 0 auto;
        }
        &-preview{
            overflow: hidden;
            background-color: var(--white);
            @media screen and (max-width: 850px){
                display: none;
            }
        }
        &-prevImage{
            max-width: 6.25rem;
            width: 100%;
            cursor: pointer;
            transition: background-color .6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                background-color: var(--blue);
            }
        }
    }
</style>