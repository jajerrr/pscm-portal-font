import { defineStore } from "pinia";
import type { NewsItem } from "@/interfaces/news";

// สร้าง store สำหรับจัดการข้อมูลข่าว
export const useNewsStore = defineStore("news", {
  state: () => ({
  mainContentData: [
    { img: "/images/image 1560.jpg", date: "24 พ.ค. 2567", content: "โครงการแลกเปลี่ยนเรียนรู้ Clinical Observershipสำหรับนักศึกษาแพทย์จากญี่ปุ่น" },

  ] as NewsItem[],  // ใช้เป็น array ของ NewsItem
  rightContentData: [
    { img: "/images/zone2/new-1.png", date: "25 พ.ค. 2567", content: "โครงการแลกเปลี่ยนเรียนรู้ Clinical Observershipสำหรับนักศึกษาแพทย์จากญี่ปุ่น" },
    { img: "/images/zone2/new-2.png", date: "26 พ.ค. 2567", content: "โครงการแลกเปลี่ยนเรียนรู้ Clinical Observershipสำหรับนักศึกษาแพทย์จากญี่ปุ่น" },
    { img: "/images/zone2/new-3.png", date: "27 พ.ค. 2567", content: "โครงการแลกเปลี่ยนเรียนรู้ Clinical Observershipสำหรับนักศึกษาแพทย์จากญี่ปุ่น" }
  ] as NewsItem[]
}),

});



