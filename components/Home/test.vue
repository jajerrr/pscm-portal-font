<template>
  <!-----------------------------------body-------------------------------------->

  <div class="w-full h-auto relative text-[#2B2B2B]  SF-TH">
    <!-----------------------------------navbar------------------------------------>

    <HomeNavbarSm />

    <!-----------------------------------first content ---------------------------->

    <div class="first-main-content">
      <div class="ml-[10%] mt-[20%]">
        <h1 class="Fredoka text-[70px] text-white font-semibold">METAVERSE</h1>

        <div class="flex items-center mt-[-50px]">
          <img
            src="assets/images/Rectangle 43068.svg"
            class="w-[10%] h-auto object-cover"
          />
          <h1 class="Fredoka text-[100px] text-white font-semibold">PSCM</h1>
        </div>

        <img
          src="assets/images/men01.png"
          class="absolute top-[13%] right-[18%] w-[25%] h-auto object-cover"
        />
        <img
          src="assets/images/women01.png"
          class="absolute top-[18%] right-[5%] w-[23%] h-auto object-cover"
        />
        <NuxtLink to="/">
          <button
            type="button"
            class="Fredoka font-semibold text-white bg-[#FF7A00] hover:bg-yellow-500 rounded-full text-[20px] px-[4%] py-[1%] text-center"
          >
            Get start
          </button>
        </NuxtLink>
      </div>

      <img
        src="assets/images/waveheader.svg"
        class="absolute bottom-0 w-full h-auto object-cover"
        alt=""
      />
    </div>

    <!---------------------------------- second content --------------------------->
    <div class="w-full h-auto relative">
      <div class="flex flex-col items-center justify-center mt-[10%]">
        <h class="text-[12px] text-[#FF7A00]">News</h>
        <div class="flex flex-glow justify-center w-full relative">
          <h1 class="text-[150%] SF-TH-Semi text-[#2B2B2B]">
            ข่าวสารประชาสัมพันธ์
          </h1>
          <button
            type="button"
            class="absolute right-[5%] SF-TH text-white bg-[#FF7A00] hover:bg-yellow-500 rounded-full text-[30%] px-[3%] py-[1%] flex items-center justify-center space-x-2"
          >
            <span>ดูทั้งหมด</span>
            <IconsUpRight />
          </button>
        </div>
        <IconsUnderline />
      </div>
      <img src="assets/images/zone2/Vector 88.svg" 
      class = "absolute w-[35%] h-auto object-cover mt-[-40px]"/>
      <!-------------------------------------------------- คอนเทนเนอร์ image  -------------------------------------->
      <div class="flex items-center justify-center">
        <div class="flex flex-row gap-[5%] mt-[5%]" style="max-width: 900px">
          <!-- คอนเทนเนอร์ left image  -->
          <div class="flex flex-col relative w-full h-auto">
            <!-- ******** -->
            <div class="flex relative h-auto SF-TH">
              <img
                src="assets/images/zone2/image 1561.png"
                class="w-full h-auto"
                alt="news image top"
              />
              <p
                class="absolute px-2 py-1 text-[7px] text-white top-[70%] left-[5%] bg-[#FF7A00] rounded-full"
              >
                มาใหม่ล่าสุด
              </p>
              <p
                class="absolute text-[10px] SF-TH-Semi text-white top-[80%] left-[5%]"
              >
                โครงการแลกเปลี่ยนเรียนรู้ Clinical Observership<br />สำหรับนักศึกษาแพทย์จากญี่ปุ่น
              </p>

              <IconsCalenderZone2-1 />
              <p class="absolute text-[2%] text-[#E2E2E2] left-[10%] top-[92%]">
                24 พ.ค. 2567
              </p>
            </div>
          </div>

          <!-- คอนเทนเนอร์ right image  -->

          <div class="flex flex-col w-full h-auto gap-5 SF-TH">
            <div class="flex items-center gap-10">
              <img
                src="assets/images/Rectangle 43142.jpg"
                class="w-[30%] h-auto"
                alt="news image1"
              />
              <div class="flex flex-col gap-2">
                <p
                  class="text-[#FF7A00] bg-[#FFEBD9] rounded-full text-[8px] px-2.5 py-1 w-[4rem]"
                >
                  มาใหม่ล่าสุด
                </p>
                <p class="text-[10%] SF-TH-Semi">
                  โครงการแลกเปลี่ยนเรียนรู้ Clinical Observership<br />สำหรับนักศึกษาแพทย์จากญี่ปุ่น
                </p>
                <div class="flex items-center">
                  <IconsCalenderZone22 />
                  <p class="text-[9%] text-[#797979] px-2">24 พ.ค. 2567</p>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-10">
              <img
                src="assets/images/Rectangle 43058.jpg"
                class="w-[30%] h-auto"
                alt="news image2"
              />
              <div class="flex flex-col gap-2">
                <p
                  class="text-[#FF7A00] bg-[#FFEBD9] rounded-full text-[8px] px-2.5 py-1 w-[4rem]"
                >
                  มาใหม่ล่าสุด
                </p>
                <p class="text-[10%] SF-TH-Semi">
                  โครงการแลกเปลี่ยนเรียนรู้ Clinical Observership<br />สำหรับนักศึกษาแพทย์จากญี่ปุ่น
                </p>
                <div class="flex items-center">
                  <IconsCalenderZone22 />
                  <p class="text-[9%] text-[#797979] px-2">24 พ.ค. 2567</p>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-10">
              <img
                src="assets/images/Rectangle 43143.jpg"
                class="w-[30%] h-auto"
                alt="news image3"
              />
              <div class="flex flex-col gap-2">
                <p
                  class="text-[#FF7A00] bg-[#FFEBD9] rounded-full text-[8px] px-2.5 py-1 w-[4rem]"
                >
                  มาใหม่ล่าสุด
                </p>
                <p class="text-[10%] SF-TH-Semi">
                  โครงการแลกเปลี่ยนเรียนรู้ Clinical Observership<br />สำหรับนักศึกษาแพทย์จากญี่ปุ่น
                </p>
                <div class="flex items-center">
                  <IconsCalenderZone22 />
                  <p class="text-[9%] text-[#797979] px-2">24 พ.ค. 2567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-----------------------------------third content ---------------------------->

    <div class="w-full h-auto  relative">
      <div class="flex flex-col ml-[15%] mt-[10%]">
        <li class="SF-TH-Semi text-[150%]">รอบรู้กับ</li>
        <p class="SF-TH-Semi text-[100%]">ราชวิทยาลัยจุฬาพรณ์</p>
      </div>

      <div class="flex items-center justify-center mt-[10%] mb-[10%]">
        <div class="flex justify-center items-stretch h-auto mt-[10%]">
          <div class="absolute w-1/2 mt-[-10%]">
            <div class="flex relative text-[#4D5986] SF-TH-Semi">
              <img
                src="assets/images/zone3/lift-zone3.svg"
                class="w-full h-auto absolute"
              />

              <div
                class="flex justify-center absolute w-full mt-[2%] z-10 SF-TH-Semi"
              >
                <button
                  type="button"
                  class="w-[6rem] h-[6rem] rounded-full flex items-center justify-center text-white shadow text-[10px]"
                  style="background: linear-gradient(127deg, #ffebd9, #ff7600)"
                >
                  ชั้น<br />03
                </button>
              </div>

              <div class="flex justify-center absolute w-full mt-[17%] z-10">
                <div class="w-1/2 flex items-center justify-center">
                  <button
                    type="button"
                    class="w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center bg-white shadow text-[10px]"
                  >
                    ชั้น<br />02
                  </button>
                </div>
                <div class="w-1/2 flex items-center justify-center">
                  <button
                    type="button"
                    class="w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center bg-white shadow text-[10px]"
                  >
                    ชั้น<br />04
                  </button>
                </div>
              </div>

              <div class="flex w-full mt-[30%] z-10">
                <div
                  class="flex w-1/5 justify-center"
                  style="display: flex; justify-content: flex-end"
                >
                  <button
                    type="button"
                    class="w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center bg-white shadow text-[10px]"
                  >
                    ชั้น<br />01
                  </button>
                </div>
                <div class="flex w-1/5 justify-center"></div>
                <div class="flex w-1/5 justify-center">
                  <h class="text-white text-3xl SF-TH-Semi">Floor</h>
                </div>
                <div class="flex w-1/5 justify-center"></div>

                <div
                  class="flex w-1/5 justify-center"
                  style="display: flex; justify-content: flex-start"
                >
                  <button
                    type="button"
                    class="w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center bg-white shadow text-[10px]"
                  >
                    ชั้น<br />05
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col relative w-full h-auto mt-[15%]"
            style="max-width: 900px"
          >
            <!-- ******** -->

            <div class="flex relative justify-center mt-[3%]">
              <div
                class="flex flex-col gap-4 top-[15%] right-5 absolute container-sm"
              >
                <div>
                  <img
                    class="h-auto w-[100px] rounded-lg"
                    src="assets/images/zone3/sm-photo.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto w-[100px] rounded-lg"
                    src="assets/images/zone3/sm-photo.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto w-[100px] rounded-lg"
                    src="assets/images/zone3/sm-photo.png"
                    alt=""
                  />
                </div>
                <div class="flex items-center justify-center">
                  <img
                    class="h-auto w-[100px] rounded-lg relative"
                    src="assets/images/zone3/morephoto.png"
                    alt=""
                  />
                  <p class="absolute text-white">+2</p>
                </div>
              </div>
              <div class="flex flex-col absolute top-[10%] left-[5%] gap-1">
                <p class="text-[20px] SF-TH-Semi">ห้องสโม</p>
                <p class="text-[15px]">กิจกรรมภายในห้อง</p>
                <div class="flex flex-row">
                  <div class="flex flex-col items-center justify-center">
                    <img
                      src="assets/images/iconzone3-1.svg"
                      class="w-[60%] h-auto"
                    />
                    <p class="text-[6px]">นิทรรศการอวัยวะ</p>
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <img
                      src="assets/images/iconzone3-2.svg"
                      class="w-[60%] h-auto"
                    />
                    <p class="text-[6px]">เรียนรู้อวัยวะต่างๆ</p>
                  </div>
                </div>
              </div>
              <img
                src="assets/images/zone3/room1-zone3.png"
                class="flex w-[50%] absolute"
              />
              <img src="assets/images/Rectangle-zone3.png" class="w-full" />
            </div>
          </div>
        </div>
      </div>
      <!-- <img
        src="assets/images/waveheader.svg"
        class="absolute top-0 w-full h-auto object-cover"
        alt=""
      /> -->
    </div>

    <!-----------------------------------forth content ---------------------------->

    <div class="w-full h-auto relative">
      <div class="flex flex-col items-center justify-center mb-[5%]">
        <h class="text-[12px] SF-Pro text-[#FF7A00]">Ranking</h>
        <div class="flex flex-glow justify-center w-full px-[10%]">
          <h class="text-[120%] SF-TH-Semi text-[#2B2B2B]">จัดอันดับคะแนน</h>
        </div>
        <IconsUnderline />
      </div>

      <!------------------------------------ card ranking --------------------------->
      <div
        class="flex relative justify-center SF-TH-Semi"
        style="padding-inline: 5%"
      >
        <div class="flex flex-row">
          <div class="flex z-30">
            <h
              class="text-[180px] text-[#F3F7FD] font-bold z-30 mt-[60px]"
              style="-webkit-text-stroke: 2px #ff7a00"
              >1</h
            >

            <div
              class="w-[150px] h-[200px] max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-[15px]"
              style="margin-left: -30px"
            >
              <div
                class="mx-auto w-[90px] h-[90px] relative mt-[15%] rounded-full overflow-hidden"
              >
                <img
                  class="object-cover object-center h-full"
                  src="assets/images/zone4/Group 1000003302.png"
                />
              </div>
              <div class="text-center mt-5">
                <h2 class="text-xl font-semibold">Nuttida P.</h2>
                <div class="flex justify-center gap-1">
                  <img
                    class="object-cover h-7"
                    src="assets/images/zone4/coin 9.png"
                  />
                  <h2 class="font-semibold text-[#FF7A00]">999</h2>
                </div>
              </div>
            </div>
          </div>

          <div class="flex ml-[-25px] z-[29]">
            <h
              class="text-[180px] text-[#F3F7FD] font-bold z-30 mt-[60px]"
              style="-webkit-text-stroke: 2px #ff7a00"
              >2</h
            >

            <div
              class="w-[150px] h-[200px] max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-[15px]"
              style="margin-left: -30px"
            >
              <div
                class="mx-auto w-[90px] h-[90px] relative mt-[15%] rounded-full overflow-hidden"
              >
                <img
                  class="object-cover object-center h-full"
                  src="assets/images/zone4/Group 1000003303.png"
                />
              </div>
              <div class="text-center mt-5">
                <h2 class="text-xl font-semibold">Nuttida P.</h2>
                <div class="flex justify-center gap-1">
                  <img
                    class="object-cover h-7"
                    src="assets/images/zone4/coin 9.png"
                  />
                  <h2 class="font-semibold text-[#FF7A00]">999</h2>
                </div>
              </div>
            </div>
          </div>

          <div class="flex ml-[-25px] z-[28]">
            <h
              class="text-[180px] text-[#F3F7FD] font-bold z-30 mt-[60px]"
              style="-webkit-text-stroke: 2px #ff7a00"
              >3</h
            >
            <div
              class="w-[150px] h-[200px] max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-[15px]"
              style="margin-left: -30px"
            >
              <div
                class="mx-auto w-[90px] h-[90px] relative mt-[15%] rounded-full overflow-hidden"
              >
                <img
                  class="object-cover object-center h-full"
                  src="assets/images/zone4/Group 1000003304.png"
                />
              </div>
              <div class="text-center mt-5">
                <h2 class="text-xl font-semibold">Nuttida P.</h2>
                <div class="flex justify-center gap-1">
                  <img
                    class="object-cover h-7"
                    src="assets/images/zone4/coin 9.png"
                  />
                  <h2 class="font-semibold text-[#FF7A00]">999</h2>
                </div>
              </div>
            </div>
          </div>

          <div class="flex ml-[-25px] z-[27]">
            <h
              class="text-[180px] text-[#F3F7FD] font-bold z-30 mt-[60px]"
              style="-webkit-text-stroke: 2px #ff7a00"
              >4</h
            >
            <div
              class="w-[150px] h-[200px] max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-[15px]"
              style="margin-left: -30px"
            >
              <div
                class="mx-auto w-[90px] h-[90px] relative mt-[15%] rounded-full overflow-hidden"
              >
                <img
                  class="object-cover object-center h-full"
                  src="assets/images/zone4/Group 1000003305.png"
                />
              </div>
              <div class="text-center mt-5">
                <h2 class="text-xl font-semibold">Nuttida P.</h2>
                <div class="flex justify-center gap-1">
                  <img
                    class="object-cover h-7"
                    src="assets/images/zone4/coin 9.png"
                  />
                  <h2 class="font-semibold text-[#FF7A00]">999</h2>
                </div>
              </div>
            </div>
          </div>

          <div class="flex ml-[-25px] z-[26]">
            <h
              class="text-[180px] text-[#F3F7FD] font-bold z-30 mt-[60px]"
              style="-webkit-text-stroke: 2px #ff7a00"
              >5</h
            >
            <div
              class="w-[150px] h-[200px] max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-[15px]"
              style="margin-left: -30px"
            >
              <div
                class="mx-auto w-[90px] h-[90px] relative mt-[15%] rounded-full overflow-hidden"
              >
                <img
                  class="object-cover object-center h-full"
                  src="assets/images/zone4/Group 1000003306.png"
                />
              </div>
              <div class="text-center mt-5">
                <h2 class="text-xl font-semibold">Nuttida P.</h2>
                <div class="flex justify-center gap-1">
                  <img
                    class="object-cover h-7"
                    src="assets/images/zone4/coin 9.png"
                  />
                  <h2 class="font-semibold text-[#FF7A00]">999</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-----------------------------------fiv content ---------------------------->

    <div class="w-full relative">
      <div class="flex flex-col items-center justify-center">
        <h class="text-[12px] text-[#FF7A00]">Media</h>
        <div class="flex flex-glow justify-center w-full px-[10%]">
          <h class="text-[150%] SF-TH-Semi text-[#2B2B2B]">สื่อวิดีโอ</h>
        </div>
        <IconsUnderline />
        <div class="flex w-full relative">
          <Swiper class="w-full h-full" :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperPagination]"
            :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
            rotate: 0,
            stretch:0,
            depth: 100,
            modifier: 3,
            slideShadows: true
          }
            " :pagination="true" :loop="true">
            <SwiperSlide v-for="(slide, idx) in slides2" :key="idx">
              <img src="assets/images/zone5/video frame.png" alt="" class="w-full max-h-full" />
            </SwiperSlide>

            <!-- useSwiper() within a swiper instance -->
            <SwiperControls />
            <div class="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>

    <!-----------------------------------six content ------------------------------>

    <div class="w-full h-auto relative mt-[5%]">
      <div class="flex flex-col items-center justify-center mb-[5%]">
        <h class="text-[12px] text-[#FF7A00] SF-TH">3D Learning object</h>
        <div class="flex flex-glow justify-center w-full px-[10%]">
          <h class="text-[150%] SF-TH-Semi text-[#2B2B2B]"
            >วิทยาลัยสร้างสรรค์</h
          >
        </div>
        <IconsUnderline />
      </div>

      <div class="flex justify-center items-center">
        <div
          class="flex w-1/2 justify-end items-center"
          v-for="(card, index) in detailCard"
          :key="index"
        >
          <div
            class="container h-full max-w-xl p-6 rounded-lg shadow"
            style="
              background: linear-gradient(
                280deg,
                rgb(255 255 255),
                rgb(232 220 254)
              );
            "
          >
            <div
              class="text-[#FF7A00] SF-TH-Semi mb-3 text-lg tracking-tight text-[#2B2B2B]"
            >
              {{ card.header }}
            </div>

            <div class="mb-3 SF-TH text-[#2B2B2B] text-xs">
              {{ card.desc }}
            </div>
          </div>
        </div>
        <div class="flex w-1/2 justify-center items-center">
          <img src="assets/images/zone6/heart_3d 1.png" class="w-[40%]" />
        </div>
      </div>
    </div>

    <!-----------------------------------seven content ---------------------------->
    <div class="w-full h-[600px] relative">
      <div class="flex flex-col items-center justify-center mb-[5%] mt-[5%]">
        <h class="text-[12px] SF-TH text-[#FF7A00]">Our service</h>
        <h1 class="text-[150%] SF-TH-Semi text-[#2B2B2B]">บริการของเรา</h1>
        <IconsUnderline />
      </div>

      <!----------------------------------------------------  card service  --------------------------------------------------------->
      <div class="flex items-center justify-center">
        <div class="flex flex-row space-x-5">
          <!-- <div>{{ card.header }}</div> -->
          <div
            class="relative w-1/3"
            v-for="(card, index) in serviceCard"
            :key="index"
          >
            <div
              class="container h-full max-w-sm p-6 bg-white border rounded-lg shadow"
            >
              <IconsZone7-1 v-if="card.icon == 1" />
              <IconsZone7-2 v-if="card.icon == 2" />
              <IconsZone7-1 v-if="card.icon == 3" />

              <div
                class="SF-TH-Semi mb-3 text-base tracking-tight text-[#2B2B2B]"
              >
                {{ card.header }}
              </div>

              <div class="mb-3 SF-TH text-[#2B2B2B] text-sm">
                {{ card.desc }}
              </div>
              <div class="flex w-full">
                <IconsAllowupright />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!----------------------------------footer content ---------------------------->
    <div class="w-full h-[30vw] bg-transparent relative overflow-hidden">
      <div>
        <img
          src="assets/images/wave-footer.svg"
          class="absolute bottom-0 w-full h-auto object-cover"
          alt=""
        />

        <div
          class="flex flex-glow justify-start w-full relative text-white mt-[10%]"
        >
          <div class="flex gap-[50px] ml-[10%]">
            <div class="flex flex-col gap-4">
              <img
                src="assets/images/pscm-logo.png"
                class="w-[50%]"
                alt="logo"
              />
              <h class="SF-Bold text-[25px]">CHULABHON HOSPITAL</h>
              <p class="SF-TH text-[13px]">
                โรงพยาบาลจุฬาภรณ์ CHULABHON HOSPITAL
              </p>
              <p class="SF-TH text-[13px]">
                906 ถ. กำแพงเพชร 6 แขวงตลาดบางเขน เขตหลักสี่<br />
                กรุงเทพมหานคร 10210
              </p>
            </div>

            <div class="flex flex-col gap-3 text-[13px] mt-[25px] SF-TH">
              <h class="SF-TH-Semi text-[20px]">เกี่ยวกับ</h>
              <p class="">e-learning</p>
              <p class="">คู่มือการใช้งาน</p>
              <p class="">คำถามที่พบบ่อย</p>
              <p class="">เกี่ยวกับเรา</p>
              <p class="">ติดต่อเรา</p>
            </div>

            <div class="flex flex-col gap-3 SF-TH text-[13px] mt-[25px]">
              <h class="SF-TH-Semi text-[20px]">ติดต่อเรา</h>
              <div class="flex flex-row gap-2">
                <img
                  src="assets/images/footer/calendar 1.png"
                  class="w-4 h-4"
                />
                <p class="">จันทร์-ศุกร์ : 08.30 - 16.30</p>
              </div>
              <div class="flex flex-row gap-2">
                <img src="assets/images/footer/mail 1.png" class="w-4 h-4" />
                <p class="">acfs.elearning@gmail.com</p>
              </div>
              <div class="flex flex-row gap-2">
                <img src="assets/images/footer/Vector.png" class="w-4 h-4" />
                <p class="">02-561-2277 ต่อ 1604-6</p>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col gap-3 mt-[25px] absolute right-[10%] text-white"
          >
            <h class="SF-Bold text-[20px] text-white">Follow us :</h>
            <div class="flex flex-row gap-2">
              <img
                src="assets/images/footer/Group 134602.png"
                class="w-7 h-7"
              />
              <img
                src="assets/images/footer/Group 134603.png"
                class="w-7 h-7"
              />
              <img
                src="assets/images/footer/Group 134604.png"
                class="w-7 h-7"
              />
              <img
                src="assets/images/footer/Group 134606.png"
                class="w-7 h-7"
              />
            </div>
          </div>
        </div>
        <img
          src="assets/images/footer/bottom.svg"
          class="absolute bottom-0 w-full h-auto object-cover"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const serviceCard = ref([
  {
    icon: 1,
    header: "บริการทางการศึกษา",
    desc: "ผลิตบัณฑิตที่มีความเป็นเลิศด้านวิชาการและวิชาชีพพร้อมบริการสังคมด้วยความรู้ความชำนาญคุณธรรมจริยธรรมและความมุ่งมั่น",
  },
  {
    icon: 2,
    header: "บริการทางการแพทย์และสาธารณะสุข",
    desc: "ทุกชีวิตของคนไข้คือหัวใจของเรา",
  },
  {
    icon: 3,
    header: "งานวิจัย นวัตกรรม และความร่วมมือ",
    desc: "บูรณาการงานวิจัยและเทคโนโลยีสู่นวัตกรรมเพื่อเศรษฐกิจสังคมและคุณภาพชีวิตที่ดีของประชาชน",
  },
]);

const slides = ref(
  Array.from({ length: 5 }, () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Figure out contrast color for font
    const contrast =
      r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";

    return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast };
  })
);

const slides2 = ref([
  "assets/images/image 1560.jpg",
  "assets/images/image 1575.jpg",
  "assets/images/image 1560.jpg",
  "assets/images/image 1575.jpg",
  "assets/images/image 1560.jpg",
  "assets/images/image 1575.jpg",
]);

const detailCard = ref([
  {
    header: "หัวใจ",
    desc: "เป็นอวัยวะกล้ามเนื้อซึ่งสูบเลือดทั่วหลอดเลือดไปยังส่วนต่างๆของร่างกายโดยการหดตัวเป็นจังหวะซ้ำ ๆ พบในสัตว์ทุกชนิดที่มีระบบไหลเวียนซึ่งรวมสัตว์มีกระดูกสันหลังด้วยหัวใจสัตว์มีกระดูกสันหลังนั้นประกอบด้วยกล้ามเนื้อหัวใจ และเนื้อเยื่อเกี่ยวพันเป็นหลัก กล้ามเนื้อหัวใจเป็นกล้ามเนื้อลายที่อยู่นอกเหนืออำนาจจิตใจ พบเฉพาะที่หัวใจ และทำให้หัวใจสามารถสูบเลือดได้",
  },
]);
</script>

<style>

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 100%;
  width: 50% !important;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
}

.swiper-pagination-bullet {
  margin-top: 10%;
  background: #e2e2e2;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background: #005194;
  opacity: 1;
}
.swiper-3d {
  perspective: 500px;
}
</style>
