<template>
  <v-sheet class="mt-5" min-height="100vh">
    <a class="pb-3" href="http://localhost:5601/app/dev_tools#/console"
      >http://localhost:5601/app/dev_tools#/console</a
    >
    <iframe
      height="1366"
      width="90%"
      class="iframe"
      src="http://localhost:5601/app/dev_tools#/console"
    ></iframe>
  </v-sheet>
</template>

<script>
export default {
  name: 'Console',
  data: () => ({}),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg-image {
  /* Add the blur effect */
  filter: blur(9px);
  -webkit-filter: blur(9px);
}

.bg-text {
  font-family: 'Roboto', sans-serif;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/opacity/see-through */
  position: absolute;
  top: 35vh;
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
