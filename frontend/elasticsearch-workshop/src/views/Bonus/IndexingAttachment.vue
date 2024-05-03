<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Indexing Attachment</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <v-img
          width="20vw"
          class="mb-5 border"
          src="../../assets/index_attachment.png"
        ></v-img>
        <div class="d-flex justify-center text-left">
          <ul>
            <li>
              Elasticsearch has an optional plugin which allows us to extract
              file attachments in common formats (such as PPT, XLS, and PDF) by
              using the Apache text extraction library Tika.
            </li>
            <li>
              The plugin will make use of the
              <a
                href="https://www.elastic.co/guide/en/elasticsearch/reference/master/ingest.html"
                >ingest pipeline</a
              >
              which performs data transformation before indexing.
            </li>
            <li>
              The file has to be a base64 string for the pipeline to process.
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
                Create the Ingest Attachment Pipeline.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createIngestPipeline }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Create a new Index.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createIndex }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Prepare a file and covert it into base64 string.
              </li>
              <li class="text-body-1">
                Create a new Document with the base64 string using the ingest
                pipeline.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createDocument }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Retrieve the Document.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ getDocument }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Search through the attachment field.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ searchDocument }}</span></pre>
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
      previous="Integration with Django"
      next="The End"
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
    createIngestPipeline: `PUT _ingest/pipeline/attachment
{
  "description": "Attachment Pipeline",
  "processors": [
    {
      "attachment": {
        "field": "attachment_data"
      }
    }]
}`,
    createIndex: 'PUT /test_attachment',
    getDocument: 'GET /test_attachment/_doc/1',
    createDocument: `PUT /test_attachment/_doc/1?pipeline=attachment
{
  "attachment_data": <base64 string here>
}`,
    searchDocument: `GET /test_attachment/_search
{
  "query": {
    "match": {
      "attachment.content": <search term that you indexed>
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

.text--primary {
  overflow-y: scroll;
}
</style>
