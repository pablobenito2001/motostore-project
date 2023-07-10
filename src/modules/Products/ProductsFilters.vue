<template>
    <aside class="Filters">
        <div class="Filters-filters">
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
    import SearchInput from '../../components/Commons/SearchInput.vue';
    import SelectInput from '../../components/Commons/SelectInput.vue';
    import PriceInput from '../../components/Commons/PriceInput.vue';

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
</script>
<style lang='scss' scoped>
    .Filters{
        &-filters{
            display: grid;
            gap: 1.25rem;
            padding: .9375rem .625rem;
            border-radius: .3125rem;
        }
    }
</style>