// stores/room.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRoomStore = defineStore('roomStore', () => {
  // Room image paths
//   const roomNumber = ref([
//     { room: ["/images/zone3/roomZone3.jpg", "/images/zone3/image-1575.jpg"] },
//     { room: ["/images/zone3/image-1575.jpg", "/images/zone3/roomZone3.jpg"] },
//     { room: ["/images/zone2/new-2.png", "/images/zone3/roomZone3.jpg"] },
//     { room: ["/images/zone2/new-3.png", "/images/zone3/image-1575.jpg"] },
//     { room: ["/images/image 1560.jpg", "/images/zone3/roomZone3.jpg"] },
//     { room: ["/images/zone3/roomZone3.jpg", "/images/zone3/image-1575.jpg"] },
//     { room: ["/images/zone3/image-1575.jpg", "/images/zone3/roomZone3.jpg"] },
//     { room: ["/images/zone3/roomZone3.jpg", "/images/zone3/image-1575.jpg"] },
//   ]);

  // Room details
  const Room = ref([
    { name: "ห้อง1", iconName1: "นิทรรศการอวัยวะ1", iconName2: "เรียนรู้อวัยวะต่างๆ1", iconImg1: "/images/zone3/iconzone3-1.svg", iconImg2: "/images/zone3/iconzone3-2.svg" },
    { name: "ห้อง2", iconName1: "นิทรรศการอวัยวะ2", iconName2: "เรียนรู้อวัยวะต่างๆ2", iconImg1: "/images/zone3/iconzone3-2.svg", iconImg2: "/images/zone3/iconzone3-1.svg" },
    { name: "ห้อง3", iconName1: "นิทรรศการอวัยวะ3", iconName2: "เรียนรู้อวัยวะต่างๆ3", iconImg1: "/images/zone3/iconzone3-1.svg", iconImg2: "/images/zone3/iconzone3-2.svg" },
    { name: "ห้อง4", iconName1: "นิทรรศการอวัยวะ4", iconName2: "เรียนรู้อวัยวะต่างๆ4", iconImg1: "/images/zone3/iconzone3-2.svg", iconImg2: "/images/zone3/iconzone3-1.svg" },
    { name: "ห้อง5", iconName1: "นิทรรศการอวัยวะ5", iconName2: "เรียนรู้อวัยวะต่างๆ5", iconImg1: "/images/zone3/iconzone3-1.svg", iconImg2: "/images/zone3/iconzone3-2.svg" },
    { name: "ห้อง6", iconName1: "นิทรรศการอวัยวะ6", iconName2: "เรียนรู้อวัยวะต่างๆ6", iconImg1: "/images/zone3/iconzone3-2.svg", iconImg2: "/images/zone3/iconzone3-1.svg" },
    { name: "ห้อง7", iconName1: "นิทรรศการอวัยวะ6", iconName2: "เรียนรู้อวัยวะต่างๆ6", iconImg1: "/images/zone3/iconzone3-1.svg", iconImg2: "/images/zone3/iconzone3-2.svg" },
    { name: "ห้อง8", iconName1: "นิทรรศการอวัยวะ6", iconName2: "เรียนรู้อวัยวะต่างๆ6", iconImg1: "/images/zone3/iconzone3-2.svg", iconImg2: "/images/zone3/iconzone3-1.svg" },
  ])

  return { Room };
});

