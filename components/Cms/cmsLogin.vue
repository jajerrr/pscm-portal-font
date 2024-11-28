<template>
    <NuxtLayout name="cmslogin">
        <div class="mt-[20%]">
            <div class="f-col">
                <div class="flex justify-center w-full h-full">
                    <h class="SF-Bold text-2xl">Welcome</h>
                </div>
                <div class="f-col" style="margin-left: 5vw;">


                    <div class="f-col gap-5 justify-center mt-[10%]">
                        <label for="username" class="flex  text-nm  required-label">Email:</label>
                        <input placeholder="Enter Email" type="text" id="username"
                            class="w-[70%] text-left p-1 border rounded-md focus:outline-none"></input>
                    </div>
                    <div class=" f-col gap-5 justify-center mt-[10%]">
                        <label for="password" class="flex  text-nm  required-label">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" required
                            class="w-[70%] text-left p-1 border rounded-md focus:outline-none">
                    </div>
                    <div class="f-col gap-5 justify-center  mt-[10%]">
                        <button class="w-[70%] p-3 bg-[#002F65] text-white SF-Bold rounded-md hover:bg-blue-600">
                            Login
                        </button>
                    </div>

                </div>
            </div>
        </div>

    </NuxtLayout>
</template>