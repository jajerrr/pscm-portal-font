<template>
  <div class="w-full h-[100dvh] relative overflow-y-hidden">
    <div class="absolute left-0 top-0 h-[100dvh] lg:w-full">
      <img
        src="assets/images/map-content/bg-main.png"
        alt="bg-metaverse"
        class="h-full max-h-full object-cover object-center max-w-none lg:w-full"
      />
      <img
        class="absolute left-10 top-10 max-w-[100px] max-h-[100px]"
        src="assets/images/map-content/mapbt.png"
      />
      <div
        class="absolute  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          :style="{
            width: Math.max(widthCal, heightCal) + 'px',
            height: Math.max(widthCal, heightCal) + 'px',
          }"
        >
          <div class="absolute top-0">
            <div class="absolute flex justify-center items-center z-10">
              <img
                src="/assets/images/map-content/bg-map-metaverse.png"
                class="mix-blend-plus-lighter w-[180px] h-auto max-w-none ml-[14px] mt-[-40px]"
                alt="bg-map-metaverse"
              />
            </div>

            <div class="absolute f-col justify-center items-center z-30">
              <button
                type="button"
                class="mb-3 f-col text-white w-[100px] h-[100px] bg-[#406aa0b9] hover:bg-[#4069A0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45px"
                  height="45px"
                  fill="currentColor"
                  class="bi bi-lightbulb flex justify-center w-full mb-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"
                  />
                </svg>
                <div class="f-col text-nm Inter-Regular mb-2">
                  <div>เข้าสู่</div>
                  <div>Metaverse</div>
                </div>
              </button>
              <img
                src="assets/images/map-content/poduim.png"
                class="max-w-none"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
