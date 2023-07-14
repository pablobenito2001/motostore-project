<template>
    <div class="Select">
        <span class="Select-label">{{ props.label }}</span>
        <select :id="props.id" class="Select-select" @change="emitChange">
            <option value="all" class="Select-option" select>Todo</option>
            <option 
            v-for="(op, index) in options"
            :key="index"            
            :value="op"
            class="Select-option" >
                {{ op }}
            </option>
        </select>
    </div>
</template>
<script lang='ts' setup>
    interface Props{
        name: string;
        id: string;
        options: string[];
        label: string;
    }

    const props = defineProps<Props>(); 

    const emit = defineEmits<{
        emitChange: [value: string]
    }>()

    function emitChange(e: Event) {
        const elem = e.target as HTMLInputElement;
        emit('emitChange', elem.value);
    }
</script>
<style lang='scss' scoped>
    .Select{
        &-select{
            width: 100%;
            padding: .9375rem 1.25rem;
            border: solid 1px var(--black);
            border-radius: .3125rem; 
            text-transform: capitalize;
        }
        &-label{
            font-size: 1.1em;
            text-transform: uppercase;
            margin: 0 0 .3125rem 0;
        }
    }
</style> 