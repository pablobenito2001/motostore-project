<template>
    <aside class="Filters">
        <button class="Filters-button" @click="() => open = !open">
            <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45" class="Filters-svg"><path d="M400-240v-60h160v60H400ZM240-450v-60h480v60H240ZM120-660v-60h720v60H120Z"/></svg>
        </button>
        <div class="Filters-filters" :class="{ 'Filters-filters--open': open }">
            <SearchInput 
            @emitValue="emitName" 
            id="searchInput" 
            label="Producto: "/>
            <SelectInput 
            id="selectFamily" 
            label="Familia:" 
            name="famuly" 
            :options="family" 
            @emitChange="emitFamily"/>
            <SelectInput 
            id="selectType" 
            label="Tipo:" 
            name="type" 
            :options="type" 
            @emitChange="emitType"/>
            <PriceInput 
            label="Precio:" 
            @max-price="emitMaxPrice" 
            @min-price="emitMinPrice"/>
        </div>
    </aside>
</template> 
<script lang='ts' setup>
    import { ref } from 'vue';
    import SearchInput from '../../../components/Input/SearchInput.vue';
    import SelectInput from '../../../components/Input/SelectInput.vue';
    import PriceInput from '../../../components/Input/PriceInput.vue';

    const family: string[] = [
        'motog',
        'motoe',
        'edge'
    ]
    const type: string[] = [
        "smartphone",
        "tv",
        "accesories"
    ]

    // props define
    defineProps({
        name: {
            type: String
        },
        family: {
            type: String
        },
        type: {
            type: String
        },
        minPrice: {
            type: Number
        },
        maxPrice: {
            type: Number
        }
    })

    // emit define
    const emit = defineEmits<{
        'update:name': [value: string],
        'update:family': [family: string],
        'update:type': [type: string],
        'update:minPrice': [price: number],
        'update:maxPrice': [price: number]
    }>();

    // emits funtions
    function emitName(value: string){
        emit('update:name', value.toLocaleLowerCase().trim());
    }
    function emitFamily(value: string){
        emit('update:family', value.toLocaleLowerCase().trim());
    }
    function emitType(value: string){
        emit('update:type', value.toLocaleLowerCase().trim());
    }
    function emitMaxPrice(value: number){
        emit('update:maxPrice', value);
    }
    function emitMinPrice(value: number){
        emit('update:minPrice', value);
    }
    // menu filters
    const open = ref<boolean>(false);
</script>
<style lang='scss' scoped>
    .Filters{
        &-filters{
            display: grid;
            gap: 1.25rem;
            border-radius: .3125rem;
            overflow: hidden;
            height: 0;
            padding: 0;
            background-color: var(--white);
            transition: height .6s cubic-bezier(0.075, 0.82, 0.165, 1);
            @media screen and (min-width: 850px) {
                height: auto;
                padding: .9375rem .625rem;
            }
        }
        &-filters--open{
            height: auto;
            padding: .9375rem .625rem;
        }
        &-button{
            padding: .3125rem;
            cursor: pointer;
            @media screen and (min-width: 850px) {
                display: none;
            }
        }
        &-svg{
            fill: var(--black);
        }
    }
</style>