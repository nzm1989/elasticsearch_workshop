<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Full Text Query</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <div class="d-flex justify-center text-left">
          <ul>
            <li>
              Full Text Query is used for searching through
              <strong>text</strong> type field which are tokenized based on the
              analyzer specified.
            </li>
            <li>
              It is used commonly to search through sentences and phrases.
            </li>
            <li>
              The query text is analyzed before searching through the Inverted
              Index
            </li>
          </ul>
        </div>
      </v-card>

      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Activity</span>
        <v-card class="pt-5 pb-5" align="left">
          <ol>
            <li class="text-body-1">
              This activity will go through the <strong>match</strong>,
              <strong>match_phrase</strong> and
              <strong>multi_match</strong> syntax which is commonly used for
              searching through Full text query.
              <br />
              For the entire list of API, you can refer to the
              <a
                href="elastic.co/guide/en/elasticsearch/reference/current/full-text-queries.html"
                >official documentation</a
              >
              to find out more.
            </li>
            <li class="text-body-1">
              Create a Person Index.
              <br />
              <v-sheet align="left" class="text-body-2 code-color">
                <pre
                  class="text--primary"
                ><span>{{ createPersonIndex }}</span></pre>
              </v-sheet>
            </li>
            <li class="text-body-1">
              Create a list of Person Documents using the bulk API.
              <v-sheet align="left" class="text-body-2 code-color">
                <pre class="text--primary"><span>{{ createBulk }}</span></pre>
              </v-sheet>
            </li>
            <li class="text-body-1">
              Execute a Full text query on the
              <strong>fun_fact</strong> field using the
              <strong>match</strong> query.
              <br />
              Note that match query are by default performing an
              <strong>"or"</strong> operation which matches any document that
              has any of the query terms.
              <v-sheet align="left" class="text-body-2 code-color">
                <pre
                  class="text--primary"
                ><span>{{ fullTextQueryMatch }}</span></pre>
              </v-sheet>
            </li>
            <li class="text-body-1">
              Execute a Full text query on the
              <strong>fun_fact</strong> field using the
              <strong>match</strong> query and the
              <strong>"and"</strong> operator.
              <br />
              This time, all terms must be present in the query term in order
              for the match to happen.
              <v-sheet align="left" class="text-body-2 code-color">
                <pre
                  class="text--primary"
                ><span>{{ fullTextQueryMatchAnd }}</span></pre>
              </v-sheet>
            </li>
            <li class="text-body-1">
              Execute a Full text query on the
              <strong>fun_fact</strong> field using the
              <strong>match_phrase</strong> query.
              <br />
              This will match the given phrase in the specific order.
              <v-sheet align="left" class="text-body-2 code-color">
                <pre
                  class="text--primary"
                ><span>{{ fullTextQueryMatchPhrase }}</span></pre>
              </v-sheet>
            </li>
            <li class="text-body-1">
              Execute a Full text query on the
              <strong>fun_fact</strong> field using the
              <strong>multi_match</strong> query.
              <br />
              A <strong>multi_match</strong> query is used to search through
              <strong>multiple fields</strong>.
              <v-sheet align="left" class="text-body-2 code-color">
                <pre
                  class="text--primary"
                ><span>{{ fullTextQueryMultiMatch }}</span></pre>
              </v-sheet>
            </li>
          </ol>
        </v-card>
      </v-sheet>

      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Try it yourself</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ol>
              <li class="text-body-1">
                Execute a full text search with the query
                <strong>"world highest"</strong> which
                <strong>match</strong> the <strong>fun_fact</strong> field.
              </li>
              <li class="text-body-1">
                Execute a full text search which match the phrase
                <strong>"rpg games" exactly in this order</strong> in the
                <strong>fun_fact</strong> field.
              </li>
              <li class="text-body-1">
                Execute a full text search which search through all Documents
                with <strong>singapore</strong> and <strong>sports</strong> in
                the <strong>country and fun_fact</strong> fields.
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
      previous="Term Level Query"
      next="Compound Query"
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
    getPersonIndexMapping: 'GET /person/_mapping',
    createPersonIndex: `PUT /person
{
  "mappings": {
    "properties": {
      "name": { "type": "text" },
      "role": { "type": "text" },
      "country": { "type": "text" },
      "fun_fact": { "type": "text", "analyzer": "english" }
    }
  }
}`,
    createBulk: `POST /person/_bulk
{ "index": {"_id": 1 } }
{ "name": "James Wong", "role": "Property Agent", "country": "Singapore", "fun_fact": "I hike, walk and climb. I aim to climb the world highest mountain before the age of 40." }
{ "index": {"_id": 2 } }
{ "name": "John Lee", "role": "Technical Architect", "country": "Singapore", "fun_fact": "I love Anime and RPG Games with my own collections of Waifu. I like dealing with Software Architecture and DevOps. " }
{ "index": {"_id": 3 } }
{ "name": "Peter Tan", "role": "Sales Associate", "country": "Indonesia", "fun_fact": "You can also call me Pep. Love all sports. Was a member of Radio Broadcasting team during school. " }`,
    fullTextQueryMatch: `GET /person/_search
{
  "query": {
    "match": {
      "fun_fact": "love anime"
    }
  }
}`,
    fullTextQueryMatchAnd: `GET /person/_search
{
  "query": {
    "match": {
      "fun_fact": {
        "query": "love anime",
        "operator": "and"
      }
    }
  }
}`,
    fullTextQueryMatchPhrase: `GET /person/_search
{
  "query": {
    "match_phrase": {
      "fun_fact": "Radio Broadcasting"
    }
  }
}`,
    fullTextQueryMultiMatch: `GET /person/_search
{
  "query": {
    "multi_match": {
      "query": "indonesia pep",
      "fields": ["country", "fun_fact"]
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

.limit-width {
  width: 500px;
}

.text--primary {
  white-space: pre;
  overflow-y: scroll;
}
</style>
