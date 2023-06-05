<template>
    <div class="Dispatch">
        <div class="Dispatch-section">
            <h1 class="Dispatch-name">{{ props.name }}</h1>
        </div>
        <div class="Dispatch-section">
            <p class="Dispatch-description">{{ props.description }}</p>
        </div>
        <div class="Dispatch-section">
            <span class="Dispatch-label">Selecciona un Color: </span>
            <div class="Dispatch-grid">
                <RadioImput 
                v-for="(color, index) in props.selects.colors"
                :key="index"
                :id="`input${ color }`"
                label="Selecciona un Color: "
                name-input="colorSelect"
                :value="color"
                />
            </div>
            <span class="Dispatch-label">Capacidad: </span>
            <div class="Dispatch-grid">
                <RadioImput 
                v-for="(storage, index) in props.selects.storage"
                :key="index"
                :id="`input${ storage }`"
                label="Capacidad: "
                name-input="storageSelect"
                :value="storage"
                />
            </div>
        </div>
        <div class="Dispatch-section">
            <span class="Dispatch-label">Potencia tu experiencia con nuestros accesorios:</span>
            <CheckboxProduct 
            v-for="(product, index) in extras"
            :key="index"
            :name="product.name"
            :pic="product.source"
            :id="`id${ product.name.split(/\s*;\s*/) }`"
            :price="product.price"
            name-input="selectProduct"
            @emit-product="updateExtrasList"
            />  
        </div>
        <div class="Dispatch-section">
            <div class="Dispatch-priceBox">
                <span class="Dispatch-text">Un solo pago de:</span>
                <span class="Dispatch-price">${{ parseHumanPrice }},00</span>
            </div>
        </div>      
        <GeneralButton class="Dispatch-button">Agregar al Carrito</GeneralButton>
    </div>
</template>
<script lang='ts' setup>
    import { ref, computed, watch } from 'vue';

    import GeneralButton from '../Buttons/GeneralButton.vue';
    import RadioImput from '../Input/RadioImput.vue';
    import CheckboxProduct from './CheckboxProduct.vue';
    import FinishProduct from '../../insterfaces/FinishProduct';

    interface Props{
        name: string;
        description: string;
        selects: { colors: string[], storage: string[] };
        price: number;
        extras: { name: string, codeName: string, price: number, source: string }[];
    }

    const props = defineProps<Props>();
    const totalPrice = ref<number>(props.price);
    const extraProductsList = ref<{ name: string, price: number }[]>([]);

    // humanized price
    const parseHumanPrice = computed<string>(() => {
        const priceArray: number[] = Array.from(String(totalPrice.value), Number).reverse();
        const humanizedPrice: string[] = [];
        priceArray.forEach((elem: number, index: number) => {        
            index % 3 === 0 && index !== 0 
            ? humanizedPrice.push('.', elem.toString())
            : humanizedPrice.push(elem.toString());
        });
        return humanizedPrice.reverse().join('');
    });

    // update total price
    function updatePrice(newPrice: number): void{
        totalPrice.value += newPrice;
    }

    // extra products update
    function updateExtrasList(e: { name: string, price: number }): void{
        const hasExtraProduct: boolean = extraProductsList.value.some((elem: { name: string, price: number }) => elem.name === e.name)
        updatePrice(e.price);
        if(hasExtraProduct){
            const index: number = extraProductsList.value.findIndex((elem: { name: string, price: number }) => elem.name === e.name) as number;
            extraProductsList.value.splice(index, 1);
        }else{
            extraProductsList.value.push(e)
        }
    };
</script>
<style lang='scss' scoped>
    .Dispatch{
        &-name{
            font-size: clamp(3em, 5vw, 5em);
            line-height: 100%;
            font-weight: 600;
        }
        &-description{
            font-family: var(--secundary-font);
            font-weight: lighter;
            line-height: 100%;
            font-size: clamp(1em, 1.5625vw, 1.5625em);  
        }
        &-section{
            margin: 0 0 .9375rem 0;
            @media screen and (max-width: 850px) {
                margin: 0 0 .625rem 0;
            }
        }
        &-grid{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
            grid-auto-rows: auto;
            gap: .3125rem;
            margin: 0 0 .625rem 0;
        }
        &-button{
            width: 100%;
            font-weight: 500;
            font-family: var(--principal-font);
        }
        &-label{
            font-family: var(--secundary-font);
            font-weight: lighter;
            display: block;
            margin: 0 0 .3125rem 0;
        }
        &-priceBox{
            width: 100%;
            padding: .625rem;
            border: solid 2px var(--black);
            border-radius: .3125rem;
        }
        &-text{
            font-size: 1em;
            font-weight: 600;
            line-height: 100%;
        }
        &-price{
            display: block;
            font-size: clamp(3em, 4vw, 4em);
            line-height: 100%;
            font-weight: 600;
        }
    }
</style>