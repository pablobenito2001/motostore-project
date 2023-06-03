<template>
    <div class="BranchCard">
        <div class="BranchCard-imageBox">
            <img :src="props.source" :alt="`${props.title}' image'`" class="Branch-image">
            <div class="BranchCard-titleBox">
                <h3 class="BranchCard-title">{{ props.title }}</h3>
            </div>
        </div>
        <div class="BranchCard-text">
            <p><slot /></p>
        </div>
    </div>
</template>
<script lang='ts' setup>
    interface Props{
        title: string;
        source: string;
    }

    const props = defineProps<Props>()
</script>
<style lang='scss' scoped>
    .BranchCard{
        --pdCard: 1.25rem; 
        padding: var(--pdCard);
        background-color: var(--white);
        @media screen and (max-width: 800px) {
            --pdCard: .625rem;
        }
        &-imageBox{
            position: relative;
        }
        &-image{
            width: 100%;
            height: 100%;
        }
        &-titleBox{
            display: inline-block;
            position: absolute;
            bottom: 0;
            right: 0;
            padding: .625rem;
            background-color: var(--white);
        }
        &-title{
            line-height: normal;
            font-weight: 600;
            font-size: 2.2em;
            color: var(--black);
        }
        &-text{
            font-family: var(--secundary-font);
            font-size: 1.5625em;
            font-weight: lighter;
            padding: .9375rem 0;
        }
    }
</style>