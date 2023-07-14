<template>
    <header class="Header">
        <div class="Header-titleBox">
            <h1 class="Header-title Header-text">motostore</h1>
            <span class="Header-region Header-text">argentina</span>
        </div>
        <div class="Header-caption">
            <span class="Header-text">nuevo</span>
        </div>
        <div class="Header-new">
            <h2 class="Header-text Header-newPhone">motorola razr 40 ultra</h2>
            <video class="Header-video" autoplay muted loop poster="https://res.cloudinary.com/dxagsphno/image/upload/v1689283728/motostore/commons/Motorola_Razr_40_Ultra_pgutkq.jpg">
                <source src="/video/razr_40_ultra.mp4" type="video/mp4">
            </video>
        </div>
    </header>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Header{
        padding: var(--pad);
        background-color: var(--white);
        &-text{
            line-height: normal;
            text-transform: lowercase;
            font-weight: 700;
        }
        &-titleBox{
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        &-title{
            text-transform: uppercase;
            font-size: clamp(2.5em, 11.625vw, 11.625em);
        }
        &-region{
            font-size: 1.25em;
            @media screen and (max-width: 450px) {
                display: none;
            }
        }
        &-caption{
            padding: .3125rem 1.25rem;
            color: var(--white);
            background-color: var(--blue);
            display: inline-block;
            font-size: clamp(1em, 1.8vw, 1.8em);
        }
        &-newPhone{
            text-transform: uppercase;
            font-size: clamp(1.4em, 4.6875vw, 4.6875em);
            margin-bottom: .625rem;
        }
        &-video{
            width: 100%;
            min-height: 50rem;
            @media screen and (max-width: 850px){
                min-height: 25rem;
            }
        }
    }
</style>