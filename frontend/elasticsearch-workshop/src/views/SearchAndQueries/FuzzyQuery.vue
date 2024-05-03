<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Fuzzy Match Query</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <div class="d-flex justify-center text-left">
          <ul>
            <li>
              <a
                href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html#query-dsl-match-query-fuzziness"
                >Fuzzy query</a
              >
              allows us to handle typo errors within an edit distance.
            </li>
            <li>
              The default auto setting for fuzziness is as below
              <ol>
                <li>Term Length 1 to 2 -> edit distance 0</li>
                <li>Term Length 3 to 5 -> edit distance 1</li>
                <li>Term Length more than 5 -> edit distance 2</li>
              </ol>
            </li>

            <li>
              Edit distance refers to actions such as changing, inserting,
              removing, transposing two adjacent character.
              <br />
              Suppose we are searching for the term <strong>James</strong>
              <ol>
                <li>
                  Typo Term: <strong>"Fames"</strong>
                  <br />
                  Executing the <strong>changing</strong> action will change
                  <strong>"F"</strong>
                  into the term which will match the term "James".
                </li>
                <li>
                  Typo Term: <strong>"Jame"</strong>
                  <br />
                  Executing the <strong>inserting</strong> action will insert
                  <strong>"s"</strong>
                  into the term which will match the term "James".
                </li>
                <li>
                  Typo Term: <strong>"Jamess"</strong>
                  <br />
                  Executing the <strong>removing</strong> action will remove
                  <strong>"s"</strong>
                  into the term which will match the term "James".
                </li>
                <li>
                  Typo Term: <strong>"Jamse"</strong>
                  <br />
                  Executing the <strong>transpose</strong> action will shift the
                  adjacent letter <strong>"s" and "e"</strong> into the term
                  which will match the term "James".
                </li>
              </ol>
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
                Execute a Fuzzy query on the <strong>Person</strong> Document
                with name <strong>Jame</strong>
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre class="text--primary"><span>{{ fuzzyQuery }}</span></pre>
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
      previous="Compound Query"
      next="Pagination"
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
    fuzzyQuery: `GET /person/_search
{
  "query": {
    "match": {
      "name": {
        "query": "Jame",
        "fuzziness": "auto"
      }
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
