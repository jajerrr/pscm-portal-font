import { ref } from 'vue';

export function useMediaHandler() {
  const type1 = ref({
    title: '',
    link: '',
    media: '/images/cms/location.png',
    totalCoins: null,
  });

  const type2 = ref({
    title: '',
    description: '',
    link: '',
    media: '',
    mediaPreview: '',
    mediaType: '',
    totalCoins: null,
  });

  const setMedia = (type :number, file) => {
    if (type === 1) {
      type1.value.media = file;
    } else if (type === 2) {
      type2.value.media = file;
      type2.value.mediaType = file.type.startsWith('image') ? 'image' : 'video';
      type2.value.mediaPreview = URL.createObjectURL(file);
    }
  };

  return { type1, type2,setMedia};
}
