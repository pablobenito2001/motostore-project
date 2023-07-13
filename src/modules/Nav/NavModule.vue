<template>
    <nav class="Nav" :class="$attrs.class">
        <div class="Nav-container">
            <div class="Nav-logo">
                <img :src="logo" alt="">
            </div>
            <div class="Nav-navigator">
                <div class="Nav-cartBox">
                    <router-link to="/cart">
                        <img :src="shop" alt="cart icon" class="Nav-cart">
                        <span class="Nav-shops">{{ shopLength }}</span>
                    </router-link>
                </div>
                <ul class="Nav-linkBox">
                    <li class="Nav-link"><RouterLink to="/">Inicio</RouterLink></li>
                    <li class="Nav-link"><RouterLink to="/products">Productos</RouterLink></li>
                    <li class="Nav-link"><RouterLink to="/exclusive">Exclusive</RouterLink></li>
                    <li class="Nav-link">Stores</li>
                </ul>
                <div class="Nav-menu" @click="() => open = !open">
                    <img :src="menu" alt="open menu" v-show="!open">
                    <img :src="exit" alt="close menu" v-show="open">
                </div>
            </div>
        </div>
       <Transition name="slide-fade">
            <NavMobileModal v-if="open" class="Nav-menu"/>
       </Transition>
    </nav>
</template>
<script lang='ts' setup>
    import NavMobileModal from '../../modules/Nav/NavMobileModal.vue';

    import { ref } from 'vue';
    import { useShopCart } from '../../store/useShopcCart';
    import { storeToRefs } from 'pinia';
    import logo from '../../assets/img/logo_moto.png';
    import shop from '../../assets/svg/shop.svg';
    import menu from '../../assets/svg/menu_open.svg';
    import exit from '../../assets/svg/menu_close.svg';

    const { shopLength } = storeToRefs(useShopCart());

    const open = ref<boolean>(false);
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
        &-logo{
            max-width: 2.5rem;
        }
        &-branch{
            font-weight: 600;
            font-size: clamp(.7em, 1.875vw, 1.875em);
            text-transform: lowercase;
        }
        &-navigator{
            display: flex;
            align-items: center;
            gap: 1.25rem;
        }
        &-linkBox{
            display: flex;
            gap: 1.25rem;
            justify-content: center;
            align-items: center;
            @media screen and (max-width: 850px){
                display: none;
            }
        }
        &-link{
            font-size: 1em;
            cursor: pointer;
            text-transform: uppercase;
            font-weight: 600;
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
        &-menu{
            display: none;
            @media screen and (max-width: 850px) {
                display: inline-block;
            }
        }
    }

    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
</style>