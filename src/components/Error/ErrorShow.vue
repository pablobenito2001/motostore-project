<template>
    <div class="Error">
        <div class="Error-message Error-text">{{ props.message }}</div>
        <div class="Error-cause Error-text">{{ props.cause }}</div>
    </div>
</template>
<script lang='ts' setup>
    interface Props{
        message: string;
        cause?: string;
    }

    const props = defineProps<Props>();
</script>
<style lang='scss' scoped>
    .Error{
        width: 100%;
        padding: 2.1875rem;
        &-text{
            line-height: 100%;
            text-align: center;
        }
        &-message{
            font-size: clamp(1.5em, 2.5vw,2.5em);
            margin: 0 0 .9375rem 0;
        }
        &-cause{
            font-size: 2em;
            font-weight: bolder;
        }
    }
</style>