<template>

    <div class="main-content second-main-content" id="zone2">

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

        <img src="assets/images/zone2/Vector 88.svg" class="image-ab w-[35%] mt-[-40px] hide" />




        <!-------------------------------------------------- คอนเทนเนอร์ image  -------------------------------------->

        <div class="f-center">
            <div v-for="(left, index) in ContentStore.mainContentData" :key="index"
                class="f-row  mt-[5%] card-container p-[5%]">

                <div class="f-col content-w-re card-item hide">
                    
                    <div class="content-re SF-TH cursor-pointer wrap">
                        <div class="">
                            <NuxtLink :to ="left.path">
                            <img :src="getContentImageSrc(left.img)" class="w-full h-[25vw]  inner-img" />
                       </NuxtLink> 
                    </div>
                        <div class="f-col gap-3 absolute mt-[40%] px-[5%]">
                            <p
                                class=" text-white  bg-[#FF7A00] rounded-full text-[13px] px-3 py-1 w-[4rem] hide text-center">
                                {{ left.toppic }}</p>
                            <div class="i-center sm-icon">
                                <p class="text-[15px]  px-2 text-white">{{ left.date }}</p>
                            </div>
                            <div class="text-container">
                                <p class="text-[15px] SF-TH-Semi text-white text-ellipsis   hover:underline">
                                    {{ left.content }}
                                </p>
                            </div>
                            <div class="i-center nm-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                    viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                        font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                        <g transform="scale(5.33333,5.33333)">
                                            <path
                                                d="M12.5,4c-2.4675,0 -4.5,2.0325 -4.5,4.5v31c0,2.4675 2.0325,4.5 4.5,4.5h23c2.4675,0 4.5,-2.0325 4.5,-4.5v-21c-0.00008,-0.3978 -0.15815,-0.77928 -0.43945,-1.06055l-0.01562,-0.01562l-12.98437,-12.98437c-0.28127,-0.2813 -0.66275,-0.43938 -1.06055,-0.43945zM12.5,7h11.5v8.5c0,2.4675 2.0325,4.5 4.5,4.5h8.5v19.5c0,0.8465 -0.6535,1.5 -1.5,1.5h-23c-0.8465,0 -1.5,-0.6535 -1.5,-1.5v-31c0,-0.8465 0.6535,-1.5 1.5,-1.5zM27,9.12109l7.87891,7.87891h-6.37891c-0.8465,0 -1.5,-0.6535 -1.5,-1.5zM17.5,25c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h13c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM17.5,32c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h9c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                                <p class="text-[15px]  px-2 text-white">{{ left.file }}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                    viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                        font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                        <g transform="scale(5.33333,5.33333)">
                                            <path
                                                d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,9.40661 -7.59338,17 -17,17c-9.40661,0 -17,-7.59339 -17,-17c0,-9.40661 7.59339,-17 17,-17zM22.47656,11.97852c-0.82766,0.01293 -1.48843,0.69381 -1.47656,1.52148v11c0.00008,0.3978 0.15815,0.77928 0.43945,1.06055l5,5c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-4.56055,-4.56055v-10.37891c0.00582,-0.40562 -0.15288,-0.7963 -0.43991,-1.08296c-0.28703,-0.28666 -0.67792,-0.44486 -1.08353,-0.43852z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                                <p class="text-[15px]  px-2 text-white">{{ left.time }}</p>


                            </div>
                        </div>
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
</script>

<style>
.img-wrapper {

    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 20px;
    /* border: 1px solid #000; */
    /* Optional */
}

.inner-img {
    transition: transform 0.3s ease;
}

.inner-img:hover {
    transform: scale(1.1);
}

.text-container {
    width: 50%;
    /* หรือกำหนดเป็น % หรือ px ตามขนาดที่ต้องการ */
    overflow: hidden;
}

.text-ellipsis {
    width: 80%;
    white-space: wrap;
    /* ไม่ให้ข้อความตัดบรรทัด */
    overflow: hidden;
    /* ซ่อนข้อความที่เกิน */
    text-overflow: ellipsis;
    /* แสดง ... เมื่อข้อความเกิน */
}

.card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}

.card-item {
    flex: 1 1 45%;
    min-width: 400px;
    margin-bottom: 15px;

}

.icons-underline-small {
    display: none;
}

.sm-icon {
    display: none;

}



@media (max-width: 650px) {
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
        width: 100%;
        margin-bottom: 15px;

    }



    .main-content img {
        width: 80%;
        height: auto;
        padding-inline: 10%;
    }

    .main-content img.no-style {
        width: 20rem;
        height: auto;
        padding-inline: 10%;
    }

    .main-content img.calender-style {
        width: 1rem;
        height: auto;
        padding-inline: 0%;
    }




    .small-button {
        position: relative;
        width: 50%;
        height: 7vw;
        margin-top: 15px;
        right: 0;
        justify-content: center;
        font-size: 3vw;
    }

    .small-view {
        flex-direction: column;
        align-items: center;

    }

    .icons-underline-normal {
        display: none;
    }

    .icons-underline-small {
        display: block;
    }

    .sm-icon {
        display: flex;
    }

    .nm-icon {
        display: none;
    }
}
</style>