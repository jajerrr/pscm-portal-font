<template>
    <div class="w-full h-screen ">
        <div class="w-full h-[50%]">
            <swiper
            :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperPagination]"
            :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
                :coverflowEffect="{
                rotate: 0,
                stretch: -10,
                depth: 100,
                modifier: 3,
                slideShadows: true
            }" :pagination="true" :loop="true" :initialSlide="3"  class="mySwiper w-full h-full">
                <swiper-slide class="w-1/2 ">
                    <img class="w-full max-h-full" src="assets/images/image 1575.jpg" />
                </swiper-slide>
                <swiper-slide class="w-1/2 ">
                    <img class="w-full max-h-full" src="assets/images/image 1575.jpg" />
                </swiper-slide>
                <swiper-slide class="w-1/2 ">
                    <img class="w-full max-h-full" src="assets/images/image 1575.jpg" />
                </swiper-slide>
                <swiper-slide class="w-1/2 ">
                    <img class="w-full max-h-full" src="assets/images/image 1575.jpg" />
                </swiper-slide>
                <swiper-slide class="w-1/2 ">
                    <img class="w-full max-h-full" src="assets/images/image 1575.jpg" />
                </swiper-slide>
                <swiper-slide class="w-1/2 ">
                    <img class="w-full max-h-full" src="assets/images/image 1575.jpg" />
                </swiper-slide>
                <swiper-slide class="w-1/2 ">
                    <img class="w-full max-h-full" src="assets/images/image 1575.jpg" />
                </swiper-slide>
                <swiper-slide class="w-1/2 ">
                    <img class="w-full max-h-full" src="assets/images/image 1575.jpg" />
                </swiper-slide>
                <swiper-slide class="w-1/2 ">
                    <img class="w-full max-h-full" src="assets/images/image 1575.jpg" />
                </swiper-slide>
            </swiper>
        </div>
    </div>

</template>


<script setup>


<style scoped></style>