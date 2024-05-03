<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Mapping and Data Type</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <div class="d-flex justify-center text-left">
          <ul>
            <li>
              Mapping defines the <strong>structure</strong> of Documents, what
              are the field data types and how are the value indexed.
            </li>
            <li>
              The more common data types available in Elasticsearch is as
              follows:
              <ul>
                <li>Text - Used for Full Text Search</li>
                <li>Keyword - Used for Term Level Queries or Exact Matches</li>
                <li>Number (Integer, Long, Float etc.)</li>
                <li>Date</li>
                <li>Object</li>
                <li>Nested</li>
              </ul>
            </li>
            <li>
              Elasticsearch handles field data types using
              <a
                href="https://www.elastic.co/guide/en/elasticsearch/reference/current/dynamic-field-mapping.html"
                >Dynamic Mapping</a
              >
              with some default setting if the field mapping is not stated
              <strong>explicitly</strong>.
            </li>
            <li>
              For more information regarding the different data types, please
              refer to the
              <a
                href="https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html"
                >official documentation</a
              >.
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
                Create a Person Index with <strong>Explicit Mapping</strong>.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createPersonIndex }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                You should see the Index successfully created.
              </li>
              <li class="text-body-1">
                Check the newly created Index mapping
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ getPersonIndexMapping }}</span></pre>
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
      previous="Batch Processing"
      next="Text Analysis"
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
      "first_name": { "type": "text" },
      "last_name": { "type": "text" },
      "age": { "type": "integer" },
      "email": { "type": "keyword" },
      "supervisor.first_name": { "type": "text" },
      "supervisor.last_name": { "type": "text" }
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
