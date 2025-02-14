<template>
    <div class="w-full h-full  text-[#2B2B2B] SF-TH overflow-hidden scrollContainer cursor-default">

        <sidebar>
            <CmsNavCms />
            <div class="p-4 sm:ml-64   bg-[#FAFBFF]">
                <div class="p-4 px-10 py-8   rounded-lg bg-white">
                    <div class="f-col">
                        <h class="text-sm text-[#BABABA] pb-2">Dashboard</h>
                        <h class="text-2xl text-[#1E1F21] SF-Bold">Dashboard</h>
                        <div class="border-t border-gray-300 my-4"></div>
                    </div>

                   
                        <div class="f-col gap-5 border-[1px]  rounded-xl text-[#6F6B6B] shadow-lg">
                            <div class="pt-5">
                                <h class="text-[#1E1F21] SF-TH-Semi text-xl p-5">ช่วงเวลา</h>
                            </div>
                            <div class="px-[6rem] space-y-5">
                                <!-- Title -->
                                <div class="flex items-center">
                                    
                                </div>

                                <!-- Link -->

                            </div>
                        </div>

                   


                </div>
            </div>

        </sidebar>




    </div>
</template>

<script setup>


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