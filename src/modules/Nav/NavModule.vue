<template>
    <nav class="Nav">
        <div class="Nav-container">
            <span class="Nav-branch">motostore</span>
            <div class="Nav-navigator">
                <div class="Nav-cartBox">
                    <img :src="shop" alt="cart icon" class="Nav-cart">
                    <span class="Nav-shops">0</span>
                </div>
                <ul class="Nav-linkBox">
                    <li class="Nav-link">Inicio</li>
                    <li class="Nav-link">Productos</li>
                    <li class="Nav-link">Exclusive</li>
                    <li class="Nav-link">Stores</li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script lang='ts' setup>
    import shop from '../../assets/svg/shop.svg'
</script>
<style lang='scss' scoped>
    .Nav{
        padding: 1.25rem 1.25rem;
        background-color: var(--white);
        min-width: 100%;
        position: fixed;
        top: 0;
        z-index: 5;
        &-container{
            max-width: 2100px;
            margin: auto;
            background-color: transparent;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &-branch{
            font-weight: 600;
            font-size: 1.875em;
            text-transform: lowercase;
        }
        &-navigator{
            display: flex;
            gap: 1.25rem;
        }
        &-linkBox{
            display: flex;
            gap: 1.25rem;
            justify-content: center;
            align-items: center;
        }
        &-link{
            font-size: 1em;
            cursor: pointer;
            text-transform: uppercase;
            transition: color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                color: var(--blue);
            }
        }
        &-cartBox{
            position: relative;
            cursor: pointer;
        }
        &-cart{
            max-width: 2.5rem;
        }
        &-shops{
            border-radius: 100%;
            padding: 3px 10px;
            color: var(--white);
            background-color: var(--blue);
            position: absolute;
            top: -0.625rem;
            right: -0.625rem;
        }
    }
</style>