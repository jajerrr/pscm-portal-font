import { defineStore } from "pinia";

// สร้าง store สำหรับจัดการข้อมูลข่าว
export const useELearnStore = defineStore("e-learn", {
  state: () => ({
  mainContentData:[
    { path:"/e-learning/cb", toppic:"CB", img: "/images/e-learing/content1.jpg", file: "5 Toppic",time: "16 sec", content: "This course examines the carotid body (CB), a multimodal sensory organ located at the junction of the common carotid artery." },
    { path:"/e-learning/fnm",toppic:"FNM", img: "/images/e-learing/content2.jpg", file: "5 Toppic",time: "16 sec", content: "This course examines the carotid body (CB), a multimodal sensory organ located at the junction of the common carotid artery." },

  ] 
  
}),

});



