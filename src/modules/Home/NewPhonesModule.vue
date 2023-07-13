<template>
    <TitleGlobal>Novedades</TitleGlobal>
    <span v-if="error">{{ error.message }}</span>
    <LoaderSections v-else-if="!loading"/>
    <ColumnLayout v-else>
        <NewPhoneCard 
        v-for="phone in data"
        :title="phone.title"
        :caption="phone.text"
        :pictures="phone.pictures"
        :picture="phone.picture"
        :price="phone.price"
        :code-name="phone.codename"
        />
    </ColumnLayout> 
</template>
<script lang='ts' setup>
    import TitleGlobal from '../../layouts/Global/TitleGlobal.vue';
    import ColumnLayout from '../../layouts/Home/ColumnLayout.vue';
    import NewPhoneCard from '../../components/Cards/NewPhoneCard.vue';
    import LoaderSections from '../../components/Loader/LoaderSections.vue';
    import { useNewProducts } from '../../composables/useNewProducts';

    const { data, error, loading } = useNewProducts()
</script>
<style lang='scss' scoped>

</style>