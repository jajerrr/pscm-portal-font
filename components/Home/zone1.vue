<template>
    <div class="first-main-content sm">
      <div class="z1-name-layout z1-name-layout-sm">
        <h1 class="z1-header z1-header-sm">METAVERSE</h1>
        <div class="i-center mt-[-5vw] ">
          <img
            src="assets/images/Rectangle 43068.svg"
            class="w-[15%] h-auto object-cover line-sm"
          />
          <h1 class="z1-header z1-header2-sm">PSCM</h1>
        </div>
        <NuxtLink to="/">
          <button
            type="button"
            class=" bt-z1"
          >
            Get start
          </button>
        </NuxtLink>
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

<style>
@media (max-width:680px){
  .sm {
    width: 100%;
    height: 90vh;
    background: bg-image;
    position: relative;
    overflow:hidden;
}
  .z1-name-layout-sm{
    margin-left: 25vw;
    margin-top:13vh;
}
.z1-header-sm{
  font-size: 12vw;
  font-weight: 650;
}
.z1-header2-sm{
  font-size: 19vw;
  font-weight: 650;
}
.line-sm{
  width:25%;
}
.img-men-sm{
  left:-5vw;
  width: 30vh;
  top:30vh;
}
.img-women-sm{
  left:27vw;
  width: 27vh;
  top:35vh;
}

}
</style>