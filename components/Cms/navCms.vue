<template>
    <div class="w-full h-full  text-[#2B2B2B] SF-TH overflow-hidden scrollContainer cursor-default">
        <nav class="top-0 left-0 fixed z-50 w-full bg-white text-white SF-TH ">
            <div class="flex p-3 space-x-3 justify-between items-center">
                <img src="assets/images/cms/logocms.png" class="w-[8vw] h-auto mr-auto pl-3" alt="logo">
                <div class="flex cursor-default items-center space-x-4">
                    <div class="f-col  text-[1vw]">
                        <p class="text-white text-sm bg-[#C25516] border-[#C25516] rounded-lg px-2 py-3">
                            metaverse.pscm@clicknect.com</p>
                    </div>
                    <img src="assets/images/e-learning/profile.png" class="cursor-pointer w-[2vw]">
                </div>
            </div>
        </nav>

        <sidebar>
            <aside class="fixed  left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
                <div class="h-full px-3 py-4 overflow-y-auto bg-[#C25516] ">
                    <ul class="space-y-2 font-medium pt-[10vh] text-white ">
                        <li>
                            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-[#ffa346]">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white"
                                    viewBox="0 0 22 21">
                                    <path
                                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path
                                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ms-3">Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-[#ffa346]">
                                <svg class="flex-shrink-0 w-5 h-5 transition duration-75" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 576 512">
                                    <path
                                        d="M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Files Libary</span>

                            </a>
                        </li>

                        <li>
                            <button type="button"
                                class="flex items-center w-full p-2 text-base transition duration-75 rounded-lg hover:bg-[#ffa346]"
                                @click="toggleDropdown">
                                <svg class="flex-shrink-0 w-5 h-5 transition duration-75" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512">
                                    <path
                                        d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z" />
                                </svg>
                                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    จัดการContent
                                </span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul v-show="isOpen" class="py-2 space-y-2" id="dropdown-example">
                                <li v-for="(zone, index) in ContentList" :key="index">
                                    <a href="#"
                                        class="hover:bg-[#ffa346] flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group">
                                        {{ zone.Room }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-[#ffa346]">
                                <svg class="flex-shrink-0 w-5 h-5 transition duration-75" fill='white'
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">จัดการฐานข้อมูลสมรรถณะ</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2  rounded-lg hover:bg-[#ffa346]">
                                <svg class="flex-shrink-0 w-5 h-5  transition duration-75" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 18">
                                    <path
                                        d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">จัดการช้อมูลผู้ใช้งาน</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-[#ffa346]">
                                <svg class="flex-shrink-0 w-5 h-5  transition duration-75" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 512">
                                    <path
                                        d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">จัดการเจ้าหน้าที่</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-[#ffa346] ">
                                <svg class="w-6 h-6text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z"
                                        clip-rule="evenodd" />
                                </svg>

                                <span class="flex-1 ms-3 whitespace-nowrap">Logs</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 rounded-lg group   hover:bg-[#ffa346]">
                                <svg class="flex-shrink-0 w-5 h-5transition duration-75" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512">
                                    <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 
                                    8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">การตั้งค่า</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="p-4 sm:ml-64 pt-[10vh] pb-[2vw]  bg-[#FAFBFF]">
                <div class="p-4 px-10 py-8   rounded-lg bg-white">
                    <div class="f-col">
                        <h class="text-sm text-[#BABABA] pb-8">Content Rooms</h>
                        <h class="text-2xl text-[#1E1F21] SF-Bold">Edit</h>
                        <div class="border-t border-gray-300 my-4"></div>
                    </div>



                    <!-- <div class="f-col gap-5 border-[1px] border-[#DFDFDF] rounded-xl text-[#6F6B6B] h-screen">
                            <div class="pt-5">
                                <h class="text-[#1E1F21] SF-Semi text-xl p-5">General</h>
                                <div class="border-t border-gray-300 my-4"></div>
                            </div>
                            <div class="px-[6rem] space-y-5">
                                <div class="flex items-center">
                                    <label class="flex justify-end pr-5 text-sm w-[150px] required-label">Title:</label>
                                    <textarea placeholder=""
                                        class="w-full text-left p-1 border rounded-md focus:outline-none"></textarea>
                                </div>

                                <div class="flex items-center">
                                    <label
                                        class="flex justify-end pr-5 text-sm w-[150px] required-label">Description:</label>
                                    <textarea placeholder=""
                                        class="w-full text-left p-1 border rounded-md focus:outline-none"></textarea>
                                </div>


                                <div class="flex items-center">
                                    <label class="flex justify-end pr-5 text-sm w-[150px] required-label">Link:</label>
                                    <textarea placeholder=""
                                        class="w-full text-left p-1 border rounded-md focus:outline-none"></textarea>
                                </div>
                                <div class="flex items-center">
                                    <label class="flex justify-end pr-5 text-sm w-[150px] required-label">Upload
                                        Media:</label>
                                    <div class="w-full flex">
                                        <label placeholder=""
                                            class="w-[50%] text-left p-1 border rounded-md focus:outline-none mr-[2rem]">
                                            <div v-if="preview" class="mt-4">
                                                <div v-if="mediaType === 'image'"
                                                    class="flex items-center justify-center">
                                                    <img :src="preview" class="w-full rounded-lg shadow-lg"
                                                        alt="Preview" />
                                                </div>
                                                <div v-if="mediaType === 'video'"
                                                    class="flex items-center justify-center">
                                                    <video :src="preview" class="w-full rounded-lg shadow-lg"
                                                        controls></video>
                                                </div>
                                            </div>

                                        </label>

                                        <label class="cursor-pointer flex items-center space-x-3">
                                            <span
                                                class="border-blue-600 border-2  hover:bg-blue-600 hover:text-white text-blue-600 text-sm py-1 px-3 rounded-lg text-center">
                                                Browse...
                                            </span>
                                            <input type="file" accept="image/*,video/*" @change="handleFileChange"
                                                class="hidden" />
                                        </label>

                                    </div>
                                </div>

                                <div class="flex items-center">
                                    <label
                                        class="flex justify-end pr-5 text-sm w-[150px] required-label">Location:</label>
                                    <lable placeholder="" class="w-auto text-left p-1  ">
                                        <img src="assets/images/cms/location.png"
                                            class="w-[50%] text-left p-1 mr-[8.5vw]" alt="">
                                    </lable>
                                </div>

                                <div class="flex items-center">
                                    <label class="flex justify-end pr-5 text-sm w-[150px] required-label">Total
                                        Coins:</label>
                                    <input type="number" placeholder=""
                                        class="w-full text-left p-1 border rounded-md focus:outline-none" />
                                </div>
                            </div>
                        </div> -->

                    <div class="grid grid-cols-2 mb-4 gap-4">
                        <!-- Dynamic Content -->
                        <div>
                            <component :is="getActiveComponent()" />
                        </div>

                        <!-- Sidebar Buttons -->
                        <div
                            class="f-col SF-Semi border-[1px] border-[#DFDFDF] ml-[25rem] rounded-xl text-white h-full">
                            <h class="text-xl p-5 text-[#2B2B2B]">Location Zone</h>
                            <div class="border-t border-gray-300"></div>
                            <button v-for="(item, index) in LocationList" :key="index" @click="setActive(index)" :class="[
                                'text-sm flex items-center space-x-[1rem] px-8 py-4 transition ease-in-out hover:bg-[#C25516] hover:text-white',
                                activeIndex === index
                                    ? 'bg-[#C25516] text-white'
                                    : 'bg-white text-[#2B2B2B]'
                            ]">
                                {{ item.zone }}
                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </sidebar>



        <div class="flex w-full border-t border-gray-300  bottom-0 h-[3.5vw] ">
            <div class='flex  space-x-7 ml-auto mr-[2vw] bg-[#FAFBFF] py-[10px]'>
                <button type="button"
                    class=" bg-white hover:bg-[#ff0000] text-sm text-[#6F6B6B]  hover:text-white border-[#DFDFDF] rounded-lg border-2 flex items-center space-x-[1rem]  px-6 py-2  transition ease-in-out">
                    Cancle
                </button>
                <button type="butto" 
                    class="bg-[#F5652E] hover:bg-[#7dd519] rounded-lg b-2 flex items-center space-x-[1rem]  px-6 py-2  transition ease-in-out">
                    <span class="text-sm text-white ">Save</span>
                </button>
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import CmsEditImg from '@/components/Cms/EditImg.vue';
import CmsEdit from '@/components/Cms/Edit.vue';

// สร้าง state สำหรับควบคุม dropdown
const isOpen = ref(false);

// ฟังก์ชัน toggle สำหรับเปิด/ปิด dropdown
const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const ContentList = ref([
    { Room: "ห้องกายวิภาค" },
    { Room: "ห้องกิจกรรม" },
    { Room: "ห้องผ่าตัด" },
    { Room: "ห้องเรียน" },
    { Room: "ห้องแลป" },
    { Room: "ห้องจุลทรรศน์" },
    { Room: "ห้องMMI" },
    { Room: "ห้องLobby" },


]);
const LocationList = ref([
    { zone: 'zone1' },
    { zone: 'zone2' },
    { zone: 'zone3' },
    { zone: 'zone4' },
]);
const activeIndex = ref(0);
const setActive = (index) => {
    activeIndex.value = index; // Update the active index
};
const getActiveComponent = () => {
    if (activeIndex.value === null) return null; // No active index
    return activeIndex.value % 2 === 0 ? CmsEditImg : CmsEdit; // Even => CmsEditImg, Odd => CmsEdit
};





</script>

<style>
nav {
    z-index: 50;
}

ul {
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.flex.items-center label {
    text-align: right;
    /* จัดข้อความให้ชิดขวา */
    white-space: nowrap;
    /* ป้องกันการตัดคำ */
}

.flex.items-center textarea,
.flex.items-center input {
    text-align: left;
    /* จัดข้อความให้ชิดซ้าย */
}

textarea,
input {
    overflow-wrap: break-word;
    word-wrap: break-word;
}

.required-label::after {
    content: '*';
    color: red;
    margin-left: 2px;
}
</style>