<template>
    <div class="bg-map  bg-mobile">
     <img src="~/assets/images/map-content/bgtree.png" alt="" class="max-h-screen max-w-none overflow-x-scroll hide">
     
                 
                     <slot></slot>
                 
             
     </div>
 </template>
 
 <script setup>
 
 </script>
 
 <style lang="scss" scoped>
 .bg-map{
     @apply bg-[url(~/assets/images/map-content/bgtree.png)] bg-no-repeat bg-cover bg-center object-cover w-screen h-screen ;
 }
 .hide{
     display: none;
 }
 @media (max-width: 1024px) {
     .bg-map{
         display: none;
     }
     .bg-mobile{
         display: block;
         width: 100%;
         height: 100dvh;
         
     }
     .hide{
     display: block;
 }
     
 }
 
 
 
 </style>