<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Batch Processing</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <div class="d-flex justify-center text-left">
          <ul>
            <li class="text-body-1">
              Batch Processing allows you execute many different queries in
              <strong>Bulk</strong>.
            </li>
            <li class="text-body-1">
              We will make use of the Bulk API to execute these actions.
              <ol>
                <li>
                  Index - Create Document and Replace them if the id already
                  exist
                </li>
                <li>
                  Create - Create Document and raise error if the id already
                  exist
                </li>
                <li>
                  Update - Update Document and raise error if the id does not
                  exist
                </li>
                <li>
                  Delete - Delete Document and raise error if the id does not
                  exist
                </li>
              </ol>
            </li>
            <li>
              The Request Body send to the Bulk API should be in
              <strong>ndjson</strong> format.
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
                Execute a Bulk request using <strong>Index</strong> and
                <strong>Create</strong>.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ bulkIndexCreate }}</span></pre>
                </v-sheet>
              </li>
              <li>You should see the Documents created.</li>
              <li class="text-body-1">
                Execute a Bulk request using <strong>Update</strong> and
                <strong>Delete</strong>.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ bulkUpdateDelete }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Check the updated and deleted documents.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ retrieveRecord }}</span></pre>
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
      previous="Optimistic Concurrency Control"
      next="Mapping and Data Type"
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
    retrieveRecord: `GET /account/_doc/300
GET /person/_doc/300`,
    bulkIndexCreate: `POST /_bulk
{ "index": { "_index": "account", "_id": 300 } }
{ "account_num": "300", "country": "Singapore" }
{ "create": { "_index": "person", "_id": 300 } }
{ "first_name": "Peter", "last_name": "Pan" } `,
    bulkUpdateDelete: `POST /_bulk
{ "update": { "_index": "account", "_id": 300 } }
{ "doc": { "account_num": "300", "country": "Singapore" } }
{ "delete": { "_index": "person", "_id": 300 } }`,
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
