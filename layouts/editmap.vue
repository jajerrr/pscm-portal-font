<template>
    <div class="w-full h-[100dvh] relative overflow-y-hidden">
      
      <div class="absolute left-0 top-0 h-[100dvh] lg:w-full">
        <img
          src="assets/images/map-content/bg-edit.png"
          alt="bg-metaverse"
          class="h-full max-h-full object-cover object-center max-w-none lg:w-full"
        />
        
       
  
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  