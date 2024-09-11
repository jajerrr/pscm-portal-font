// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/icon",
    "vue3-carousel-nuxt",
    "nuxt-swiper",
    "@hypernym/nuxt-gsap",
    // "nuxt-lazy-load",

  ],

  // lazyLoad: {
  //   // These are the default values
  // images: true,
  // videos: true,
  // audios: true, 
  // iframes: true,
  // native: false,
  // directiveOnly: false,
  
  // // Default image must be in the public folder
  // // defaultImage: '/images/default-image.jpg',

  // // To remove class set value to false
  // loadingClass: 'isLoading',
  // loadedClass: 'isLoaded',
  // appendClass: 'lazyLoad',
  
  // observerConfig: {
  //   // See IntersectionObserver documentation
  //   rootMargin: '0px',  // ระยะห่างจาก viewport ที่จะเริ่มทำงาน
  //   threshold: 0.1      // เปอร์เซ็นต์ขององค์ประกอบที่ต้องเห็นก่อนที่จะทำ lazy load
  //   // ดูเอกสารเพิ่มเติมได้ที่ IntersectionObserver documentation
  // }
  // },

  

  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,





    }
  },




  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "localStorage",
  },

  devtools: { enabled: true },
  css: ["~/assets/css/index.css"],

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.4.0/socket.io.js",
          integrity:
            "sha512-Y8KodDCDqst1e8z0EGKiqEQq3T8NszmgW2HvsC6+tlNw7kxYxHTLl5Iw/gqZj/6qhZdBt+jYyOsybgSAiB9OOA==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
        {
          src: "https://scripts.sirv.com/sirvjs/v3/sirv.js",
        },
        {
          src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js',
          type: 'module',
        },

      ],
      meta: [
        {
          "http-equiv": "Content-Type",
        },
      ],
    },
  },

  plugins: [
    { src: "~/plugins/smv.client", mode: "client" },
    { src: "~/plugins/firebaseConfig", mode: "client" },
    "@/plugins/event-bus",

  ],


  compatibilityDate: "2024-08-20",
});