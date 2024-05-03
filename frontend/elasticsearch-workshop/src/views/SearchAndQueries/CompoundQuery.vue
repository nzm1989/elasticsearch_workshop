<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Compound Query</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <div class="d-flex justify-center text-left">
          <ul>
            <li>
              Compound Query is used to execute one or more
              <strong>Leaf Query</strong> conditions together.
            </li>
            <li>
              The conditions specified in the compound query can affect the
              relevance scoring of the results.
              <ol>
                <li>
                  must - Query in this clause <strong>must</strong> appear in
                  the Document
                </li>
                <li>
                  must_not - Query in this clause
                  <strong>must not</strong> appear in the Document
                </li>
                <li>
                  should - Query in this clause will give the result a
                  <strong>relevance boost</strong> but not mandatory to appear
                  in the Document
                </li>
              </ol>
            </li>
            <li>
              Query in the <strong>filter</strong> clause will not affect the
              relevance score as it is only doing a filter on the results.
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
                This activity will go through the <strong>must</strong>,
                <strong>must_not</strong> and <strong>should</strong> syntax.
                <br />
                For the entire list of API, you can refer to the
                <a
                  href="https://www.elastic.co/guide/en/elasticsearch/reference/current/compound-queries.html"
                  >official documentation</a
                >
                to find out more.
              </li>
              <li class="text-body-1">
                The activity will be making used of the Person Index which we
                have created in the previous section.
              </li>
              <li class="text-body-1">
                Execute a Compound query on the <strong>Person</strong> Document
                which <strong>must</strong> have <strong>"indonesia"</strong> as
                the <strong>country</strong> and must not contain
                <strong>sports</strong> in the <strong>fun_fact</strong>
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ compoundQueryMustAndMustNot }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Execute a Compound query on the <strong>Person</strong> Document
                which <strong>must</strong> have <strong>"indonesia"</strong> as
                the <strong>country</strong> and must not contain
                <strong>sports</strong> in the <strong>fun_fact</strong>.
                <br />
                Additionally, fun_fact <strong>should</strong> include
                <strong>"music"</strong>.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ compoundQueryMustAndMustNotAndShould }}</span></pre>
                </v-sheet>
              </li>
            </ol>
          </div>
        </v-card>
      </v-sheet>

      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Try it yourself</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ol>
              <li class="text-body-1">
                Execute a Compound query which must have the country
                <strong>"singapore"</strong> and must not contain
                <strong>"climb"</strong> in the fun_fact.
              </li>
              <li class="text-body-1">
                Execute a Compound query which must have the country
                <strong>"singapore"</strong> and should contain
                <strong>"anime"</strong> in the fun_fact.
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
      previous="Full Text Query"
      next="Fuzzy Query"
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
    compoundQueryMustAndMustNot: `GET /person/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "country": "indonesia"
          }
        }
      ],
      "must_not": [
        {
          "match": {
            "fun_fact": "sports"
          }
        }
      ]
    }
  }
}`,
    compoundQueryMustAndMustNotAndShould: `GET /person/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "country": "indonesia"
          }
        }
      ],
      "must_not": [
        {
          "match": {
            "fun_fact": "sports"
          }
        }
      ],
      "should": [
        {
          "match": {
            "fun_fact": "music"
          }
        }
      ]
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
