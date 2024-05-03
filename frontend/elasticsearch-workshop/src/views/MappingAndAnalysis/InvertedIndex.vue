<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Inverted Index</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <v-img
          width="50vw"
          class="mb-5 border"
          src="../../assets/inverted_index.png"
        ></v-img>
        <div class="d-flex justify-center text-left">
          <ul>
            <li>
              The example above shows a simplified view of an Inverted Index.
            </li>
            <li>
              An <strong>Inverted Index</strong> is a mapping between the terms
              and which Document contains them.
            </li>
            <li>
              Terms in the Inverted Index is sorted in
              <strong>alphabetical order</strong>.
            </li>
            <li>
              Inverted Index also contains other data like information related
              to Relevance Scoring.
            </li>
            <li>Each text field has it's own Inverted Index.</li>
          </ul>
        </div>
      </v-card>
    </div>
    <Navigation
      class="main-content"
      previous="Text Analysis"
      next="Search"
    ></Navigation>
  </v-sheet>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'UpdateDocument',
  components: {
    Navigation,
  },
  data: () => ({
    show: false,
  }),
};
</script>

<style scoped lang="scss">
.workshop-title {
  font-size: 3rem;
  font-weight: 500;
}

.content-class {
  font-size: 1.3rem;
}

.border {
  border: 1px solid black;
}

.code-color {
  font-family: monospace;
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
