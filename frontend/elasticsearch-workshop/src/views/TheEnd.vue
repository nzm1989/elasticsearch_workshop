<template>
  <div>
    <div class="bg-text">
      <span>Thank you for playing with the workshop!</span>
      <br />
      <span>&#128537; You are Awesome!! &#128526;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    options: {
      duration: 1200,
      easing: 'easeInOutQuart',
    },
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
video {
  object-fit: contain;
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.bg-text {
  font-family: 'Roboto', sans-serif;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/opacity/see-through */
  position: absolute;
  top: 25vh;
  left: 10vw;
  font-weight: bold;
  z-index: 2;
  width: 80%;
  padding: 40px;
  font-size: 3rem;
  line-height: 4rem;
  text-align: center;
  color: orange;
}
</style>
