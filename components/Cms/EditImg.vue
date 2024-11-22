<template>
    <div class="f-col gap-5 border-[1px] border-[#DFDFDF] rounded-xl text-[#6F6B6B] h-screen">
        <div class="pt-5">
            <h class="text-[#1E1F21] SF-Semi text-xl p-5">General</h>
            <div class="border-t border-gray-300 my-4"></div>
        </div>
        <div class="px-[6rem] space-y-5">
            <div class="flex items-center">
                <label for="title" class="flex justify-end pr-5 text-sm w-[150px] required-label">Title:</label>
                <input placeholder="Enter title" id="title" v-model="type2.title"
                    class="w-full text-left p-1 border rounded-md focus:outline-none"></input>
            </div>

            <div class="flex items-center">
                <label for="desc" class="flex justify-end pr-5 text-sm w-[150px] required-label">Description:</label>
                <input placeholder="Enter description" id="desc" v-model="type2.description"
                    class="w-full text-left p-1 border rounded-md focus:outline-none"></input>
            </div>


            <div class="flex items-center">
                <label for="link" class="flex justify-end pr-5 text-sm w-[150px] required-label">Link:</label>
                <input placeholder="Enter link" id="link" v-model="type2.link"
                    class="w-full text-left p-1 border rounded-md focus:outline-none"></input>
            </div>

            <div class="flex items-center">
                <label for="media" class="flex justify-end pr-5 text-sm w-[150px] required-label">Upload
                    Media:</label>
                <div class="w-full flex">
                    <label class="w-[80vw] text-left p-1 border rounded-md focus:outline-none mr-[2rem]">
                        <!-- <div v-if="preview" class="mt-4">
                                            <div v-if="mediaType === 'image'" class="flex items-center justify-center">
                                                <img :src="preview" class="w-full rounded-lg shadow-lg" alt="Preview" />
                                            </div>
                                            <div v-if="mediaType === 'video'" class="flex items-center justify-center">
                                                <video :src="preview" class="w-full rounded-lg shadow-lg"
                                                    controls></video>
                                            </div>
                                        </div> -->

                        <div v-if="type2.mediaPreview" class="mt-4">
                            <img v-if="type2.mediaType === 'image'" :src="type2.mediaPreview" alt="Preview"
                                class="w-full rounded-lg shadow-lg" />
                            <video v-if="type2.mediaType === 'video'" :src="type2.mediaPreview" controls
                                class="w-full rounded-lg shadow-lg"></video>
                        </div>

                    </label>
                    <input type="file" @change="handleFileChange" />
                </div>
            </div>

            <div class="flex items-center">
                <label class="flex justify-end pr-5 text-sm w-[150px] required-label">Location:</label>
                <lable placeholder="" class="w-auto text-left p-1  ">
                    <img src="assets/images/cms/location.png" class="w-[50%] text-left p-1 mr-[8.5vw]" alt="">
                </lable>
            </div>

            <div class="flex items-center">
                <label for="coin" class="flex justify-end pr-5 text-sm w-[150px] required-label">Total
                    Coins:</label>
                <input type="number" placeholder="Enter Total coins" id="coin"
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

const { type2, setMedia } = useMediaHandler();

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        setMedia(2, file);
    }
};

const handleSubmit = () => {
    console.log('Form Data:', type2.value);
};
</script>