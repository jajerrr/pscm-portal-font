<template>
    <div class="w-full h-full  text-[#2B2B2B] SF-TH overflow-hidden scrollContainer cursor-default">
       
        <sidebar>
            <CmsNavCms />
            <div class="p-4 sm:ml-64   bg-[#FAFBFF]">
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