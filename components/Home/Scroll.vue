<template>
 
  <div class = 'content-sm' >
  <HomeZone3Sm />
  </div> 
 
  <div class="content-w-re content-nm mb-[30%]">
    <div class="f-col ml-[15%] mt-[15%] SF-TH-Semi">
      <li class="th-header">รอบรู้กับ</li>
      <p class="text-[1rem]">ราชวิทยาลัยจุฬาพรณ์</p>
    </div>

    <div class="f-center mt-[5%] mb-[20%] z-[13]" >
      <div class="j-center items-stretch h-auto mt-[10%]">
        <div class="absolute w-1/2 mt-[-10%]">
          
          <div class="f-re text-[#4D5986] SF-TH-Semi" style="max-width: 1800px">
            <img
              src="assets/images/zone3/lift-zone3.svg"
              class="image-full-ab"
            />

            <div class="j-center absolute w-full mt-[2%] z-10 SF-TH-Semi">
              <button
                type="button"
                class="w-[7vw] h-[7vw] z-3-bt text-white"
                style="background: linear-gradient(127deg, #ffebd9, #ff7600)"
              >
                ชั้น<br />03
              </button>
            </div>

            <div class="j-center absolute w-full mt-[17%] z-10">
              <div class="w-1/2 f-center">
                <button type="button" class="w-[5vw] h-[5vw] z-3-bt  hover:bg-[#ff9f44] ">
                  ชั้น<br />02
                </button>
              </div>
              <div class="w-1/2 f-center">
                <button type="button" class="w-[5vw] h-[5vw] z-3-bt  hover:bg-[#ff9f44] ">
                  ชั้น<br />04
                </button>
              </div>
            </div>

            <div class="flex w-full mt-[30%] z-10">
              <div class="j-center w-1/5" style="justify-content: flex-end">
                <button type="button" class="w-[5vw] h-[5vw] z-3-bt  hover:bg-[#ff9f44] ">
                  ชั้น<br />01
                </button>
              </div>
              <div class="j-center w-1/5"></div>
              <div class="j-center w-1/5">
                <h class="text-white text-[2vw] SF-TH-Semi">Floor</h>
              </div>
              <div class="j-center w-1/5"></div>

              <div class="j-center w-1/5" style="justify-content: flex-start">
                <button type="button" class="w-[5vw] h-[5vw] z-3-bt  hover:bg-[#ff9f44] ">
                  ชั้น<br />05
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="f-col image-full-re mt-[13vw] px-[5%]">
        

          <div class="relative j-center z-[10]">
            <div class="f-col top-[4vw] right-[3.5vw] absolute max-w-[7.5vw]">
              <div class="space-y-4">
                <img
                  class="img-z-3-col"
                  src="assets/images/zone3/sm-photo.png"
                  alt=""
                />
                <img
                  class="img-z-3-col"
                  src="assets/images/zone3/sm-photo.png"
                  alt=""
                />
                <img
                  class="img-z-3-col"
                  src="assets/images/zone3/sm-photo.png"
                  alt=""
                />
                <img
                  class="img-z-3-col"
                  src="assets/images/zone3/sm-photo.png"
                  alt=""
                />
                <div class="f-center">
                  <img
                    class="img-z-3-col relative"
                    src="assets/images/zone3/morephoto.png"
                    alt=""
                  />
                  <p class="absolute text-white">+2</p>
                </div>
              </div>
            </div>

            <div class="f-col absolute top-[10%] left-[5%] gap-1">
              <p class="text-[2vw] SF-TH-Semi">ห้องสโม</p>
              <p class="text-[1.5vw]">กิจกรรมภายในห้อง</p>
              <div class="f-row gap-5">
                <div class="f-col f-center">
                  <img
                    src="assets/images/iconzone3-1.svg"
                    class="w-[50%] h-auto"
                  />
                  <p class="text-[1vw]">นิทรรศการอวัยวะ</p>
                </div>
                <div class="f-col f-center">
                  <img
                    src="assets/images/iconzone3-2.svg"
                    class="w-[50%] h-auto"
                  />
                  <p class="text-[1vw]">เรียนรู้อวัยวะต่างๆ</p>
                </div>
              </div>
            </div>
            <img
              src="assets/images/zone3/room1-zone3.png"
              class="flex w-[45vw] absolute"
              alt="ห้อง"
            
            />
            <img src="assets/images/Rectangle-zone3.png" class="w-full" />
          </div>
        </div>
      </div>
    </div>
 
    <img
      src="assets/images/zone3/Vector 87.svg"
      class="image-full-ab top-[-10vw] z-[-1]"
      alt="wave-top"
    />
    <img
      src="assets/images/zone3/Clip path group.svg"
      class="image-ab top-[-25%] right-[-8%] w-[30%] z-[1]"
      alt="right"
    />

    <img
      src="assets/images/zone3/Group 1000003307.svg"
      class="image-ab top-[4%] left-[-28%] w-[55%] z-[1]"
      alt="left"
    />

    <img
      src="assets/images/zone3/Groupfloor.svg"
      class="image-full-ab bottom-[-6vw] z-[1]"
      alt="floor"
      
    />
  </div>
</template>

<style>

.content-sm{
    display:none;
  }
@media (max-width:700px) {

  .content-sm{
    display:contents;
  }
  .content-nm{
    display:none;
  }
  
}
</style>
