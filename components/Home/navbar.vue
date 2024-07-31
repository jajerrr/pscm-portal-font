<template>
  <img
    src="assets/images/top-linear.svg"
    class="fixed z-40 top-0 left-0 w-full"
    alt="top"
  />
  <div class="nav-small">
    <HomeNavbarSm />
  </div>
  <nav
    class="fixed top-0 left-0 z-50 w-full flex p-3 space-x-3 justify-center items-center bg-transparent text-white SF-TH nav-normal"
  >
    <img
      src="assets/images/pscm-logo.png"
      class="w-[15vw] h-auto mr-auto pl-3"
      alt="logo"
    />
    <div class="flex-grow flex justify-center">
      <div
        class="bg-[#CDCDCD] px-10 py-3 rounded-full flex space-x-5 items-center text-[80%] text-[#2D2D2D]"
      >
        <NuxtLink to="">หน้าแรก</NuxtLink>
        <NuxtLink to="">ประชาสัมพันธ์</NuxtLink>
        <NuxtLink to="">ประชาสัมพันธ์</NuxtLink>
      </div>
    </div>
    <p class="text-[80%]">ยังไม่สมัครสมาชิก?</p>
    <div class="text-[#AFCFFF] text-[80%]">
      <NuxtLink to="/login/register">สมัครสมาชิก</NuxtLink>
    </div>
    <NuxtLink to="/login">
      <button
        type="button"
        class="text-white bg-[#FF7A00] hover:bg-yellow-500 font-medium rounded-full text-[80%] p-2 text-center me-2 mb-2 ]"
      >
        เข้าสู่ระบบ
      </button>
    </NuxtLink>
  </nav>
</template>

<style>
.nav-small {
  display: none;
}
@media (max-width: 730px) {
  .nav-small {
    display: block;
  }

  .nav-normal {
    display: none;
  }
}
</style>
