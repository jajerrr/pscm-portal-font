<template>
    <div class="w-full h-[600px] bg-white mx-[10%] flex border-2">
        <div class="w-2/5 h-full bg-white border-r-2">
            <div v-for="(contact, index) in contacts" :key="index"
                :class="['contact-item', 'transition-colors', 'duration-300', { 'bg-gray-300': activeContact === index }]"
                @click="setActiveContact(index)">
                <div class="flex flex-col items-center justify-center">
                    <div class="text-[10px] w-[70px] flex items-center justify-center mb-1"> {{ contact.photo == 'main' ? 'Public Chat' : contact.photo ==
                'lib' ?
                'Group Chat' : 'Private Chat' }}</div>
                    <img class="w-[60px] h-[60px] rounded-full"
                        :src="contact.photo == 'main' ? 'images/room_main.png' : contact.photo == 'lib' ? 'images/room_lib.png' : contact.photo"
                        alt="" />
                </div>

                <span class="mx-[10px] flex w-full h-full items-center">{{ contact.name }}</span>
            </div>
        </div>
        <div class="w-3/5 h-full flex flex-col relative">
            <div class="w-full pt-5 pl-5 h-[80px] border-b-2">{{ activeContactData.name }}</div>
            <div class="absolute right-0" @click="statusStore.setChatStatus(false)">
                <IconsCloseContent />
            </div>
            <div class="w-full h-full pt-5 px-5 flex-grow overflow-y-auto">
                <div v-for="(message, index) in activeContactData.chatLog" :key="index"
                    :class="['flex items-start gap-2.5 mb-4', { 'justify-end': message.uid === userStore.uid }]">
                    <div :class="[
                'flex flex-col max-w-[320px] p-4 border-gray-200 ',
                message.uid === userStore.uid ? 'bg-blue-500 text-white rounded-ss-xl rounded-b-xl' : 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white rounded-e-xl rounded-es-xl'
            ]">
                        <div class="flex items-center space-x-2 rtl:space-x-reverse">
                            <span class="text-sm font-semibold">{{ message.name }}</span>
                            <span class="text-sm font-normal "
                                :class="[message.uid === userStore.uid ? 'text-gray-200' : 'text-gray-500 dark:text-gray-400']">{{
                message.time }}</span>
                        </div>
                        <p class="text-sm font-normal py-2.5">{{ message.message }}</p>
                    </div>
                </div>
            </div>
            <div class="w-full p-5 flex items-center border-t-2">
                <input v-model="newMessage" type="text" placeholder="Type a message..."
                    class="flex-grow p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                <button @click="sendMessage" class="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Send
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useUserStore } from '@/stores/user';
import { useStatusStore } from '@/stores/status';
import { useApiStore } from '@/stores/api';
import io from "socket.io-client";

const userStore = useUserStore();
const statusStore = useStatusStore();
const apiStore = useApiStore();

const socket = io(apiStore.socket, { transports: ['websocket'] });

const activeContact = ref(null);
const activeContactData = ref({
    name: '',
    img: '',
    chatLog: [],
});
const newMessage = ref('');


const contacts = reactive([]);

const setActiveContact = (index) => {
    activeContact.value = index;
    activeContactData.value = contacts[index];
};

const sendMessage = () => {
    if (newMessage.value.trim() !== '') {
        activeContactData.value.chatLog.push({
            uid: userStore.uid,
            message: newMessage.value,
            name: userStore.name,
            photo: userStore.photo,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
        let dataSendtoServer = { uid: userStore.uid, message: newMessage.value, roomId: activeContactData.value.roomId, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
        socket.emit("sendMessage", dataSendtoServer);
        newMessage.value = '';
    }
};

onMounted(async () => {
    socket.emit("getRoomUser", { uid: userStore.uid, photo: userStore.photo, name: userStore.name });
    const setDataChatLog = async (data) => {
        for (const chat of data) {
            contacts.push(chat)
        }
        setActiveContact(0)
    }
    const setDataNewChatLog = async (data) => {
        console.log(data)
        updateChatLog(contacts, data);
    }
    socket.on("getRoomUser", setDataChatLog)

    socket.on("sendMessage", setDataNewChatLog)
})
function updateChatLog(existingData, newData) {
    const roomToUpdate = existingData.find(room => room.roomId === newData.roomId);
    if (roomToUpdate) {
        roomToUpdate.chatLog = newData.chatLog;
    } else {
        existingData.push(newData);
    }
}

</script>

<style scoped>
.contact-item {
    @apply w-full h-[100px] py-2.5 border-b-2 border-gray-300 flex items-center pl-5;
}

.contact-item img {
    @apply w-[60px] h-[60px] rounded-full;
}

.contact-item span {
    @apply mx-[10px] flex w-full h-full;
}
</style>