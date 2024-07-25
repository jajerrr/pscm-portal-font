<template>
    <div class="px-[60px] pt-[48px] text-[#140803]">
        <div class="flex flex-col">
            <div class="DB-Heavent-Bold text-[42px]">สมัครสมาชิก</div>
            <div class="DB-Heavent text-[#C3C3C3] text-[20px] mt-[-16px]">สมัครสมาชิกเพื่อเข้าสู่โลก</div>
            <div class="w-full h-[300px] overflow-y-scroll DB-Heavent-Med overflow-x-hidden">
                <div class="flex mx-[-5px] mt-[8px]">
                    <div class="text-[#140803] mx-[5px]">
                        <label for="f_name" class="block mb-2 text-[22px] font-medium text-gray-900">ชื่อ</label>
                        <input type="text" id="f_name" v-model="setDataUserNew.firstName"
                            class="DB-Heavent bg-gray-50 border border-gray-300 text-gray-900 text-[24px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="ชื่อ" required />
                    </div>
                    <div class="text-[#140803] mx-[5px]">
                        <label for="l_name" class="block mb-2 text-[22px] font-medium text-gray-900">นามสกุล</label>
                        <input type="text" id="l_name" v-model="setDataUserNew.lastName"
                            class="DB-Heavent bg-gray-50 border border-gray-300 text-gray-900 text-[24px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="นามสกุล" required />
                    </div>
                </div>
                <div class="flex w-full mt-[8px]">
                    <div class="text-[#140803] w-full">
                        <label for="name"
                            class="block mb-2 text-[22px] font-medium text-gray-900">บัญชีผู้ใช้งาน</label>
                        <input type="text" id="name" v-model="setDataUser.username"
                            class="w-full DB-Heavent bg-gray-50 border border-gray-300 text-gray-900 text-[24px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="บัญชีผู้ใช้งาน" required />
                    </div>
                </div>
                <div class="flex mx-[-5px] mt-[8px]">
                    <div class="text-[#140803] mx-[5px]">
                        <label for="password" class="block mb-2 text-[22px] font-medium text-gray-900">รหัสผ่าน</label>
                        <input type="password" id="password" v-model="setDataUserNew.password"
                            class="DB-Heavent bg-gray-50 border border-gray-300 text-gray-900 text-[24px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="รหัสผ่าน" required />
                    </div>
                    <div class="text-[#140803] mx-[5px]">
                        <label for="confirm_password"
                            class="block mb-2 text-[22px] font-medium text-gray-900">ยืนยันรหัสผ่าน</label>
                        <input type="password" id="confirm_password"
                            class="DB-Heavent bg-gray-50 border border-gray-300 text-gray-900 text-[24px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="ยืนยันรหัสผ่าน" required />
                    </div>
                </div>
                <div class="flex mx-[-5px] mt-[8px]">
                    <div class="text-[#140803] mx-[5px]">
                        <label for="phone"
                            class="block mb-2 text-[22px] font-medium text-gray-900">เบอร์โทรศัพท์</label>
                        <input type="text" id="phone" v-model="setDataUser.phone"
                            class="DB-Heavent bg-gray-50 border border-gray-300 text-gray-900 text-[24px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="เบอร์โทรศัพท์" required />
                    </div>
                    <div class="text-[#140803] mx-[5px]">
                        <label for="email" class="block mb-2 text-[22px] font-medium text-gray-900">อีเมล</label>
                        <input type="text" id="email" v-model="setDataUser.email"
                            :disabled="setDataUser.typeLogin === 'social'"
                            class="DB-Heavent bg-gray-50 border border-gray-300 text-gray-900 text-[24px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="อีเมล" required />
                    </div>
                </div>
                <div class="flex mx-[-5px] mt-[8px]">
                    <div class="text-[#140803] mx-[5px] w-full">
                        <label for="course" class="block mb-2 text-[22px] font-medium text-gray-900">หลักสูตร</label>
                        <select id="course" v-model="setDataUser.courses"
                            class="DB-Heavent bg-gray-50 border border-gray-300 text-gray-900 text-[24px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>หลักสูตร</option>
                            <option value="0">หลักสูตรแพทยศาสตรบัณฑิต
                                (หลักสูตรใหม่
                                พ.ศ. 2563)</option>
                            <option value=1>หลักสูตรวิทยาศาสตรมหาบัณฑิต
                                สาขาวิชาฟิสิกส์การแพทย์</option>
                            <option value=2>หลักสูตรวิทยาศาสตรมหาบัณฑิต
                                สาขาวิชาฟิสิกส์การแพทย์</option>
                            <option value=3>หลักสูตรวิทยาศาสตรบัณฑิต
                                สาขาวิชาวิทยาศาสตร์ข้อมูลสุขภาพ</option>
                        </select>
                    </div>
                    <div class="text-[#140803] mx-[5px] w-full">
                        <label for="affiliation" class="block mb-2 text-[22px] font-medium text-gray-900">สังกัด</label>
                        <select id="affiliation" v-model="setDataUser.affiliation"
                            class="DB-Heavent bg-gray-50 border border-gray-300 text-gray-900 text-[24px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>สังกัด</option>
                            <option value=0>
                                ราชวิทยาลัยจุฬาภรณ์</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="DB-Heavent mt-[16px]">
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ">
                    <label for="default-checkbox"
                        class="ms-2 font-medium text-gray-900 text-[22px]">ฉันได้อ่านและยอมรับข้อกำหนดและเงื่อนไข</label>
                </div>
            </div>
            <div>
                <button @click="commitData"
                    class="DB-Heavent-Med w-full text-white bg-[#F26D20] hover:bg-[#DA5000] focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xl px-5 py-2.5 me-2 mb-2">สมัครสมาชิก</button>
            </div>
            <div class="flex justify-center items-center text-[22px] mt-[20px] DB-Heavent-Med">
                <div class="DB-Heavent text-[#C3C3C3]">เป็นสมาชิกแล้ว? </div>
                <NuxtLink to="/login" class="BD-Heavent-Med underline text-[#140803]">เข้าสู่ระบบ
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">



import { useUserStore } from '@/stores/user';
import { useApiStore } from '@/stores/api';

const userStore = useUserStore();
const apiStore = useApiStore();

const router = useRouter();

const pathUrl = apiStore.project
const setDataUser = ref({
    uid: '',
    username: '',
    name: '',
    email: '',
    phone: '',
    gender: 0,
    birthdate: 0,
    affiliation: 0,
    courses: 0,
    notification: 0,
    interest: 0,
    animation: 0,
    photo: '',
    typeLogin: '',
});

const setDataUserNew = ref({
    firstName: "",
    lastName: "",
    password: "",
    hair: "hair_02",
    head: "head_american",
    suit: "student_male",
    hair_color: "6C6C6CFF",
    skin_color: "E5CBBAFF"
})

import {
    initAccordions,
    initCarousels,
    initCollapses,
    initDials,
    initDismisses,
    initDrawers,
    initDropdowns,
    initModals,
    initPopovers,
    initTabs,
    initTooltips,
    initInputCounters,
    initFlowbite,
} from 'flowbite';

onMounted(async () => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
    initInputCounters();
    initFlowbite();
    setDataUser.value = userStore;
    setDataUserNew.value.firstName = setDataUser.value.name.split(' ')[0]
    setDataUserNew.value.lastName = setDataUser.value.name.split(' ')[1]
})

const commitData = async () => {
    await $fetch(`${apiStore.apiUrl}/pscm/api/update/user`, {
        method: 'POST',
        body: {
            secretKey: "gdX5wNGrTcvxhlIsMkv0yBr1QiylU1Uq",
            userId: setDataUser.value.uid,
            username: setDataUser.value.username,
            name: setDataUserNew.value.firstName + " " + setDataUserNew.value.lastName,
            password: setDataUserNew.value.password,
            salt: 5678,
            email: setDataUser.value.email,
            phone: setDataUser.value.phone,
            gender: setDataUser.value.gender,
            birthyear: setDataUser.value.birthdate,
            affiliation: setDataUser.value.affiliation,
            courses: setDataUser.value.courses,
            notification: setDataUser.value.notification,
            interest: setDataUser.value.interest,
            animation: setDataUser.value.animation,
            photo: setDataUser.value.photo,
            hair: setDataUserNew.value.hair,
            head: setDataUserNew.value.head,
            suit: setDataUserNew.value.suit,
            hair_color: setDataUserNew.value.hair_color,
            skin_color: setDataUserNew.value.skin_color,
            typeLogin: setDataUser.value.typeLogin
        }
    })
    router.push(pathUrl)
}
</script>

<style lang="scss" scoped></style>