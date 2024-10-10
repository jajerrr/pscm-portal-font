
import { defineStore } from 'pinia';
import type { VdoSlideItem } from '@/interfaces/video';

export const useVdoSlidesStore = defineStore('vdo', {
  state: () => ({
    vdoslides: [
      { img: '/images/video frame.png', vdo: '/images/vdo.mp4' },
      { img: '/images/image 1560.jpg', vdo: '/images/vdo.mp4' },
      { img: '/images/video frame.png', vdo: '/images/vdo.mp4' },
      { img: '/images/image 1560.jpg', vdo: '/images/vdo.mp4' },
      { img: '/images/video frame.png', vdo: '/images/vdo.mp4' },
      { img: '/images/image 1560.jpg', vdo: '/images/vdo.mp4' },
    ] as VdoSlideItem[],  
  }),
});

