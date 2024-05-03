<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Update Document</span>
    </div>

    <div class="main-content">
      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Activity</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ol>
              <li class="text-body-1">
                Get the Account document of id 100 created in the previous
                chapter. Note the current record details.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ retrieveAccountRecordByID }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Update the Account document with an existing field and a new
                field.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ updateAccountRecord }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Retrieve the updated Account document
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ retrieveAccountRecordByID }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                You should see the existing field being updated and the new
                field added to the record.
              </li>
              <li class="text-body-1">
                <v-expansion-panels class="mt-2 mb-2" align="left">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <strong>Things to note</strong>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <ul>
                        <li class="text-body-1">
                          Elasticsearch Documents are immutable
                        </li>
                        <li class="text-body-1">
                          The <strong>Update</strong> action is actually doing
                          the following things
                          <ol>
                            <li>Retrieve the Document</li>
                            <li>Update the Document values</li>
                            <li>Replace the Original Document</li>
                          </ol>
                        </li>
                        <li class="text-body-1">
                          The Update API saves the network traffic by doing the
                          above 3 steps for us
                        </li>
                      </ul>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
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
                Update the Person record using id 200 that you have created in
                the previous chapter.
                <br />
                Update your <strong>age</strong> and add a new field
                <strong>skills</strong>.
              </li>
              <li class="text-body-1">
                Retrieve the record that you have just updated and check that
                the record is updated.
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
      previous="Index Document"
      next="Replace and Delete Document"
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
    updateAccountRecord: `POST /account/_update/100
{
  "doc": {
    "account_num": "12345",
    "country": "Singapore",
    "extra_param": "test"
  }
}`,
    retrieveAccountRecordByID: 'GET /account/_doc/100',
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
