<template>
  <div>
    <div class="bg-image"></div>

    <div class="bg-text">
      <span>Elasticsearch Workshop &#128373;</span>
      <div>
        <router-link :to="{ name: 'Introduction' }">
          <v-btn rounded width="50%" color="primary"> Get Started </v-btn>
        </router-link>
      </div>
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
.bg-image {
  height: calc(100vh - 64px);
  /* Add the blur effect */
  filter: blur(9px);
  -webkit-filter: blur(9px);
  overflow-y: hidden;
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
