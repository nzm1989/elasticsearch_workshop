<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Update and Delete Document by Query</span>
    </div>

    <div class="main-content">
      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Activity</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ol>
              <li class="text-body-1">
                Update the Document by <strong>Query</strong>. In-depth
                information about <strong>Query</strong> will be covered later
                on.
                <br />
                <strong>ctx</strong> refers to the context.
                <br />
                <strong>match_all</strong> query refers to all Documents.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ updateAccountRecord }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Check the updated Documents using the
                <strong>Search</strong> API. In-depth information about
                <strong>Search</strong>
                will be covered later on.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ retrieveAccountRecord }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Delete the Account Document by Query
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ deleteAccountRecord }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Check the updated Documents using the
                <strong>Search</strong> API. You should see all the Documents
                had been deleted.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ retrieveAccountRecord }}</span></pre>
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
      next="Batch Processing"
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
    updateAccountRecord: `POST /account/_update_by_query
{
  "script": "ctx._source.country = 'Indonesia'",
  "query": {
    "match_all": {}
  }
}`,
    retrieveAccountRecord: `GET /account/_search
{
  "query": {
    "match_all": {}
  }
}`,
    deleteAccountRecord: `POST /account/_delete_by_query
{
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
</style>
