<template>
    <TitleGlobal>Novedades</TitleGlobal>
    <ColumnLayout>
        <NewPhoneCard 
        v-for="phone in newPhones"
        :title="phone.title"
        :caption="phone.text"
        :pictures="phone.pictures"
        :picture="phone.picture"
        :price="phone.price"
        :code-name="phone.codename" />
    </ColumnLayout> 
</template>
<script lang='ts' setup>
    import TitleGlobal from '../../../layouts/Global/TitleGlobal.vue';
    import ColumnLayout from '../../../layouts/Global/ColumnLayout.vue';
    import NewPhoneCard from '../components/NewPhoneCard.vue';
    import { newPhones } from '../../../const/newPhones';
</script>
<style lang='scss' scoped>

</style>