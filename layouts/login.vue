<template>
    <div
        class="w-full h-screen bg-[url(~/assets/images/prod-main-login-1.jpg)] bg-no-repeat bg-cover bg-center object-cover relative ">
        <video id="background-video" class="w-screen h-screen absolute top-0 left-0 object-cover" autoplay loop muted
            poster="~/assets/images/prod-main-login-1.jpg">
            <!-- <source src="~/assets/videos/Welcome_pscm.mp4" type="video/mp4"> -->
        </video>
        <div class="absolute w-full h-screen top-0 left-0 bg-[#1A171760] flex items-center justify-center">
            <div class="w-[1150px] h-[700px] bg-[#F8F8F8] rounded-2xl flex">
                <div class="max-h-full w-full overflow-hidden">
                    <img class="max-h-[700px]" src="~/assets/images/prod-main-login-slide-1.jpg" alt="">
                </div>
                <div class="h-full w-full">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>