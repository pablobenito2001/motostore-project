<template>
    <header class="Header">
        <div class="Header-container">
            <div class="Header-titleBox">
                <h1 class="Header-title Header-text">motostore</h1>
                <span class="Header-region Header-text">argentina</span>
            </div>
            <div class="Header-caption">
                <span class="Header-text">nuevo</span>
            </div>
            <div class="Header-new">
                <h2 class="Header-text Header-newPhone">motorola edge 40 pro</h2>
                <video class="Header-video" autoplay muted loop>
                    <source src="/video/edge_40_pro_max.mp4" type="video/mp4" media="(max-width: 800px)">
                    <source src="/video/edge_40_pro_min.mp4" type="video/mp4" media="(max-width: 450px)">
                </video>
            </div>
        </div>
    </header>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Header{
        padding: var(--pad);
        background-color: var(--white);
        &-container{
            max-width: 120rem;
            margin: auto;
            background-color: transparent;
        }
        &-text{
            line-height: normal;
            text-transform: lowercase;
        }
        &-titleBox{
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        &-title{
            font-size: 11.625em;
        }
        &-region{
            font-size: 1.25em;
        }
        &-caption{
            padding: .3125rem 1.25rem;
            color: var(--white);
            background-color: var(--blue);
            display: inline-block;
            font-size: 1.8em;
        }
        &-newPhone{
            font-size: 4.6875em;
        }
        &-video{
            width: 100%;
            min-height: 800px;
            object-fit: cover;
        }
    }
</style>