<template>
    <div class="RadioInput">
        <input type="radio" :name="props.nameInput" :id="props.id" :value="props.value" class="RadioInput-input">
        <label :for="props.id" class="RadioInput-container">
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
    }   

    const props = defineProps<Props>();
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
            border: solid 2px var(--blue);
            border-radius: .3125rem;
            cursor: pointer;
            transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover {
                background-color: var(--alpha-blue);
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
            }
        }
    }
</style>