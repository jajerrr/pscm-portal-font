<template>
    <div
        class="w-full h-screen bg-[url(~/assets/images/cms/LoginCMS.jpg)] bg-no-repeat bg-cover bg-center object-cover relative ">
        <img id="background-video" class="w-screen h-screen absolute top-0 left-0 object-cover"
            src="~/assets/images/cms/LoginCMS.jpg">
</img>
        <div class="absolute w-full h-screen top-0 left-0 bg-[#1A171760] flex items-center justify-center">
            <div class="bg-[#ffffff] rounded-2xl flex" style="width: 60vw;">
                <div class="max-h-full w-[70%] ">
                    <img class="max-h-[700px] " src="~/assets/images/cms/Group 1000003501.png" alt="">
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