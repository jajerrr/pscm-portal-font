<template>
    <nav class="fixed w-full top-0 left-0  z-50 bg-transparent SF-TH nav-small">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
        src="assets/images/pscm-logo.png"
        class="w-[20vh] h-auto mr-auto pl-3"
        alt="logo"
      />
        <button @click="toggleMenu" data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg dark:text-white " aria-controls="navbar-hamburger" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="w-full" id="navbar-hamburger">
          <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">หน้าแรก</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">ประชาสัมพันธ์</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">เข้าสู่ระบบ</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  </script>
  
  <style>
  .nav-small {
    display: none;
  }
  @media (max-width:500px) {
    
.nav-small {
    display: block;
  }

  .nav-normal {
    display: none;
  }
    
  }

  </style>
  