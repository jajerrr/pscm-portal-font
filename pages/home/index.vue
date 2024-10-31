<template>
  <div class="w-full h-[100vh] bg-[#18181B]" 
>
    <div class="grid justify-center">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card "
        :class="{ 'clicked': card.isClicked }"
        @click="toggleClick(index)"
      >
      <h4 v-if="card.isClicked">{{ card.title }}</h4>
      <p v-if="card.isClicked">{{ card.description }}</p>
        
        <div class="shine"></div>
        <div class="background">
          <div class="tiles">
            <div class="tile tile-1"></div>
            <div class="tile tile-2"></div>
            <div class="tile tile-3"></div>
            <div class="tile tile-4"></div>
            <div class="tile tile-5"></div>
            <div class="tile tile-6"></div>
            <div class="tile tile-7"></div>
            <div class="tile tile-8"></div>
            <div class="tile tile-9"></div>
            <div class="tile tile-10"></div>
          </div>
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { title: 'Products', description: 'Standard chunk of Lorem Ipsum used since the 1500s is shown below for those interested.', isClicked: false },
        { title: 'Categories', description: 'Standard chunk of Lorem Ipsum used since the 1500s is shown below for those interested.', isClicked: false },
        { title: 'Services', description: 'Standard chunk of Lorem Ipsum used since the 1500s is shown below for those interested.', isClicked: false }
      ]
    };
  },
  methods: {
    toggleClick(index) {
      this.cards.forEach(card => {
        card.isClicked = false;
      });
      this.cards[index].isClicked = true;
    }
  }
};
</script>

<style scoped>

:root.toggle .grid * {
  transition-duration: 0s !important;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 240px);
  grid-gap: 32px;
  position: relative;
  z-index: 1;
}

.card {

  /* background-color: #18181B; */
  background-image: url('/images/cat.jpg');
  background-size: cover; 
  background-position: center; 
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05), 
  0px 15px 25px  rgba(0, 0, 0, 0.3), 
  0 0 0 1px rgba(255, 255, 255, 0.1);
  padding: 56px 16px 16px 16px;
  height:300px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.25s;
}
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, .015);
}
.card .icon {
  z-index: 2;
  position: relative;
  display: table;
  padding: 8px;
}
.card .icon::after {
  content: "";
  position: absolute;
  inset: 4.5px;
  border-radius: 50%;
  background-color: var(--card-icon-background-color);
  border: 1px solid var(--card-icon-border-color);
  -webkit-backdrop-filter: blur(2px);
          backdrop-filter: blur(2px);
  transition: background-color 0.25s, border-color 0.25s;
}
  
.card h4 {
  z-index: 1;
  position: relative;
  margin: 12px 0 4px 0;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
  color: #FFFFFF;
}
.card p {
  z-index: 1;
  position: relative;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: #A1A1AA;
}
.card .shine {
  border-radius: inherit;
  position: absolute;
  background-color: #000000ce;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.5s;
}
.card .shine:before {
  content: "";
  width: 150%;
  padding-bottom: 150%;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 55%;
  filter: blur(30px);
  opacity: 0.1;
  transform: translateX(-50%);
  background-image:conic-gradient(from 205deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #10B981 25deg, rgba(52, 211, 153, 0.18) 295deg, rgba(16, 185, 129, 0) 360deg);
}
.card .background {
  border-radius: inherit;
  position: absolute;
  inset: 0;
  overflow: hidden;
  -webkit-mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
  mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
}
.card .background .tiles {
  opacity: 0;
  transition: opacity 0.25s;
}
.card .background .tiles .tile {
  position: absolute;
  background-color:  rgba(16, 185, 129, 0.05);
  -webkit-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  opacity: 0;
}
.card .background .tiles .tile.tile-4, .card .background .tiles .tile.tile-6, .card .background .tiles .tile.tile-10 {
  -webkit-animation-delay: -2s;
          animation-delay: -2s;
}
.card .background .tiles .tile.tile-3, .card .background .tiles .tile.tile-5, .card .background .tiles .tile.tile-8 {
  -webkit-animation-delay: -4s;
          animation-delay: -4s;
}
.card .background .tiles .tile.tile-2, .card .background .tiles .tile.tile-9 {
  -webkit-animation-delay: -6s;
          animation-delay: -6s;
}
.card .background .tiles .tile.tile-1 {
  top: 0;
  left: 0;
  height: 10%;
  width: 22.5%;
}
.card .background .tiles .tile.tile-2 {
  top: 0;
  left: 22.5%;
  height: 10%;
  width: 27.5%;
}
.card .background .tiles .tile.tile-3 {
  top: 0;
  left: 50%;
  height: 10%;
  width: 27.5%;
}
.card .background .tiles .tile.tile-4 {
  top: 0;
  left: 77.5%;
  height: 10%;
  width: 22.5%;
}
.card .background .tiles .tile.tile-5 {
  top: 10%;
  left: 0;
  height: 22.5%;
  width: 22.5%;
}
.card .background .tiles .tile.tile-6 {
  top: 10%;
  left: 22.5%;
  height: 22.5%;
  width: 27.5%;
}
.card .background .tiles .tile.tile-7 {
  top: 10%;
  left: 50%;
  height: 22.5%;
  width: 27.5%;
}
.card .background .tiles .tile.tile-8 {
  top: 10%;
  left: 77.5%;
  height: 22.5%;
  width: 22.5%;
}
.card .background .tiles .tile.tile-9 {
  top: 32.5%;
  left: 50%;
  height: 22.5%;
  width: 27.5%;
}
.card .background .tiles .tile.tile-10 {
  top: 32.5%;
  left: 77.5%;
  height: 22.5%;
  width: 22.5%;
}
@-webkit-keyframes tile {
  0%, 12.5%, 100% {
    opacity: 1;
  }
  25%, 82.5% {
    opacity: 0;
  }
}
@keyframes tile {
  0%, 12.5%, 100% {
    opacity: 1;
  }
  25%, 82.5% {
    opacity: 0;
  }
}
.card .background .line {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.35s;
}
.card .background .line:before, .card .background .line:after {
  content: "";
  position: absolute;
  background-color: #2A2B2C;
  transition: transform 0.35s;
}
.card .background .line:before {
  left: 0;
  right: 0;
  height: 1px;
  transform-origin: 0 50%;
  transform: scaleX(0);
}
.card .background .line:after {
  top: 0;
  bottom: 0;
  width: 1px;
  transform-origin: 50% 0;
  transform: scaleY(0);
}
.card .background .line.line-1:before {
  top: 10%;
}
.card .background .line.line-1:after {
  left: 22.5%;
}
.card .background .line.line-1:before, .card .background .line.line-1:after {
  transition-delay: 0.3s;
}
.card .background .line.line-2:before {
  top: 32.5%;
}
.card .background .line.line-2:after {
  left: 50%;
}
.card .background .line.line-2:before, .card .background .line.line-2:after {
  transition-delay: 0.15s;
}
.card .background .line.line-3:before {
  top: 55%;
}
.card .background .line.line-3:after {
  right: 22.5%;
}
.card.clicked {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.04), 
  0px 15px 25px  rgba(0, 0, 0, 0.3), 
  0 0 0 1px rgba(255, 255, 255, 0.2);
}
.card.clicked .icon::after {
  background-color: var(--card-hover-icon-background-color);
  border-color: var(--card-hover-icon-border-color);
}
.card.clicked .icon svg {
  color: var(--card-hover-icon-color);
}
.card.clicked .shine {
  opacity: 1;
  transition-duration: 0.5s;
  transition-delay: 0s;
}
.card.clicked .background .tiles {
  opacity: 1;
  transition-delay: 0.25s;
}
.card.clicked .background .tiles .tile {
  -webkit-animation-name: tile;
          animation-name: tile;
}
.card.clicked .background .line {
  opacity: 1;
  transition-duration: 0.15s;
}
.card.clicked .background .line:before {
  transform: scaleX(1);
}
.card.clicked .background .line:after {
  transform: scaleY(1);
}
.card.clicked .background .line.line-1:before, .card:hover .background .line.line-1:after {
  transition-delay: 0s;
}
.card.clicked .background .line.line-2:before, .card:hover .background .line.line-2:after {
  transition-delay: 0.15s;
}
.card.clicked .background .line.line-3:before, .card:hover .background .line.line-3:after {
  transition-delay: 0.3s;
}

</style>
