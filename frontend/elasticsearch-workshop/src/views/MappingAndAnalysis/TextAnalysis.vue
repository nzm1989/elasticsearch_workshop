<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Text Analysis</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <div class="d-flex justify-center text-left">
          <ul>
            <li class="text-body-1">
              Text values are <strong>analyzed</strong> when indexing Documents
            </li>
            <li>
              The results will then be stored in Data Structures efficient for
              Searching.
              <br />
              E.g. Inverted Index
            </li>
            <li class="text-body-1">
              The
              <a
                href="https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-analyzers.html"
                >Text Analyzer</a
              >
              contains 3 core components in the following order:
              <ol>
                <li>Character Filter</li>
                <li>Tokenizer</li>
                <li>Token Filters</li>
              </ol>
            </li>
            <li>
              By default, Elasticsearch uses the
              <a
                href="https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-standard-analyzer.html"
                >Standard Analyzer</a
              >.
            </li>
          </ul>
        </div>
      </v-card>

      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Character Filter</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ul>
              <li class="text-body-1">
                Character Filter adds, removes, or changes characters.
              </li>
              <li>The analyzer can contain zero or more Character Filters.</li>
              <li class="text-body-1">
                Character filters are applied in the order they are specified
                in.
              </li>
              <li>
                An example would be <strong>html_strip</strong> filter which
                essentially strips html tag and convert encoded values into
                Text.
                <ul>
                  <li>
                    <strong>Input:</strong> "I&#38;apos;m feeling
                    &#60;strong&#62;good&#60;strong&#62; today."
                  </li>
                  <li><strong>Output:</strong> "I'm feeling good today."</li>
                </ul>
              </li>
            </ul>
          </div>
        </v-card>
      </v-sheet>

      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Tokenizer</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ul>
              <li class="text-body-1">
                An analyzer can only contain <strong>one</strong> tokenizer.
              </li>
              <li class="text-body-1">
                The Tokenizer splits string into tokens and strip off certain
                symbols and characters.
              </li>
              <li>
                Example:
                <ul>
                  <li>
                    <strong>Input:</strong> "I LOVE Elasticsearch very much!"
                  </li>
                  <li>
                    <strong>Output:</strong> ["I", "LOVE", "Elasticsearch",
                    "very", "much"]
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </v-card>
      </v-sheet>

      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Token Filters</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ul>
              <li class="text-body-1">
                An analyzer can only contain zero or more Token Filters
              </li>
              <li class="text-body-1">
                The Token Filter adds, remove, or modify Token output from the
                Tokenizer.
              </li>
              <li>
                An example would be the <strong>lowercase</strong> filter:
                <ul>
                  <li>
                    <strong>Input:</strong> ["I", "LOVE", "Elasticsearch",
                    "very", "much"]
                  </li>
                  <li>
                    <strong>Output:</strong> ["i", "love", "Elasticsearch",
                    "very", "much"]
                  </li>
                </ul>
              </li>
              <li>
                Another example would be the <strong>stemmer</strong> filter.
                The stemmer filter by default uses the English stemming filter.
                <br />
                It is customization based on the language you specify.
                <ul>
                  <li>
                    <strong>Input:</strong> ["the", "foxes", "jumping",
                    "around"]
                  </li>
                  <li>
                    <strong>Output:</strong> ["the", "fox", "jump", "around"]
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </v-card>
      </v-sheet>

      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Activity</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ol>
              <li class="text-body-1">
                Create an Account Index with a non-standard Analyzer.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createAccountIndex }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Create an Account Document
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createAccountDocument }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Perform a Search using the different stemming words and you
                should be able to retrieve the results.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ retrieveAccountDocument }}</span></pre>
                </v-sheet>
              </li>
            </ol>
          </div>
        </v-card>
      </v-sheet>
      <v-btn rounded width="500px" color="primary" @click="show = !show">
        Open Console
      </v-btn>
    </div>
    <console v-if="show"></console>
    <Navigation
      class="main-content"
      previous="Mapping and Data Type"
      next="Inverted Index"
    ></Navigation>
  </v-sheet>
</template>

<script>
import Navigation from '@/components/Navigation';
import Console from '@/components/Console';

export default {
  name: 'UpdateDocument',
  components: {
    Navigation,
    Console,
  },
  data: () => ({
    show: false,
    createAccountIndex: `PUT /account
{
  "mappings": {
    "properties": {
      "account_num": {
        "type": "integer"
      },
      "description": {
        "type": "text",
        "analyzer": "english"
      }
    }
  }
}`,
    createAccountDocument: `PUT /account/_doc/501
{
  "account_num": "501",
  "description": "i am loving elasticsearch and it works well with my backend."
}`,
    retrieveAccountDocument: `GET /account/_search
{
  "query": {
    "match": {
      "description": "love"
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
</style>
