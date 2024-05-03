<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Pagination</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <div class="d-flex justify-center text-left">
          <ul>
            <li>
              Pagination helps to limit the number of Document matches to
              increase performance.
            </li>
          </ul>
        </div>
      </v-card>

      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Activity</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ol>
              <li class="text-body-1">
                Execute a query with 2 results per page.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ queryPageOne }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Execute a query with 2 results per page in page 2.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ queryPageTwo }}</span></pre>
                </v-sheet>
              </li>
            </ol>
          </div>
        </v-card>
      </v-sheet>

      <v-btn
        class="mt-7"
        rounded
        width="500px"
        color="primary"
        @click="show = !show"
      >
        Open Console
      </v-btn>
    </div>
    <console v-if="show"></console>
    <Navigation
      class="main-content"
      previous="Fuzzy Query"
      next="Highlighting"
    ></Navigation>
  </v-sheet>
</template>

<script>
import Navigation from '@/components/Navigation';
import Console from '@/components/Console';

export default {
  name: 'MappingAndDataType',
  components: {
    Navigation,
    Console,
  },
  data: () => ({
    show: false,
    queryPageOne: `GET /person/_search
{
  "size": 2,
  "query": {
    "match_all": {}
  }
}`,
    queryPageTwo: `GET /person/_search
{
  "size": 2,
  "from": 2,
  "query": {
    "match_all": {}
  }
}`,
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

.wrap-text {
  width: 60vw;
  word-wrap: break-word;
}
</style>
