<template>
  
    <div class="first-main-content sm " >
      
      <div class="z1-name-layout z1-name-layout-sm">
       
        <h1 class="z1-header z1-header-sm" >METAVERSE</h1>
        <div class="i-center mt-[-5vw] header2-sm">
          <img
            src="assets/images/Rectangle 43068.svg"
            class="w-[15%] h-auto object-cover line-sm"
          />
          <h1 class="z1-header2 z1-header2-sm">PSCM</h1>
        </div>


          <button
            type="button"
            class="bt-z1"
          >
            Get start
          </button>
     
<div style="display: flex;
  justify-content: flex-end;
  margin-right: 2%;">
          <button
            type="button"
            class="bt-z1-sm"
          >
            Get start
          </button></div>
        
      </div>
       
          <img
              src="assets/images/men01.png"
              class="img-men img-men-sm"
            />
            <img
              src="assets/images/women01.png"
              class="img-women img-women-sm"
            />
       
          <img
            src="assets/images/waveheader.svg"
            class="image-ab bottom-0 w-full"
            alt=""
          />
        
    </div>
   
</template>
<script>

import { onMounted, ref } from 'vue';

export default {
  setup() {
    const animatedElement = ref(null);

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const { bottom } = entry.boundingClientRect;
            const viewportHeight = window.innerHeight;
            
            // ตรวจสอบว่าตำแหน่ง bottom ของ element อยู่ที่ 20% ของ viewport หรือไม่
            if (bottom < viewportHeight * 0.8) {
              entry.target.classList.add('animate__fadeInUp'); // เพิ่มคลาสแอนิเมชัน
              observer.unobserve(entry.target); // หยุดการสังเกตถ้าไม่ต้องการให้แอนิเมชันเริ่มซ้ำ
            }
          }
        });
      }, {
        threshold: [0] // ใช้ threshold = 0 เพื่อให้เกิดการตรวจจับเมื่อมีการตัดผ่าน
      });

      if (animatedElement.value) {
        observer.observe(animatedElement.value);
      }
    });

    return {
      animatedElement
    };
  }
}


</script>
<style>
.bt-z1-sm{
  display: none;
}
@media (max-width:750px){
  .sm {
    width: 100%;
    height: 70vh;
    background: bg-image;
    position: relative;
    overflow:hidden;
}
  .z1-name-layout-sm{
    margin-top:13vh;
}
.z1-header-sm{
  font-size: 10vw;
  font-weight: 650;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}

.header2-sm{
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}
.z1-header2-sm{
  font-size: 14vw;
  font-weight: 650;
}
.line-sm{
  width:22%;
}
.img-men-sm{
  left:-5vw;
  width: 23vh;
  top:23vh;
}
.img-women-sm{
  left:20vw;
  width: 20vh;
  top:27vh;
}
.bt-z1-sm{
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}
.bt-z1{
  display: none;
}

}
</style>