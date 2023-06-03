<template>
    <TitleGlobal>productos</TitleGlobal>
    <ColumnLayout>
        <Suspense>
            <GFamily />
            <template #fallback>
                <LoaderSections />
            </template>
        </Suspense>
        <Suspense>
            <EFamily />
            <template #fallback>
                <LoaderSections />
            </template>
        </Suspense>
        <Suspense>
            <EdgeFamily />
            <template #fallback>
                <LoaderSections />
            </template>
        </Suspense>
    </ColumnLayout>
</template>
<script lang='ts' setup>
    import TitleGlobal from '../../layouts/Global/TitleGlobal.vue';
    import ColumnLayout from '../../layouts/Home/ColumnLayout.vue';
    import GFamily from './Products/GFamily.vue';
    import EFamily from './Products/EFamily.vue';
    import EdgeFamily from './Products/EdgeFamily.vue';
    import LoaderSections from '../../components/Loader/LoaderSections.vue';
</script>
<style lang='scss' scoped>

</style>