<template>
  <div class="mt-7">
    <div class="float-left">
      <router-link
        @click.native="scrollToTop()"
        v-if="previous !== undefined"
        :to="{ name: previous }"
      >
        <v-btn rounded min-width="300px" color="secondary">
          Previous: {{ previous }}
        </v-btn>
      </router-link>
    </div>

    <div class="float-right">
      <router-link
        @click.native="scrollToTop()"
        v-if="next !== undefined"
        :to="{ name: next }"
      >
        <v-btn class="right" rounded min-width="300px" color="primary">
          Next: {{ next }}
        </v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    previous: {
      type: String,
      default: undefined,
    },
    next: {
      type: String,
      default: undefined,
    },
  },
  data: () => ({}),
  methods: {
    scrollToTop: () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
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
