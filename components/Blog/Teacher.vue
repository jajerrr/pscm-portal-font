<template>
    <div class="w-full h-auto relative text-[#2B2B2B] SF-TH overflow-hidden scrollContainer cursor-default">
    <ELearningNav2 />
    <div class='w-full relative bg-gray-100 p-10'>
        <div class='w-full relative bg-white mt-[6.5vw] rounded-xl '>
            <div class="flex justify-between items-center pt-[2rem] ml-[5vw] mr-[5vw]"
                :class="{ 'max-h-[200px] overflow-y-auto': expandedIndex !== null }">
                <h1 class="text-nm SF-TH-Semi">กระดานสนทนาศิษย์เก่าและศิษย์ปัจจุบัน</h1>
                <NuxtLink to="/blog">
                <button type="button" class="  rounded-full  flex items-center space-x-[2rem]  px-3 py-2 hover:bg-[#ffe1c5] transition ease-in-out"
                    style="border-width: 2px; border-color:#FF7A00">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20px" height="20px">
                        <path fill="#FF7A00"
                            d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
                    </svg>
                    <span class="text-sm text-[#FF7A00]">กระทู้อาจารย์ในวิทยาลัยฯ</span>
                </button></NuxtLink>
            </div>

            <div class='flex mt-[1%] space-x-7 ml-[5vw]'>
                <button type="button" class="  rounded-full  flex items-center space-x-[1rem]  px-6 py-2 hover:bg-[#ffe1c5] transition ease-in-out"
                    style="border-width: 2px; border-color:#FF7A00">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px">
                        <path fill="#FF7A00"
                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                    <span class="text-sm text-[#FF7A00]">สร้างกระทู้</span>
                </button>
                <button type="butto" class=" rounded-full  flex items-center space-x-[1rem]  px-6 py-2 hover:bg-[#ffe1c5] transition ease-in-out"
                    style="border-width: 2px; border-color:#FF7A00">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20px" height="20px">
                        <path fill="#FF7A00"
                            d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
                    </svg>
                    <span class="text-sm text-[#FF7A00] ">กระทู้ของฉัน</span>
                </button>
            </div>



            <div v-for="(blog, index) in contentBlog" :key="index" @click="toggle(index)" :class="[
                'ml-[5vw] mr-[5vw] mt-[1%] px-6 py-4 rounded-xl cursor-pointer ',
                // expandedIndex === index ? 'bg-[#FFEED6] border-transparent' : 'bg-white'
            ]" style="border-width: 2px;">
                <div class="text-sm">
                    <!-- ส่วนแสดงเนื้อหาหลัก -->
                    <div class="flex justify-between items-center">
                        <div>
                            <h1 class="hover:underline SF-TH-Semi">{{ blog.header }}</h1>
                            <h2 class="mt-2">{{ blog.desc }}</h2>
                        </div>

                    </div>
                    <div class="flex justify-between">
                        <div class="flex  mt-4">
                            <div class="flex items-center">
                                <img :src="getContentImageSrc(blog.user)" class="w-[1.5vw] h-[1.5vw] rounded-full">
                                <h class="ml-2 SF-TH text-sm text-[#FF7A00]">{{ blog.name }}</h>
                            </div>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512"
                                    class="ml-4 ">
                                    <path fill="#B7B7B7"
                                        d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" />
                                </svg>
                                <h class="ml-2 text-[#B7B7B7] text-xs">{{ blog.date }}</h>
                            </div>

                        </div>
                        <div class="flex items-center space-x-4  mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="20px" height="20px">
                                <path fill="#FF7A00"
                                    d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
                            </svg>
                            <span class="text-[gray-500]"> {{ blog.comments.length }} ความคิดเห็น</span>
                        </div>
                    </div>
                </div>

                <!-- ส่วนเนื้อหาที่ขยาย -->
                <div v-if="expandedIndex === index" class="mt-4 border-t pt-4">
                    <!-- เนื้อหาเพิ่มเติม -->
                    <p>{{ blog.expandedContent }}</p>
                    <div class="scrollable-text">
                        <!-- แสดงคอมเมนต์ -->
                        <div v-for="(comment, cIndex) in blog.comments" :key="cIndex" class="flex mt-2 pl-[3%]">
                            <img :src="comment.userImage" class="w-[1.5vw] h-[1.5vw] rounded-full">
                            <div class="ml-4">
                                <h3 class="text-sm font-bold">{{ comment.user }}</h3>
                                <p class="text-sm text-gray-600">{{ comment.text }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- ฟอร์มเขียนคอมเมนต์ -->
                    <div class="mt-4" @click.stop>
                        <textarea v-model="newComment" placeholder="เขียนความคิดเห็น..."
                            class="w-full p-2 border rounded-md focus:outline-none"></textarea>
                            <div class='flex justify-end'>
                        <button @click.stop="submitComment(index)"
                            class="mt-2 bg-[#FF7A00]  text-white px-4 py-2 rounded-lg hover:bg-[#e36b00] transition ease-in-out">
                            ส่งความคิดเห็น
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="pb-[2rem]"></div>

        </div>
    </div>
    </div>
</template>

<script setup>

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

import { ref , computed} from 'vue';

const expandedIndex = ref(null);
// ฟังก์ชัน Toggle
const toggle = (index) => {
    expandedIndex.value = expandedIndex.value === index ? null : index;
};

// ฟังก์ชันสำหรับดึง Path ของรูปภาพ
const getContentImageSrc = (path) => path;
const newComment = ref("");
const commentCounts = computed(() =>
    contentBlog.value.map((blog) => blog.comments.length)
);
const totalComments = computed(() =>
    contentBlog.value.reduce((total, blog) => total + blog.comments.length, 0)
);


const contentBlog = ref([
    {
        header: "Let’s SAVE วิธีประหยัดพลังงานในมหาวิทยาลัย",
        desc: "เชิญชวนคณะอาจารย์ทุกท่าน มาร่วมกันแชร์วิธีประหยัดพลังงานในมหาวิทยาลัยกันครับ ",
        user: "/images/blog/profile.png",
        name: "NUTTIDA",
        date: "26 สิงหาคม 2566",
        comment: "15",
        comments: [
            {
                user: "wilawan.k",
                text: "ปิดแอร์ก่อนเลิกงานกลับบ้าน 30 นาทีค่ะ เป็นวิธีที่ทำมาตลอด",
                userImage: "/images/blog/profile.png",
            },
            {
                user: "Tam Tempo",
                text: "การลดการใช้พลังงานในอาคารช่วยลดค่าไฟได้ดีมาก",
                userImage: "/images/blog/profile.png",
            },
            {
                user: "wilawan.k",
                text: "ปิดแอร์ก่อนเลิกงานกลับบ้าน 30 นาทีค่ะ เป็นวิธีที่ทำมาตลอด",
                userImage: "/images/blog/profile.png",
            },
            {
                user: "Tam Tempo",
                text: "การลดการใช้พลังงานในอาคารช่วยลดค่าไฟได้ดีมาก",
                userImage: "/images/blog/profile.png",
            },
        ],
    },
    {
        header: "Let’s SAVE วิธีประหยัดพลังงานในมหาวิทยาลัย",
        desc: "การจะมีความฝันหรือว่าไม่มีความฝันไม่ใช่ทุกคนที่จ",
        user: "/images/blog/profile.png",
        name: "NUTTIDA",
        date: "22 สิงหาคม 2566",
        comment: "5",
        comments: [],
    },
    {
        header: "Let’s SAVE วิธีประหยัดพลังงานในมหาวิทยาลัย",
        desc: "การจะมีความฝันหรือว่าไม่มีความฝันไม่ใช่ทุกคนที่จ",
        user: "/images/blog/profile.png",
        name: "NUTTIDA",
        date: "21 สิงหาคม 2566",
        comment: "0",
        comments: [],
    },
    {
        header: "Let’s SAVE วิธีประหยัดพลังงานในมหาวิทยาลัย",
        desc: "การจะมีความฝันหรือว่าไม่มีความฝันไม่ใช่ทุกคนที่จ",
        user: "/images/blog/profile.png",
        name: "NUTTIDA",
        date: "21 สิงหาคม 2566",
        comment: "0",
        comments: [],
    },
    {
        header: "Let’s SAVE วิธีประหยัดพลังงานในมหาวิทยาลัย",
        desc: "การจะมีความฝันหรือว่าไม่มีความฝันไม่ใช่ทุกคนที่จ",
        user: "/images/blog/profile.png",
        name: "NUTTIDA",
        date: "21 สิงหาคม 2566",
        comment: "0",
        comments: [],
    },




]);

const submitComment = (index) => {
    if (newComment.value.trim() === "") {
        alert("กรุณาเขียนความคิดเห็นก่อนส่ง");
        return;
    }

    const newCommentObject = {
        user: "user0001",
        text: newComment.value,
        userImage: "/images/blog/profile.png",
    };

    contentBlog.value[index].comments.push(newCommentObject); // เพิ่มคอมเมนต์ในบล็อกที่เลือก
    contentBlog.value[index].comment = contentBlog.value[index].comments.length.toString(); // อัปเดตจำนวนคอมเมนต์
    newComment.value = ""; // ล้างข้อความหลังส่ง
};

</script>

<style>
textarea {
    resize: none;
}

.scrollable-text {
    max-height: 10rem;
    overflow-y: auto;
    line-height: 1.5em;
    background: transparent;
    border: none;
    scrollbar-width: none;
    /* สำหรับ Firefox */
}

.scrollable-text::-webkit-scrollbar {
    display: none;
    /* สำหรับ Chrome, Safari */
}
</style>