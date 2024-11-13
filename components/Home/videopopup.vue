<template>
    <div v-if="isModalOpen" class="modal-overlay z-[200]" @click="closeModal">
        <div class="modal-content" @click.stop>
             <button @click="closeModal" type="button"
                class="modal-close absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
             <video controls autoplay class="video-player">
                <source :src="currentVideo" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    currentVideo: String,
    isModalOpen: Boolean,
});

const emit = defineEmits(['close-modal']);

const closeModal = () => {
    emit('close-modal');
};
</script>


<style>
.lock-scroll {
    overflow: hidden;
}

/* Modal overlay should cover the entire screen */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* Full screen height */
    background:  rgba(0, 0, 0, 0.963);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    /* Ensure it's above other elements */
}

.modal-content {

    width: auto;
    overflow: hidden;

}

.video-player {
    width: 40vw;
    height: auto;
}

.modal-close {
    cursor: pointer;
}
</style>