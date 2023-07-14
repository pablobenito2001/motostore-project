<template>
    <div class="RadioInput">
        <input type="radio" :name="props.nameInput" :id="props.id" :value="props.value" class="RadioInput-input" @change="emitValue">
        <label :for="props.id" class="RadioInput-container" :class="$attrs.class">
            <span class="RadioInput-name">{{ props.value }}</span>
        </label>
    </div>
</template>
<script lang='ts' setup>
    interface Props {
        nameInput: string;
        label: string;
        id: string;
        value: string;
        selected: string;
    }   

    const props = defineProps<Props>(); 
    const emit = defineEmits<{
    (e: 'update:selected', value: string): void
    }>();

    function emitValue(e: Event): void{
        const element = e.target as HTMLInputElement;
        emit('update:selected', element.value);
    }
</script>
<style lang='scss' scoped>
    .RadioInput{
        display: inline-block;
        &-label{
            display: block;
            margin: 0 0 5px 0;
        }
        &-container{
            padding: .3125rem;
            border: solid 2px var(--black);
            border-radius: .3125rem;
            cursor: pointer;
            transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), border .6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover {
                border: solid 2px var(--blue);
            }
        }
        &-name{
            font-weight: 600;
            text-transform: capitalize;
        }
        &-input{
            display: none;
            width: 0;
            height: 0;
            &:checked + .RadioInput-container{
                background-color: var(--alpha-blue);
                border: solid 2px var(--blue);
            }
        }
    }
</style>