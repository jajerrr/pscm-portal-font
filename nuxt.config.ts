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
    
  ],
  carousel: {
    prefix: 'MyPrefix'
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
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
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
        }
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
    // { src: '~/plugins/model-viewer.js', mode: 'client' }
  ],
});