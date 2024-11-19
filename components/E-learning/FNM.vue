<template>
  <div class="w-full h-auto  text-[#2B2B2B] SF-TH overflow-hidden scrollContainer ">
    <!-- Navbar -->

    <ELearningNav2 />


    <!-- Content Section -->
    <div class="cb-main-content ">
      <div class="cb-bg bg-cover">
        <!-- Image and Card Section -->
        <div class="f-row flex-wrap items-center justify-center  mr-[20%] sm-cb-top px-10 pt-[13rem]">
          <!-- Left Image Section with Transition -->
          <div class="flex justify-end ">
            <div class="transition-wrapper" :class="{ 'fade': isTransitioning }">
              <img :src="selectedImage" alt="Course Image" class="  w-[100vw] sm-img-cb-course h-full  transition-image"
                @load="isTransitioning = false" />
            </div>
          </div>

          <!-- Right Card Section -->
          <div class=" text-nm nm-card-cb sm-card-cb  max-w-[30%]  bg-white  shadow-lg">
            <!-- rounded-xl -->
            <h2 class="text-2xl font-bold mb-2 text-cb-card-ellipsis">{{ selectedCourse }}</h2>
            <p class="text-gray-700  mb-4">
              This course examines the carotid body (CB), a multimodal sensory organ located at the junction of the
              common
              carotid artery.
            </p>
            <!-- Course Details -->
            <div class="mb-4 sm-detail-cb">
              <p class="text-gray-600 font-bold">รายละเอียด</p>
              <ul class="text-gray-700  f-row list-none gap-2 mt-2 justify-center">
                <li class="e-toppic-card">
                  <img src="/images/e-learing/clock.png">
                  {{ selectedDuration }}
                </li>
                <li v-if="expandedIndex === null" class="e-toppic-card">

                  <img src="/images/e-learing/news.png">
                  {{ selectedTopic }}
                </li>
                <li class="e-toppic-card">
                  <img src="/images/e-learing/youtube.png">
                  {{ selectedVideo }}
                </li>
                <li class="e-toppic-card">
                  <img src="/images/e-learing/form.png">

                  {{ selectedTest }}
                </li>
              </ul>
            </div>
            <!-- Enter Course Button -->
            <button @click="openModal"
              class="bg-[#FF7A00] text-white w-full py-[2%] rounded-[40px] hover:bg-[#D14905] transition">
              เข้าเรียน
            </button>
          </div>
        </div>
      </div>
      <div class="px-[10rem] sm-topic-cb  relative mt-[5rem] pb-[5rem]">
        <h3 class="text-xl font-bold mb-4">หัวข้อ</h3>
        <div class="space-y-3">
          <!-- Each topic item -->
          <div v-for="(topic, index) in topics" :key="index"
            class="p-4 bg-[#f3f7fd69] hover:bg-[#F3F7FD] rounded-lg transition cursor-pointer flex flex-col"
            @click="toggleTopic(index, topic)">
            <div class=" flex justify-between items-center text-sm" @click="scrollToTop">
              <div class="flex items-center space-x-2">
                <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                    viewBox="0,0,256,256">
                    <g fill="#ff780a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                      stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                      font-family="none" font-weight="none" font-size="none" text-anchor="none"
                      style="mix-blend-mode: normal">
                      <g transform="scale(8.53333,8.53333)">
                        <path
                          d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21.707,12.707l-7.56,7.56c-0.188,0.188 -0.442,0.293 -0.707,0.293c-0.265,0 -0.52,-0.105 -0.707,-0.293l-3.453,-3.453c-0.391,-0.391 -0.391,-1.023 0,-1.414c0.391,-0.391 1.023,-0.391 1.414,0l2.746,2.746l6.853,-6.853c0.391,-0.391 1.023,-0.391 1.414,0c0.391,0.391 0.391,1.023 0,1.414z">
                        </path>
                      </g>
                    </g>
                  </svg></span>
                <p class="text-[#1E2A52] font-medium text-cb-ellipsis">{{ topic.name }}</p>
              </div>
              <span class="text-[#1E2A52]  flex items-center gap-2">
                {{ topic.duration }}
                <svg :class="{ 'rotate-180': expandedIndex === index }"
                  class="w-3 h-3 transition duration-300 text-[#005194]" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5 5 1 1 5" />
                </svg>
              </span>
            </div>

            <!-- Dropdown Content -->
            <div v-if="expandedIndex === index" class="mt-2 pl-6 space-y-1 cursor-default">
              <div v-for="(detail, detailIndex) in topic.details" :key="detailIndex"
                class="flex justify-between items-center">
                <div class="flex items-center space-x-5 text-gray-600 rounded-lg px-3 py-1 transition w-full">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                      viewBox="0,0,256,256">
                      <g fill="#ff780a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(5.33333,5.33333)">
                          <path
                            d="M24,4c-11.028,0 -20,8.972 -20,20c0,11.028 8.972,20 20,20c11.028,0 20,-8.972 20,-20c0,-11.028 -8.972,-20 -20,-20zM32.561,20.561l-10,10c-0.293,0.293 -0.677,0.439 -1.061,0.439c-0.384,0 -0.768,-0.146 -1.061,-0.439l-5,-5c-0.586,-0.586 -0.586,-1.535 0,-2.121c0.586,-0.586 1.535,-0.586 2.121,0l3.939,3.939l8.939,-8.939c0.586,-0.586 1.535,-0.586 2.121,0c0.586,0.586 0.587,1.535 0.002,2.121z">
                          </path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span v-if="detail.type === 'video'" class="w-[60%] flex gap-2  items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512">
                      <path fill="#5A5A5A"
                        d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                    </svg>วิดีโอ</span>
                  <span class="text-gray-600 text-sm w-[90%] text-right">{{ detail.text }}</span>
                </div>
              </div>

              <div v-for="(test, testIndex) in topic.test" :key="testIndex"
                class="text-nm flex justify-between items-center">
                <div class="flex items-center space-x-5 text-gray-600 rounded-lg px-3 py-1 transition w-full">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                      viewBox="0,0,256,256">
                      <g fill="#5A5A5A" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(5.33333,5.33333)">
                          <path
                            d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,9.40661 -7.59338,17 -17,17c-9.40661,0 -17,-7.59339 -17,-17c0,-9.40661 7.59339,-17 17,-17zM31.4707,17.98633c-0.38956,0.01135 -0.75941,0.17386 -1.03125,0.45313l-8.93945,8.93945l-3.93945,-3.93945c-0.37623,-0.39185 -0.9349,-0.54969 -1.46055,-0.41265c-0.52565,0.13704 -0.93616,0.54754 -1.07319,1.07319c-0.13704,0.52565 0.0208,1.08432 0.41265,1.46055l5,5c0.58579,0.58555 1.5353,0.58555 2.12109,0l10,-10c0.4429,-0.43135 0.57582,-1.09023 0.33479,-1.65955c-0.24103,-0.56932 -0.80665,-0.93247 -1.42463,-0.91467z">
                          </path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span v-if="test.type === 'quiz'" class="w-[60%] flex gap-2  items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15 " viewBox="0 0 512 512">
                      <path fill="#5A5A5A"
                        d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg>
                    แบบทดสอบ</span>
                  <span class="text-gray-600 text-sm w-[90%] text-right">{{ test.text }}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="px-[10rem] sm-topic-cb mt-[5rem] pb-[5rem]">
        <h3 class="text-xl font-bold mb-4">วิชาอื่นๆ</h3>
        <div class="e-cb-container f-row mt-[5%]">
          <div v-for="(left, index) in ContentStore.mainContentData" :key="index">

            <div v-if="index === 1" class="content-w-re card-item hide">

              <div class="content-re SF-TH cursor-pointer wrap">
                <NuxtLink :to="left.path">
                  <div class="text-[#5A5A5A] relative" style="align-content: center;">

                    <img :src="getContentImageSrc(left.img)"
                      class="w-auto h-[15vw] justify-center transition ease-in-out inner-img "
                      @click="openModal(left)" />
                    <div class="f-col gap-2 mt-[5%] w-[70%]">
                      <p class="text-[20px] SF-TH-Semi">
                        {{ left.toppic }}</p>
                      <div class="i-center sm-icon">
                        <p class="text-[15px]  px-2">{{ left.date }}</p>
                      </div>
                      <div class="text-container">
                        <p class="text-[15px] SF-TH-Semi text-cb-ellipsis   hover:underline" @click="openModal(left)">
                          {{ left.content }}
                        </p>
                      </div>
                      <div class="i-center nm-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                          viewBox="0,0,256,256">
                          <g fill="#5A5A5A" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                            font-family="none" font-weight="none" font-size="none" text-anchor="none"
                            style="mix-blend-mode: normal">
                            <g transform="scale(5.33333,5.33333)">
                              <path
                                d="M12.5,4c-2.4675,0 -4.5,2.0325 -4.5,4.5v31c0,2.4675 2.0325,4.5 4.5,4.5h23c2.4675,0 4.5,-2.0325 4.5,-4.5v-21c-0.00008,-0.3978 -0.15815,-0.77928 -0.43945,-1.06055l-0.01562,-0.01562l-12.98437,-12.98437c-0.28127,-0.2813 -0.66275,-0.43938 -1.06055,-0.43945zM12.5,7h11.5v8.5c0,2.4675 2.0325,4.5 4.5,4.5h8.5v19.5c0,0.8465 -0.6535,1.5 -1.5,1.5h-23c-0.8465,0 -1.5,-0.6535 -1.5,-1.5v-31c0,-0.8465 0.6535,-1.5 1.5,-1.5zM27,9.12109l7.87891,7.87891h-6.37891c-0.8465,0 -1.5,-0.6535 -1.5,-1.5zM17.5,25c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h13c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM17.5,32c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h9c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381z">
                              </path>
                            </g>
                          </g>
                        </svg>
                        <p class="text-[15px]  px-2">{{ left.file }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                          viewBox="0,0,256,256">
                          <g fill="#5A5A5A" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                            font-family="none" font-weight="none" font-size="none" text-anchor="none"
                            style="mix-blend-mode: normal">
                            <g transform="scale(5.33333,5.33333)">
                              <path
                                d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,9.40661 -7.59338,17 -17,17c-9.40661,0 -17,-7.59339 -17,-17c0,-9.40661 7.59339,-17 17,-17zM22.47656,11.97852c-0.82766,0.01293 -1.48843,0.69381 -1.47656,1.52148v11c0.00008,0.3978 0.15815,0.77928 0.43945,1.06055l5,5c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-4.56055,-4.56055v-10.37891c0.00582,-0.40562 -0.15288,-0.7963 -0.43991,-1.08296c-0.28703,-0.28666 -0.67792,-0.44486 -1.08353,-0.43852z">
                              </path>
                            </g>
                          </g>
                        </svg>
                        <p class="text-[15px]  px-2 ">{{ left.time }}</p>



                      </div>
                    </div>

                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

    <!-- Topics Section -->
    <!-- <div class="px-[10rem] sm-topic-cb  relative mt-[5rem] pb-[5rem]">
      <h3 class="text-xl font-bold mb-4">หัวข้อ</h3>
      <div class="space-y-3">
                <div v-for="(topic, index) in topics" :key="index"
          class="p-4 bg-[#f3f7fd69] hover:bg-[#F3F7FD] rounded-lg transition cursor-pointer flex flex-col"
          @click="toggleTopic(index, topic)">
          <div class=" flex justify-between items-center text-sm" @click="scrollToTop">
            <div class="flex items-center space-x-2">
              <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                  viewBox="0,0,256,256">
                  <g fill="#ff780a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <g transform="scale(8.53333,8.53333)">
                      <path
                        d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21.707,12.707l-7.56,7.56c-0.188,0.188 -0.442,0.293 -0.707,0.293c-0.265,0 -0.52,-0.105 -0.707,-0.293l-3.453,-3.453c-0.391,-0.391 -0.391,-1.023 0,-1.414c0.391,-0.391 1.023,-0.391 1.414,0l2.746,2.746l6.853,-6.853c0.391,-0.391 1.023,-0.391 1.414,0c0.391,0.391 0.391,1.023 0,1.414z">
                      </path>
                    </g>
                  </g>
                </svg></span>
              <p class="text-[#1E2A52] font-medium text-cb-ellipsis">{{ topic.name }}</p>
            </div>
            <span class="text-[#1E2A52]  flex items-center gap-2">
              {{ topic.duration }}
              <svg :class="{ 'rotate-180': expandedIndex === index }"
                class="w-3 h-3 transition duration-300 text-[#005194]" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5" />
              </svg>
            </span>
          </div>

          <div v-if="expandedIndex === index" class="mt-2 pl-6 space-y-1 cursor-default">
            <div v-for="(detail, detailIndex) in topic.details" :key="detailIndex"
              class="flex justify-between items-center">
              <div class="flex items-center space-x-5 text-gray-600 rounded-lg px-3 py-1 transition w-full">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                    <g fill="#ff780a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                      stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                      font-family="none" font-weight="none" font-size="none" text-anchor="none"
                      style="mix-blend-mode: normal">
                      <g transform="scale(5.33333,5.33333)">
                        <path
                          d="M24,4c-11.028,0 -20,8.972 -20,20c0,11.028 8.972,20 20,20c11.028,0 20,-8.972 20,-20c0,-11.028 -8.972,-20 -20,-20zM32.561,20.561l-10,10c-0.293,0.293 -0.677,0.439 -1.061,0.439c-0.384,0 -0.768,-0.146 -1.061,-0.439l-5,-5c-0.586,-0.586 -0.586,-1.535 0,-2.121c0.586,-0.586 1.535,-0.586 2.121,0l3.939,3.939l8.939,-8.939c0.586,-0.586 1.535,-0.586 2.121,0c0.586,0.586 0.587,1.535 0.002,2.121z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span v-if="detail.type === 'video'" class="w-[60%] flex gap-2  items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512">
                    <path fill="#5A5A5A"
                      d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                  </svg>วิดีโอ</span>
                <span class="text-gray-600 text-sm w-[90%] text-right">{{ detail.text }}</span>
              </div>
            </div>

            <div v-for="(test, testIndex) in topic.test" :key="testIndex"
              class="text-nm flex justify-between items-center">
              <div class="flex items-center space-x-5 text-gray-600 rounded-lg px-3 py-1 transition w-full">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                    <g fill="#5A5A5A" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                      stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                      font-family="none" font-weight="none" font-size="none" text-anchor="none"
                      style="mix-blend-mode: normal">
                      <g transform="scale(5.33333,5.33333)">
                        <path
                          d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,9.40661 -7.59338,17 -17,17c-9.40661,0 -17,-7.59339 -17,-17c0,-9.40661 7.59339,-17 17,-17zM31.4707,17.98633c-0.38956,0.01135 -0.75941,0.17386 -1.03125,0.45313l-8.93945,8.93945l-3.93945,-3.93945c-0.37623,-0.39185 -0.9349,-0.54969 -1.46055,-0.41265c-0.52565,0.13704 -0.93616,0.54754 -1.07319,1.07319c-0.13704,0.52565 0.0208,1.08432 0.41265,1.46055l5,5c0.58579,0.58555 1.5353,0.58555 2.12109,0l10,-10c0.4429,-0.43135 0.57582,-1.09023 0.33479,-1.65955c-0.24103,-0.56932 -0.80665,-0.93247 -1.42463,-0.91467z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span v-if="test.type === 'quiz'" class="w-[60%] flex gap-2  items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15 " viewBox="0 0 512 512">
                    <path fill="#5A5A5A"
                      d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                  แบบทดสอบ</span>
                <span class="text-gray-600 text-sm w-[90%] text-right">{{ test.text }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="px-[10rem] sm-topic-cb mt-[5rem] pb-[5rem]">
      <h3 class="text-xl font-bold mb-4">วิชาอื่นๆ</h3>
      <div class="e-cb-container f-row mt-[5%]">
        <div v-for="(left, index) in ContentStore.mainContentData" :key="index">

          <div v-if="index === 1" class="content-w-re card-item hide">

            <div class="content-re SF-TH cursor-pointer wrap">
              <NuxtLink :to="left.path">
                <div class="text-[#5A5A5A] relative" style="align-content: center;">

                  <img :src="getContentImageSrc(left.img)"
                    class="w-auto h-[15vw] justify-center transition ease-in-out inner-img " @click="openModal(left)" />
                  <div class="f-col gap-2 mt-[5%] w-[70%]">
                    <p class="text-[20px] SF-TH-Semi">
                      {{ left.toppic }}</p>
                    <div class="i-center sm-icon">
                      <p class="text-[15px]  px-2">{{ left.date }}</p>
                    </div>
                    <div class="text-container">
                      <p class="text-[15px] SF-TH-Semi text-cb-ellipsis   hover:underline" @click="openModal(left)">
                        {{ left.content }}
                      </p>
                    </div>
                    <div class="i-center nm-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                        viewBox="0,0,256,256">
                        <g fill="#5A5A5A" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                          stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                          font-family="none" font-weight="none" font-size="none" text-anchor="none"
                          style="mix-blend-mode: normal">
                          <g transform="scale(5.33333,5.33333)">
                            <path
                              d="M12.5,4c-2.4675,0 -4.5,2.0325 -4.5,4.5v31c0,2.4675 2.0325,4.5 4.5,4.5h23c2.4675,0 4.5,-2.0325 4.5,-4.5v-21c-0.00008,-0.3978 -0.15815,-0.77928 -0.43945,-1.06055l-0.01562,-0.01562l-12.98437,-12.98437c-0.28127,-0.2813 -0.66275,-0.43938 -1.06055,-0.43945zM12.5,7h11.5v8.5c0,2.4675 2.0325,4.5 4.5,4.5h8.5v19.5c0,0.8465 -0.6535,1.5 -1.5,1.5h-23c-0.8465,0 -1.5,-0.6535 -1.5,-1.5v-31c0,-0.8465 0.6535,-1.5 1.5,-1.5zM27,9.12109l7.87891,7.87891h-6.37891c-0.8465,0 -1.5,-0.6535 -1.5,-1.5zM17.5,25c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h13c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM17.5,32c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h9c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381z">
                            </path>
                          </g>
                        </g>
                      </svg>
                      <p class="text-[15px]  px-2">{{ left.file }}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                        viewBox="0,0,256,256">
                        <g fill="#5A5A5A" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                          stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                          font-family="none" font-weight="none" font-size="none" text-anchor="none"
                          style="mix-blend-mode: normal">
                          <g transform="scale(5.33333,5.33333)">
                            <path
                              d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,9.40661 -7.59338,17 -17,17c-9.40661,0 -17,-7.59339 -17,-17c0,-9.40661 7.59339,-17 17,-17zM22.47656,11.97852c-0.82766,0.01293 -1.48843,0.69381 -1.47656,1.52148v11c0.00008,0.3978 0.15815,0.77928 0.43945,1.06055l5,5c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-4.56055,-4.56055v-10.37891c0.00582,-0.40562 -0.15288,-0.7963 -0.43991,-1.08296c-0.28703,-0.28666 -0.67792,-0.44486 -1.08353,-0.43852z">
                            </path>
                          </g>
                        </g>
                      </svg>
                      <p class="text-[15px]  px-2 ">{{ left.time }}</p>



                    </div>
                  </div>

                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>


    </div> -->

    <!-- Footer -->
    <!-- <div id="zone8">
      <HomeFooter />
    </div> -->

    <teleport to="body">
      <div v-if="selectedContent" class="e-modal-overlay" @click="closeModal">

        <Video_elearning />

      </div>
    </teleport>



  </div>
</template>


<script setup>

import { ref, computed, watch, onBeforeUnmount } from 'vue';
import Video_elearning from './video_elearning.vue';
import { useELearnStore } from '@/stores/e-learn.ts';  // นำเข้า Pinia store


const ContentStore = useELearnStore();  // ใช้ store จาก Pinia
const getContentImageSrc = (imgPath) => {
  return imgPath;  // ใช้พาธที่กำหนดไว้ใน array
};
const selectedContent = ref(null);
const isModalOpen = ref(false);
const expandedIndex = ref(null);
const isTransitioning = ref(false);

const defaultCourse = 'CB';
const defaultDuration = '50 นาที';
const defaultVideo = '6 วิดีโอ';
const defaultTest = '6 แบบทดสอบ';
const defaultImage = '/images/e-learing/content1.jpg';

const selectedCourse = ref(defaultCourse);
const selectedDuration = ref(defaultDuration);
const selectedTopic = computed(() => `${topics.value.length} หัวข้อ`);
const selectedVideo = ref(defaultVideo);
const selectedTest = ref(defaultTest);
const selectedImage = ref(defaultImage);

const topics = ref([
  {
    name: 'Chest wall and anatomy of ventilation, Pleural cavity and lung 1',
    duration: '20 นาที',
    details: [{ type: 'video', text: '20 นาที' }],
    test: [{ type: 'quiz', text: '1 แบบทดสอบ' }],
    img_toppic: '/images/e-learing/content2.jpg',
  },
  {
    name: 'Chest wall and anatomy of ventilation, Pleural cavity and lung 2',
    duration: '16 นาที',
    details: [{ type: 'video', text: '16 นาที' }],
    test: [{ type: 'quiz', text: '1 แบบทดสอบ' }],
    img_toppic: '/images/e-learing/content1.jpg',
  },
  {
    name: 'Heart and its chambers, Muscle and blood vessels',
    duration: '30 นาที',
    details: [{ type: 'video', text: '30 นาที' }],
    test: [{ type: 'quiz', text: '1 แบบทดสอบ' }],
    img_toppic: '/images/e-learing/content2.jpg',
  },
  {
    name: 'Histology of lung',
    duration: '16 นาที',
    details: [{ type: 'video', text: '16 นาที' }],
    test: [{ type: 'quiz', text: '1 แบบทดสอบ' }],
    img_toppic: '/images/e-learing/content1.jpg',
  },
  {
    name: 'Heart and its chambers, Muscle and blood',
    duration: '10 นาที',
    details: [{ type: 'video', text: '10 นาที' }],
    test: [{ type: 'quiz', text: '1 แบบทดสอบ' }],
    img_toppic: '/images/e-learing/content2.jpg',
  },
  {
    name: 'Anatomy and Imaging- The heart, mediastinum, diaphragm and structures related to the posterior thoracic wall and vertebral column',
    duration: '16 นาที',
    details: [{ type: 'video', text: '16 นาที' }],
    test: [{ type: 'quiz', text: '1 แบบทดสอบ' }],
    img_toppic: '/images/e-learing/content1.jpg',
  },
]);



const openModal = (content) => {
  selectedContent.value = content;
  isModalOpen.value = true;
};

const closeModal = () => {
  selectedContent.value = null;
  isModalOpen.value = false;
};

watch(isModalOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('lock-scroll');
  } else {
    document.body.classList.remove('lock-scroll');
  }
});
onBeforeUnmount(() => {
  document.body.classList.remove('lock-scroll');
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Toggle function to expand only one topic at a time and update title and image
function toggleTopic(index, topic) {
  // Toggle the expanded index or reset if the same topic is clicked again
  if (expandedIndex.value === index) {
    expandedIndex.value = null;
    resetToDefaults();
  } else {
    expandedIndex.value = index;


    // Update course details based on the selected topic
    selectedCourse.value = topic.name;
    selectedImage.value = topic.img_toppic;
    selectedDuration.value = topic.duration;
    selectedVideo.value = topic.details.length > 0 ? topic.details[0].text : defaultVideo;
    selectedTest.value = topic.test.length > 0 ? topic.test[0].text : defaultTest;
  }
}

// Reset function to revert display values back to defaults
function resetToDefaults() {
  selectedCourse.value = defaultCourse;
  selectedDuration.value = defaultDuration;
  selectedVideo.value = defaultVideo;
  selectedTest.value = defaultTest;
  selectedImage.value = defaultImage;
}


</script>





<style>
.cb-bg {
  background-image: url("assets/images/e-learning/topbg.png");
}

.lock-scroll {
  overflow: hidden;
}

.transition-wrapper {
  position: relative;
}

.transition-image {
  transition: opacity 3.5s ease-in-out;
  opacity: 1;
}

.fade .transition-image {
  opacity: 0;
}

.rotate-180 {
  transform: rotate(180deg);
}

.e-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: url("/images/e-learing/video.jpg"); */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
}

.e-modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  width: 80%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.e-enter-button {
  margin-top: 1rem;
  background-color: #ff7a00;
  color: white;
  padding: 0.5rem 1.7rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.e-cb-container {
  /* display: grid; */
  /* grid-template-columns: repeat( minmax(300px, 1fr)); */
  gap: 3rem;
  /* justify-content: center; */
  width: 60%;
}

.text-cb-card-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  width: 80%;
  text-overflow: ellipsis;
}

.text-cb-ellipsis {
  white-space: wrap;
  overflow: hidden;
  width: 95%;
  text-overflow: ellipsis;
}


@media (max-width:1024px) {
  .sm-card-cb {
    position: relative;
    max-width: 100vw;
    right: 0;
    margin-top: -3%;
    border-radius: unset;

  }

  .sm-cb-top {
    margin: 0;
    padding-inline: 0;
    padding-top: 5rem;
  }

  .sm-topic-cb {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .sm-img-cb-course {
    width: 100vw;
  }

  .cb-bg {
    height: 100% !important;
  }
}

/* display: flex;
   flex-direction: column;
   align-items: center; */
</style>