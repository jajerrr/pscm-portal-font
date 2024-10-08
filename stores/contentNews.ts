import { defineStore } from "pinia";
import type { NewsStore } from "@/interfaces/news";

export const useNewsStore = defineStore("news", {
  state: (): NewsStore => ({
    newsItems: [] // สร้างstateเก็บข่าว
  }),

  actions: {
    fetchNewsItems() {      
      // ดึงข้อมูลข่าวสารทั้งหมด (ใช้ mock data ในที่นี้)
      this.newsItems = [
        {
          date: "1 ต.ค. 2567",
          header: "ข่าวสารล่าสุด",
          detail: "รายละเอียดข่าวสาร",
          img: "/images/image 1560.jpg"
        },
        {
          date: "2 ต.ค. 2567",
          header: "โครงการแลกเปลี่ยนเรียนรู้ Clinical Observership",
          detail: "รายละเอียดข่าวสารเพิ่มเติม",
          img: "/images/image 1560.jpg"
        },
        {
            date: "3 ต.ค. 2567",
            header: "โครงการแลกเปลี่ยนเรียนรู้ Clinical Observership",
            detail: "รายละเอียดข่าวสารเพิ่มเติม",
            img: "/images/image 1560.jpg"
          },
          {
            date: "4 ต.ค. 2567",
            header: "โครงการแลกเปลี่ยนเรียนรู้ Clinical Observership",
            detail: "รายละเอียดข่าวสารเพิ่มเติม",
            img: "/images/image 1560.jpg"
          },
          
          
        
        // ข้อมูลข่าวสารอื่น ๆ
      ];
    },
  },
});
