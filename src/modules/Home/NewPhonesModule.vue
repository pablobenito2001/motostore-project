<template>
    <TitleGlobal>Nuevo</TitleGlobal>
    <ColumnLayout>
        <NewPhoneCard 
        v-for="phone in NewPhone"
        :title="phone.title"
        :caption="phone.caption"
        :pictures="phone.pictures"
        :picture="phone.picture"
        :price="phone.price"
        />
    </ColumnLayout> 
</template>
<script lang='ts' setup>
    import TitleGlobal from '../../layouts/Global/TitleGlobal.vue';
    import ColumnLayout from '../../layouts/Home/ColumnLayout.vue';
    import NewPhoneCard from '../../components/Cards/NewPhoneCard.vue';

    import { useNewPhonesAdapter } from '../../composables/useNewPhonesAdapter';

    const NewPhone = await useNewPhonesAdapter('newPhones');
</script>
<style lang='scss' scoped>

</style>