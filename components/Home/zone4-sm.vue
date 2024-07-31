<template>
  

    <div>
      <h1>Drag or scroll ...</h1>

      <div id="dragSpace">
        <div id="wrapperBoxes">
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">3</div>
          <div class="box">4</div>
          <div class="box">5</div>
          <div class="box">6</div>
          <div class="box">7</div>
          <div class="box">8</div>
          <div class="box">9</div>
          <div class="box">10</div>
          <div class="box">11</div>
          <div class="box">12</div>
        </div>
      </div>
    </div>
  
</template>

<script>
Draggable.create("#wrapperBoxes", {
  bounds: "#dragSpace",
  //allowNativeTouchScrolling:false,
  type: "x",
});

TweenMax.set("body", { overflowY: "scroll" });

var scrollSpeed = 0.5; // half of user scroll
var scrollHeight = 10000;

TweenMax.set("body", { height: scrollHeight, overflowY: "scroll" });

$(document).on("scroll", function () {
  const pixels = $(document).scrollTop();
  TweenMax.to("#wrapperBoxes", 1, { x: -0.5 * pixels });

  //  '0.5' = half speed of user scroll
  console.log(pixels);
});
</script>

<style scoped>
body {
  font-family: sans-serif;
  background: grey;
  color: white;
}
h1 {
  position: fixed;
  margin: 10px 20px;
}

#dragSpace {
  position: fixed;
  width: 10000px;
  height: 300px;
  top: 60px;
  background-color: black;
  left: -5000px;
  margin-top: 10px;
}
#wrapperBoxes {
  position: absolute;
  width: 5000px;
  height: 300px;
  left: 5000px;
}
.box {
  position: relative;
  width: 300px;
  height: 220px;
  border-radius: 10px;
  margin: 40px 25px;
  background-color: #0800e6;
  text-align: center;
  font-family: Asap, Avenir, Arial, sans-serif;
  font-size: 150px;
  font-weight: 600;
  line-height: 220px;
  color: black;
  float: left;
}

label {
  font-size: 20px;
}
</style>
