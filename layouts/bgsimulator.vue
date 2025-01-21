<template>
    <div class="bg-map  bg-mobile">
        <img src="~/assets/images/simulator/bgsimu.jpg" alt="" class="max-h-screen max-w-none overflow-x-scroll hide">

        <div class="w-full h-screen absolute flex justify-center items-center z-30">
            <div class="w-full h-screen absolute flex justify-center items-center z-30">
                <img src="assets/images/simulator/cardsimu.png" alt="" class="" />
            </div>

            <slot></slot>

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.bg-map {
    @apply bg-[url(~/assets/images/simulator/bgsimu.jpg)] bg-no-repeat bg-cover bg-center object-cover w-screen h-screen;
}

.hide {
    display: none;
}

@media (max-width: 1024px) {
    .bg-map {
        display: none;
    }

    .bg-mobile {
        display: block;
        width: 100%;
        height: 100dvh;

    }

    .hide {
        display: block;
    }

}
</style>