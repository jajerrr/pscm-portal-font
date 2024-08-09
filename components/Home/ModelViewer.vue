<template>
  <div>
    <h1>3D Model Viewer</h1>
    <p v-if="!isModelLoaded">Loading model...</p>

    <model-viewer
      v-if="isModelLoaded"
      src="assets/model/bottle/bottle.gltf"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      tone-mapping="neutral"
      poster="/path/to/poster.webp"
      shadow-intensity="1"
      environment-image="/path/to/environment-image.hdr"
      autoplay
      @load="handleModelLoad"
    >
      <template v-slot:progress-bar>
        <div class="progress-bar hide">
          <div class="update-bar"></div>
        </div>
      </template>
      <template v-slot:ar-button>
        <button id="ar-button">View in your space</button>
      </template>
      <template v-slot:ar-prompt>
        <div id="ar-prompt">
          <img src="https://modelviewer.dev/shared-assets/icons/hand.png">
        </div>
      </template>
    </model-viewer>
  </div>
</template>

<script>
import '@google/model-viewer';

export default {
  data() {
    return {
      isModelLoaded: false, // Flag to check if the model is loaded
    };
  },
  methods: {
    handleModelLoad() {
      this.isModelLoaded = true; // Set to true when the model is loaded
    },
  },
};
</script>

<style scoped>

</style>
