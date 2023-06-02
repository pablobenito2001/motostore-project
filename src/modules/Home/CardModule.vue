<template>
    <CardWrapper>
        <BranchCard
        v-for="item in cards"
        :key="item.id"
        :title="item.title"
        :source="item.source"
        >{{ item.text }}</BranchCard>
    </CardWrapper>
</template>
<script lang='ts' setup>
    import CardWrapper from '../../layouts/Global/CardWrapper.vue';
    import BranchCard from '../../components/Cards/BranchCard.vue';

    const cards = [
        {
            id: 0,
            source: '/public/img/thinkshield_home.png',
            title: 'ThinkShield',
            text: 'Protege tus datos del malware, la suplantación de identidad y otras amenazas con ThinkShield para móviles.'
        },
        {
            id: 1,
            source: '/public/img/salpicaduras_home.png',
            title: 'Salpicaduras',
            text: 'Los equipos Motorola cuentan con la certificación IP58(o superior), que los protege de salpicaduras accidentales.'
        },
        {
            id: 2,
            source: '/public/img/exclusive_home.png',
            title: 'Exclusive',
            text: 'Con los equipos Motorola de la serie Razr o Edge, formas parte de Motorola Exclusive. Beneficios pensados para vos. '
        }
    ]
</script>
<style lang='scss' scoped>

</style>