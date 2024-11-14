<template>

    <div class="e-main-content second-main-content" id="zone2">

        <div class="col-center">
            <h class="header">Course</h>
            <div class="f-center flex-glow w-full relative small-view">
                <h1 class=" th-header">วิชาเรียน</h1>
                <div class="sm-icon">
                    <img src="assets/images/zone2/underline.png" class="no-style" />
                </div>
            </div>
            <div class="icons-underline-normal">
                <img src="assets/images/zone2/underline.png" class="w-[35vw]" />
            </div>

        </div>

        <!-- <img src="assets/images/zone2/Vector 88.svg" class="image-ab w-[35%] mt-[-40px] hide" /> -->




        <!-------------------------------------------------- คอนเทนเนอร์ image  -------------------------------------->

        <div class="e-container e-container-sm mt-[5%]">
            <div v-for="(left, index) in ContentStore.mainContentData" :key="index" class=" p-[5%]">

                <div class="content-w-re card-item ">

                    <div class="content-re SF-TH cursor-pointer wrap">
                        <NuxtLink :to="left.path">
                            <div class="text-[#5A5A5A] relative " style="align-content: center;">

                                <img :src="getContentImageSrc(left.img)"
                                    class="w-auto h-[20vw] justify-center transition ease-in-out inner-img "
                                    @click="openModal(left)" />

                                <!-- Modal Popup -->
                                <!-- <teleport to="body">
                                <div v-if="selectedContent" class="e-modal-overlay" @click="closeModal">
                                    <div class="relative e-modal-content" @click.stop>
                                        <img :src="getContentImageSrc(selectedContent.img)" class="w-full h-auto" />
                                        <div class="mt-[5%]">

                                            <h class="text-[#2B2B2B] text-[1.3vw] SF-Bold">{{ selectedContent.toppic }}
                                            </h>
                                            <p class="text-[#5A5A5A] SF-TH text-[1vw]">{{ selectedContent.content }}</p>

                                        </div>
                                        <div class="mt-[10%] flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20"
                                                height="20" viewBox="0,0,256,256">
                                                <g fill="#2b2b2b" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                    font-weight="none" font-size="none" text-anchor="none"
                                                    style="mix-blend-mode: normal">
                                                    <g transform="scale(5.33333,5.33333)">
                                                        <path
                                                            d="M12.5,4c-2.481,0 -4.5,2.019 -4.5,4.5v31c0,2.481 2.019,4.5 4.5,4.5h23c2.481,0 4.5,-2.019 4.5,-4.5v-19.5h-11.5c-2.481,0 -4.5,-2.019 -4.5,-4.5v-11.5zM27,4.87891v10.62109c0,0.827 0.673,1.5 1.5,1.5h10.62109zM17.5,25h13c0.828,0 1.5,0.672 1.5,1.5c0,0.828 -0.672,1.5 -1.5,1.5h-13c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.672,-1.5 1.5,-1.5zM17.49023,32h8.99609c0.828,0 1.5,0.671 1.5,1.5c0.001,0.759 -0.56292,1.38733 -1.29492,1.48633l-0.20312,0.01367h-8.99609c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.759 0.56292,-1.38733 1.29492,-1.48633z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <h class="text-[#2B2B2B] text-[1vw] SF-Bold ml-2">Topic</h>
                                        </div>
                                        <div class="flex justify-center mt-4">
                                            <NuxtLink :to="selectedContent.path"
                                                class="transition-all hover:bg-[#D14905] e-enter-button SF-TH text-[1vw]">
                                                เข้าเรียน

                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </teleport> -->
                                <div class="f-col gap-2 mt-[5%]">
                                    <p
                                        class=" text-[#FF7A00] bg-[#FFE7CE] rounded-full text-[13px] px-3 py-1 w-[4rem]  text-center">
                                        {{ left.toppic }}</p>
                                    <div class="i-center sm-icon">
                                        <p class="text-[15px]  px-2">{{ left.date }}</p>
                                    </div>
                                    <div class="text-container">
                                        <p class="text-[15px] SF-TH-Semi el-text-ellipsis   hover:underline"
                                            @click="openModal(left)">
                                            {{ left.content }}
                                        </p>
                                    </div>
                                    <div class="i-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                                            viewBox="0,0,256,256">
                                            <g fill="#5A5A5A" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                font-weight="none" font-size="none" text-anchor="none"
                                                style="mix-blend-mode: normal">
                                                <g transform="scale(5.33333,5.33333)">
                                                    <path
                                                        d="M12.5,4c-2.4675,0 -4.5,2.0325 -4.5,4.5v31c0,2.4675 2.0325,4.5 4.5,4.5h23c2.4675,0 4.5,-2.0325 4.5,-4.5v-21c-0.00008,-0.3978 -0.15815,-0.77928 -0.43945,-1.06055l-0.01562,-0.01562l-12.98437,-12.98437c-0.28127,-0.2813 -0.66275,-0.43938 -1.06055,-0.43945zM12.5,7h11.5v8.5c0,2.4675 2.0325,4.5 4.5,4.5h8.5v19.5c0,0.8465 -0.6535,1.5 -1.5,1.5h-23c-0.8465,0 -1.5,-0.6535 -1.5,-1.5v-31c0,-0.8465 0.6535,-1.5 1.5,-1.5zM27,9.12109l7.87891,7.87891h-6.37891c-0.8465,0 -1.5,-0.6535 -1.5,-1.5zM17.5,25c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h13c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM17.5,32c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h9c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                        <p class="text-[15px]  px-2">{{ left.file }}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                                            viewBox="0,0,256,256">
                                            <g fill="#5A5A5A" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                font-weight="none" font-size="none" text-anchor="none"
                                                style="mix-blend-mode: normal">
                                                <g transform="scale(5.33333,5.33333)">
                                                    <path
                                                        d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,9.40661 -7.59338,17 -17,17c-9.40661,0 -17,-7.59339 -17,-17c0,-9.40661 7.59339,-17 17,-17zM22.47656,11.97852c-0.82766,0.01293 -1.48843,0.69381 -1.47656,1.52148v11c0.00008,0.3978 0.15815,0.77928 0.43945,1.06055l5,5c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-4.56055,-4.56055v-10.37891c0.00582,-0.40562 -0.15288,-0.7963 -0.43991,-1.08296c-0.28703,-0.28666 -0.67792,-0.44486 -1.08353,-0.43852z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                        <p class="text-[15px]  px-2 ">{{ left.time }}</p>



                                    </div>
                                </div>

                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useELearnStore } from '@/stores/e-learn.ts';  // นำเข้า Pinia store

const ContentStore = useELearnStore();  // ใช้ store จาก Pinia

const getContentImageSrc = (imgPath) => {
    return imgPath;  // ใช้พาธที่กำหนดไว้ใน array
};

import { ref } from 'vue';

// Define the ref to store selected content for the modal
const selectedContent = ref(null);

// Method to open the modal and set selected content
function openModal(content) {
    selectedContent.value = content;
}

// Method to close the modal
// function closeModal() {
//     selectedContent.value = null;
// }
</script>

<style>
.inner-img {
    transition: transform 0.3s ease;
}

.inner-img:hover {
    transform: scale(1.1);
}


.el-text-ellipsis {
    white-space: wrap;
    overflow: hidden;
    /* width: 90%; */
    text-overflow: ellipsis;
}

.e-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 3rem;
    justify-content: center;
    padding: 1rem 6rem;

}



/* .card-item {
    flex: 1 1 45%;
    min-width: 400px;


} */

.icons-underline-small {
    display: none;
}

.sm-icon {
    display: none;

}



@media (max-width: 650px) {

    .e-container-sm {
        display: grid;
        grid-template-columns: repeat(1, minmax(350px, 1fr));
        padding-right: 5vw;
        justify-content: center;
        justify-items: center;
        gap: 0;
    }

    .card-container {
        flex-direction: column;
        align-items: center;


    }

    .card-item-order {
        flex-direction: column;
        align-items: center;
        gap: 5px;


    }

    .sm-text {
        position: relative;
        align-items: start;
        width: 60%;
        margin-top: 3%;
        gap: 0;



    }

    .hide {
        display: none;

    }

    .card-item {
        width: 80%;
        margin-bottom: 15px;

    }



    .e-main-content img {
        width: 100%;
        height: auto;

    }




    .small-view {
        flex-direction: column;
        align-items: center;

    }

    .icons-underline-normal {
        display: none;
    }



    .sm-icon {
        display: flex;
        justify-content: center
    }

    .nm-icon {
        display: none;
    }
}
</style>