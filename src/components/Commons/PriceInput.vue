<template>
    <div class="PriceInput">
        <span class="PriceInput-label">{{ props.label }}</span>
        <div class="PriceInput-box">
            <div class="PriceInput-inputBox">
                <input 
                type="number" 
                class="PriceInput-input" 
                placeholder="Mínimo" 
                min="0" 
                max="500000" 
                step="100" 
                @keypress.enter="emitMin" 
                ref="minInput"
                maxlength="20">
                <span class="PriceInput-reset" @click.self="resetMin()">X</span>
            </div>
            <span class="PriceInput-line"></span>
            <div class="PriceInput-inputBox">
                <input 
                type="number" 
                class="PriceInput-input" 
                placeholder="Máximo" 
                min="0" 
                max="500000" 
                step="100" 
                @keypress.enter="emitMax" 
                ref="maxInput">
                <span class="PriceInput-reset" @click.self="resetMax">X</span>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';
    // inputs
    const maxInput = ref<HTMLInputElement>()
    const minInput = ref<HTMLInputElement>()

    function resetMin(){
        minInput.value!.value = '';
        emit('minPrice', Number(minInput.value!.value));
    }
    function resetMax(){
        maxInput.value!.value = '';
        emit('maxPrice', Number(maxInput.value!.value));
    }
    // props
    interface Props {
        label: string;
    }
    const props = defineProps<Props>()
    // emits
    const emit = defineEmits<{
        minPrice: [value: number],
        maxPrice: [value: number]
    }>()
    function emitMax(e: Event){
        const value = Number((e.target as HTMLInputElement).value);
        if(value <= 500000){
            if(value === 0){
                emit('maxPrice', 500000)
            }else{
                emit('maxPrice', value)
            }
        }
    }
    function emitMin(e: Event){
        const value = Number((e.target as HTMLInputElement).value);
        if(value >= 0){
            emit('minPrice', value)
        }
    }
</script>
<style lang='scss' scoped>
    .PriceInput{
        &-label{
            font-size: 1.1em;
            text-transform: uppercase;
            margin: 0 0 .3125rem 0;
        }
        &-input{
            height: 100%;
            font-size: 1em;
            width: 100%;
            padding: .625rem;
            -moz-appearance: textfield;
            &::-webkit-inner-spin-button{
                display: none;
            }
            &::-webkit-outer-spin-button{
                display: none;
            }
        }
        &-inputBox{
            border: solid 1px var(--black);
            border-radius: .3125rem;
            position: relative;
            overflow: hidden;
            width: 100%;
            &:has(input:focus){
                outline: var(--black);
            }
            &:has(input:out-of-range){
                border: solid 1px red;
            }
        }
        &-reset{
            cursor: pointer;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: .3125rem;
            font-size: 1.5em;
            color: var(--blue);
            background-color: var(--white);
            padding: 5px;
        }
        &-box{
            display: flex;
            align-items: center;
            gap: .3125rem;
        }
        &-line{
            display: inline-block;
            background-color: var(--black);
            width: 50%;
            height: 1px;
        }
    }
</style>