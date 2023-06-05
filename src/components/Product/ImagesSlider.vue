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
                :class="[ index === 0 ? 'ImageSlider--selected' : '']"
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
        const nodeList = prevElement.value!.childNodes;
        nodeList.forEach((elem: Node, index: number) => {
            if(e.target === elem) position.value = (imageSize.value * (index - 1));
        });
        changeSelectedNode(nodeList, e.target as HTMLElement);
    }

    function changeSelectedNode(nodeList: NodeList, elementeSelected: HTMLElement){
        nodeList.forEach((elem: Node) => {
            const htmlElement = elem as HTMLElement;
            if(htmlElement.classList) htmlElement.classList.remove('ImageSlider--selected'); 
        });
        elementeSelected.classList.add('ImageSlider--selected');
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
        background-size: cover;
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
            @media screen and (max-width: 400px){
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
        &--selected{
            background-color: var(--blue);
        }
    }
</style>