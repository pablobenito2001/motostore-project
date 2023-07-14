<template>
    <div class="ImputSearch">
        <label :for="props.id" class="InputSearch-label">{{ props.label }}</label>
        <input type="search" :id="props.id" class="InputSearch-input" @input="emitValue" placeholder="Ingrese el nombre de un producto.">
    </div>
</template>
<script lang='ts' setup>
    // props
    interface Props{
        label: string;
        id: string;
    }
    const props = defineProps<Props>();
    
    // emits
    const emit = defineEmits<{
        emitValue: [value: string]
    }>()
    function emitValue(e: Event){
        const value = e.target as HTMLInputElement;
        emit('emitValue', value.value);
    }
</script>
<style lang='scss' scoped>
    .InputSearch{
        &-input{
            width: 100%;
            padding: .9375rem 1.25rem;
            border: solid 1px var(--black);
            border-radius: .3125rem;
        }
        &-label{
            font-size: 1.1em;
            text-transform: uppercase;
            margin: 0 0 .3125rem 0;
        }
    }
</style>