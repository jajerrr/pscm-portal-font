<template>
  
    <div class="first-main-content sm">
  
    <div class="video-bg bg-image"></div>
     
      
      <div class="z1-name-layout z1-name-layout-sm animate__animated animate__fadeInUp"  >
       
        <h1  class="SF-TH text-white  text-[5vw]" >บทเรียนออนไลน์</h1>
        <div class="i-center mt-[-2vw] ">

          <h1 class="Fredoka text-white font-semibold text-[5vw] mt-[1%] ">e-Learning</h1>
        </div>
  
  
          <div
            
            class="w-[20vw] SF-TH bg-[#FF7A00] rounded-full  mt-[3%] text-center text-white text-[2vw] px-[2%] py-[1%]"
            
          >
            กายวิภาคศาสตร์
      </div>
        
      </div>

          <img
            src="assets/images/waveheader.svg"
            class="image-ab bottom-0 w-full"
            alt=""
          />
        
    </div>
   
  </template>
  
  
  <script setup>

  
  </script>
  
  
  
  <style>
  .bg-image {
    @apply bg-[url("assets/images/e-learning/topbg.png")] bg-cover bg-center;
}  
  .bt-z1-sm{
  display: none;
  }


  @media (max-width:600px){
  .sm {
    width: 100%;
    height: 35vh;
    background: bg-image;
    position: relative;
    overflow:hidden;
  }
  .z1-name-layout-sm{
    margin-top:15vh;
  }
  .z1-header-sm{
  font-size: 15vw;
  font-weight: 650;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
  }
  
  .header2-sm{
  display: flex;
  justify-content: flex-end;
  
  }
 
  
  }
  </style>