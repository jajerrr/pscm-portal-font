<template>
  <model-viewer
    alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
    src=""
    ar
    environment-image="shared-assets/environments/moon_1k.hdr"
    poster="shared-assets/models/NeilArmstrong.webp"
    shadow-intensity="1"
    camera-controls
    touch-action="pan-y"
  ></model-viewer>
</template>

<script>
export default {
  name: 'ModelViewer'
}
</script>
