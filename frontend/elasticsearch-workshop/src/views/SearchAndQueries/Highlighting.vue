<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Highlighting</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <div class="d-flex justify-center text-left">
          <ul>
            <li>
              Highlighting helps to highlight the terms that are matched by the
              query.
            </li>
            <li>
              This is especially useful if you are using fuzziness in your query
              or using synonyms.
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
                Execute a fuzzy query with highlighting of the term.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ fuzzyWithHighlight }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                You can customize the tags surrounding the highlight. Execute a
                fuzzy query with a custom highlighting of the term.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ fuzzyWithCustomHighlight }}</span></pre>
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
      previous="Pagination"
      next="Integration with Django"
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
    fuzzyWithHighlight: `GET /person/_search
{
  "query": {
    "match": {
      "name": {
        "query": "Jame",
        "fuzziness": "auto"
      }
    }
  },
  "highlight": {
    "fields": {
      "name": {}
    }
  }
}`,
    fuzzyWithCustomHighlight: `GET /person/_search
{
  "query": {
    "match": {
      "name": {
        "query": "Jame",
        "fuzziness": "auto"
      }
    }
  },
  "highlight": {
    "pre_tags": ["<strong>"],
    "post_tags": ["</strong>"],
    "fields": {
      "name": {}
    }
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
