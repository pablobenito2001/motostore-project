<template>
    <div class="CheckboxProduct">
        <input type="checkbox" :name="props.nameInput" :id="props.id" :value="props.price" class="CheckboxProduct-input" @change="emitPrice">
        <div class="CheckboxProduct-container">
            <div class="CheckboxProduct-box">
                <img :src="props.pic" alt="product's picture" class="CheckboxProduct-image">
                <div class="CheckboxProduct-infoBox">
                    <span class="CheckboxProduct-info">{{ props.name }}</span>
                    <span class="CheckboxProduct-info">${{ props.price }},00</span>
                </div>
            </div>
            <label class="CheckboxProduct-button" :for="props.id" v-show="!labelOption" @click="() => labelOption = true">+Agregar</label>
            <label class="CheckboxProduct-button" :for="props.id" v-show="labelOption" @click="() => labelOption = false">-Eliminar</label>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';

    const labelOption = ref<boolean>(false);

    interface Props {
        pic: string;
        name: string;
        price: number;
        nameInput: string;
        id: string;
    }

    const props = defineProps<Props>();
    const emit = defineEmits<{
    (e: 'emitProduct', value: { name: string, price: number }): void
    }>()


    function emitPrice(e: Event){
        const value = e.target as HTMLInputElement
        value.checked 
        ? emit('emitProduct', { name: props.name, price: Number(value.value)})
        : emit('emitProduct', { name: props.name, price: 0 - Number(value.value)});
    }
</script>
<style lang='scss' scoped>
    .CheckboxProduct{
        margin: .3125rem 0;
        border: solid 2px var(--black);
        border-radius: .3125rem;
        width: 100%;
        &-box{
            display: flex;
        }
        &-image{
            max-width: 100px;
            min-height: 100px;
            object-fit: contain;
        }
        &-infoBox{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &-info{
            font-size: .9em;
            font-family: var(--principal-font);
            font-weight: 600;
            color: var(--black);
        }
        &-container{
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: .625rem;
            padding: .625rem;
        }
        &-button{
            color: var(--blue);
            font-weight: 600;
            cursor: pointer;
        }
        &-input{
            display: none;
            width: 0;
            height: 0;
            &:checked + .CheckboxProduct-container{
                background-color: var(--alpha-blue);
            }
        }
    }
</style>    