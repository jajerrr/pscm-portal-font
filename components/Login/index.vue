<template>
    <div class="px-[60px] pt-[48px] text-[#140803]">
        <div class="flex flex-col">
            <div class="DB-Heavent-Bold text-[42px]">เข้าสู่ระบบ</div>
            <div class="DB-Heavent text-[#C3C3C3] text-[20px] mt-[-16px]">ยินดีต้อนรับ</div>
            <div class="flex flex-col DB-Heavent-Med mt-[20px]">
                <div class="text-[#140803] ">
                    <label for="user" class="block mb-2 text-[22px] font-medium text-gray-900">บัญชีผู้ใช้งาน</label>
                    <input type="text" id="user" v-model="loginForm.username"
                        class="DB-Heavent bg-gray-50 border border-gray-300 text-gray-900 text-[24px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="บัญชีผู้ใช้งาน" required />
                </div>
                <div class="text-[#140803] mt-[20px]">
                    <label for="password" class="block mb-2 text-[22px] font-medium text-gray-900">รหัสผ่าน</label>
                    <input type="password" id="password" v-model="loginForm.password"
                        class="DB-Heavent bg-gray-50 border border-gray-300 text-gray-900 text-[24px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="รหัสผ่าน" required />
                </div>
                <div class="flex justify-between mt-[14px]">
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ">
                        <label for="default-checkbox"
                            class="ms-2 font-medium text-gray-900 text-[22px]">จำรหัสผ่าน</label>
                    </div>
                    <div class="text-[22px] underline">
                        ลืมรหัสผ่าน?
                    </div>
                </div>
                <div>
                    <button @click="checkLogin"
                        class="w-full text-white text-xl bg-[#F26D20] hover:bg-[#DA5000] focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2">เข้าสู่ระบบ</button>
                </div>
                <div class="flex justify-center items-center text-[22px] mt-[20px]">
                    <div class="DB-Heavent text-[#C3C3C3]">ยังไม่ใช่สมาชิก? </div>
                    <NuxtLink to="/login/register" class="BD-Heavent-Med underline text-[#140803]"
                        @click="setDataRegister">สมัครสมาชิก
                    </NuxtLink>
                </div>
                <div class="flex justify-center items-center mt-[40px]">
                    <hr class="w-2/5">
                    <div class="w-1/5 flex justify-center text-[#C3C3C3] text-[18px]">or sign in with</div>
                    <hr class="w-2/5">
                </div>
                <div class="flex justify-around items-center mt-[20px]">
                    <button class="gsi-material-button rounded-full" @click="signInWithGoogle">
                        <div class="gsi-material-button-state"></div>
                        <div class="gsi-material-button-content-wrapper">
                            <div class="gsi-material-button-icon">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">
                                    <path fill="#EA4335"
                                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
                                    </path>
                                    <path fill="#4285F4"
                                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
                                    </path>
                                    <path fill="#FBBC05"
                                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
                                    </path>
                                    <path fill="#34A853"
                                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
                                    </path>
                                    <path fill="none" d="M0 0h48v48H0z"></path>
                                </svg>
                            </div>
                            <span class="gsi-material-button-contents DB-Heavent-Med">Sign in with Google</span>
                            <span class="DB-Heavent-Med" style="display: none;">Sign in with Google</span>
                        </div>
                    </button>
                    <button type="button" @click="loginWithGuest"
                        class="DB-Heavent-Med flex text-[22px] text-white bg-[#002F65] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-1 text-center items-center">
                        <IconsUser /> เข้าสู่ระบบแบบ
                        Guest
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useUserStore } from '@/stores/user';
import { useApiStore } from '@/stores/api';
import { useStatusStore } from '@/stores/status';

import CryptoJS from 'crypto-js';

const userStore = useUserStore();
const apiStore = useApiStore();
const statusStore = useStatusStore();
const { user, isAuthenticated } = userStore;
const router = useRouter();
const userId = ref(null)
const checkUserExists = ref(false)

const userFirebase = ref(null);
const loginForm = ref({
    username: '',
    password: ''
});
const ipHash = ref('');

const firebaseConfig = {
    apiKey: "AIzaSyAa_ZA5bVSIIoH73kd2LWGRQ_gxnfFrORE",
    authDomain: "pscm-metaverse.firebaseapp.com",
    projectId: "pscm-metaverse",
    storageBucket: "pscm-metaverse.appspot.com",
    messagingSenderId: "436793884328",
    appId: "1:436793884328:web:1062d561f039aa02620c9d",
    measurementId: "G-MCR0Z6Y5MF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const pathUrl = apiStore.project

const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        userFirebase.value = result.user.providerData[0];
        await setDataToUser(userFirebase.value, "social")
        const resultCheckUserExist = await checkUser()
        checkUserExists.value = resultCheckUserExist.data
        if (!checkUserExists.value) {
            router.push(`${pathUrl}login/register`)
        } else {
            userFirebase.value.displayName = checkUserExists.value.name
            await setDataToUser(userFirebase.value, "social")
            router.push(`${pathUrl}`)
        }
    } catch (error) {
        console.error('Error signing in:', error);
    }
};

const setDataToUser = async (data, type) => {
    userStore.setUser({
        uid: data.uid,
        username: "",
        name: data.displayName,
        email: data.email,
        phone: data.phoneNumber,
        gender: 0,
        birthdate: 0,
        affiliation: 0,
        courses: 0,
        notification: 0,
        interest: 0,
        animation: 0,
        photo: data.photoURL,
        typeLogin: type
    });
}

const setDataRegister = async () => {
    userStore.setUser({
        uid: "0",
        username: "",
        name: "",
        email: "",
        phone: "",
        gender: 0,
        birthdate: "",
        affiliation: 0,
        courses: 0,
        notification: 0,
        interest: 0,
        animation: 0,
        photo: "",
        typeLogin: "new",
    });
}

async function checkUser() {
    const fetchUserData = await $fetch(`${apiStore.apiUrl}/pscm/api/get/user`, {
        method: 'POST',
        body: {
            secretKey: "gdX5wNGrTcvxhlIsMkv0yBr1QiylU1Uq",
            userId: userFirebase.value.uid
        }
    })
    return fetchUserData;
}

const checkLogin = async () => {
    const fetchData = await $fetch(`${apiStore.apiUrl}/pscm/api/check/login`, {
        method: 'POST',
        body: {
            secretKey: "gdX5wNGrTcvxhlIsMkv0yBr1QiylU1Uq",
            username: loginForm.value.username,
            password: loginForm.value.password
        }
    })
    console.log(fetchData.status)
    if (fetchData.status) {
        userStore.setUser(fetchData.result)
        console.log(userStore)
        router.push(`${pathUrl}`)
    }
}


const fetchAndHashIp = async () => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ip = data.ip;
        const hash = CryptoJS.MD5(ip).toString();
        ipHash.value = hash;
    } catch (error) {
        console.error('Error:', error);
    }
};

const loginWithGuest = async () => {
    await fetchAndHashIp()
    // console.log(ipHash.value)
    const fetchData = await $fetch(`${apiStore.apiUrl}/pscm/api/check/login`, {
        method: 'POST',
        body: {
            secretKey: "gdX5wNGrTcvxhlIsMkv0yBr1QiylU1Uq",
            guest: ipHash.value
        }
    })
    console.log()
    fetchData.result.typeLogin = "guest";
    if (fetchData.status) {
        userStore.setUser(fetchData.result)
        statusStore.setWebGLStatus(false)
        statusStore.setWebGLAvatarStatus(true)
        router.push(`${pathUrl}`)
    }
}

</script>

<style lang="scss" scoped></style>