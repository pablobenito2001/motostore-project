<template>
    <div class="Dispatch">
        <div class="Dispatch-section">
            <h1 class="Dispatch-name">{{ props.name }}</h1>
        </div>
        <div class="Dispatch-section">
            <p class="Dispatch-description">{{ props.resume }}</p>
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
                v-model:selected="colorSelect"
                :class="{ 'Dispatch-select--empty': isEmpty} "
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
                v-model:selected="storageSelect"
                :class="{ 'Dispatch-select--empty': isEmpty} "
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
            :code-name="product.codeName"
            name-input="selectProduct"
            @emit-product="updateExtrasList"
            />  
        </div>
        <div class="Dispatch-section">
            <div class="Dispatch-priceBox">
                <span class="Dispatch-text">Un solo pago de:</span>
                <span class="Dispatch-price">${{ humanizedFunction }},00</span>
            </div>
        </div>      
        <GeneralButton 
        class="Dispatch-button" 
        :class="[ colorSelect && storageSelect ? '' : 'Dispatch-button--disabled']"
        @click="updateShopCart">Agregar al Carrito</GeneralButton>
    </div>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';
    import { useShopCart } from '../../store/useShopcCart';
    import { useHumanizedPrice } from '../../composables/useHumanizedPrice';

    import GeneralButton from '../Buttons/GeneralButton.vue';
    import RadioImput from '../Input/RadioImput.vue';
    import CheckboxProduct from './CheckboxProduct.vue';
    import FinalProduct from '../../insterfaces/FinalProduct';
    import { generateRandomID } from '../../utils/generateRandonID';

    interface Props{
        name: string;
        resume: string;
        selects: { colors: string[], storage: string[] };
        price: number;
        extras: { name: string, codeName: string, price: number, source: string }[];
        thumbnail: string;
        codeName: string;
    }

    const props = defineProps<Props>();
    const totalPrice = ref<number>(props.price);
    const extraProductsList = ref<{ name: string, price: number, thumbnail: string, codeName: string }[]>([]);
    const colorSelect = ref<string>('');
    const storageSelect = ref<string>('');
    const isEmpty = ref<boolean>(false);
    const { addProduct } = useShopCart();
    const { humanizedFunction } = useHumanizedPrice(totalPrice);

    // update total price
    function updatePrice(newPrice: number): void{
        totalPrice.value += newPrice;
    };

    // update extra products
    function updateExtrasList(e: { name: string, price: number, thumbnail: string, codeName: string }): void{
        updatePrice(e.price);

        const hasExtraProduct: boolean = extraProductsList.value.some((elem: { name: string }) => elem.name === e.name);
        const indexExtraProduct: number = extraProductsList.value.findIndex((elem: { name: string }) => elem.name === e.name);
    
        hasExtraProduct 
        ? extraProductsList.value.splice(indexExtraProduct, 1)
        : extraProductsList.value.push({ name: e.name, price: e.price, thumbnail: e.thumbnail, codeName: e.codeName });
    };

    // create finishProduct object.
    function createFinalProduct(): FinalProduct[] {
        const finalProduct: FinalProduct = {
            id: generateRandomID(10),
            productName: props.name,
            finalPrice: props.price,
            thumbnail: props.thumbnail,
            codeName: props.codeName,
            amount: 1
        };
        const extraProducts: FinalProduct[] = extraProductsList.value.map((elem: { name: string, price: number, thumbnail: string, codeName: string }) => {
            return {
                id: generateRandomID(10),
                finalPrice: elem.price,
                productName: elem.name,
                codeName: elem.codeName,
                thumbnail: elem.thumbnail,
                amount: 1
            }
        })
        return [finalProduct, ...extraProducts];
    }

    // update shop cart in global storage(pinia)
    function updateShopCart(): void{
        if(colorSelect.value || storageSelect.value){
            const product: FinalProduct[] = createFinalProduct();
            addProduct(product);
        }else{
            isEmpty.value = true;
            setTimeout(() => {
                isEmpty.value = false
            }, 3000)
        }
    }
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
            &--disabled{
                pointer-events: none;
                filter: brightness(45%);
            }
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
        &-select--empty{
            border: solid 2px #ee3030;
            border-radius: .3125rem;
        }
    }
</style>