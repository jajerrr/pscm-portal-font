<template>
    <div class="f-col gap-5 border-[1px] border-[#DFDFDF] rounded-xl text-[#6F6B6B] h-screen">
        <div class="pt-5">
            <h class="text-[#1E1F21] SF-Semi text-xl p-5">General</h>
            <div class="border-t border-gray-300 my-4"></div>
        </div>
        <div class="px-[6rem] space-y-5">
            <!-- Title -->
            <div class="flex items-center">
                <label for="title" class="flex justify-end pr-5 text-sm w-[150px] required-label">Title:</label>
                <input v-model="type1.title" placeholder="Enter title" id="title"
                    class="w-full text-left p-1 border rounded-md focus:outline-none"></input>
            </div>

            <!-- Link -->

            <div class="flex items-center">
                <label for="link" class="flex justify-end pr-5 text-sm w-[150px] required-label">Link:</label>
                <input v-model="type1.link" placeholder="Enter Link" id="link"
                    class="w-full text-left p-1 border rounded-md focus:outline-none"></input>
            </div>

            <!-- Location -->
            <div class="flex items-center">
                <label class="flex justify-end pr-5 text-sm w-[150px] required-label">Location:</label>
                <img :src="type1.media" class="w-[50%] text-left p-1 mr-[8.5vw]" alt="">
            </div>

            <!-- Total Coins -->
            <div class="flex items-center">
                <label for="coin" class="flex justify-end pr-5 text-sm w-[150px] required-label">Total Coins:</label>
                <input type="number" id="coin" v-model="type1.totalCoins" placeholder="Enter total coins"
                    class="w-full text-left p-1 border rounded-md focus:outline-none" />
            </div>
            <div class="flex justify-end mt-4">
                <button @click="handleSubmit" class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useMediaHandler } from './stores/cmscontentzone.ts';

const { type1 } = useMediaHandler();

const handleSubmit = () => {
    console.log('Form Data:', type1.value);
};
</script>