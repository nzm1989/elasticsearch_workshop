<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Indexing Document</span>
    </div>

    <div class="main-content">
      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Activity</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ol>
              <li class="text-body-1">
                Index a Account record.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ indexAccountRecord }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                You should see a success message. Note that the _id is
                automatically generated.
              </li>
              <li class="text-body-1">
                Index the Account record with a document ID of
                <strong>100</strong>.
                <br />
                Note that the HTTP verb used is <strong>PUT</strong> instead of
                POST
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ indexAccountRecordWithID }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                You should see a success message and this time with the _id
                being <strong>100</strong>
              </li>
              <li class="text-body-1">
                Retrieve the Account Document by id
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ retrieveAccountRecordByID }}</span></pre>
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
                Index a Person document with <strong>first_name</strong>,
                <strong>last_name</strong> and <strong>age</strong> field using
                your own name and age.
              </li>
              <li class="text-body-1">
                Index a Person document with <strong>first_name</strong>,
                <strong>last_name</strong> and <strong>age</strong> field using
                your own name and age.
                <br />
                This time, create it with an id of <strong>200</strong>.
              </li>
              <li class="text-body-1">
                Retrieve the record that you have just created using id 200.
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
      previous="Create and Delete Indices"
      next="Update Document"
    ></Navigation>
  </v-sheet>
</template>

<script>
import Navigation from '@/components/Navigation';
import Console from '@/components/Console';

export default {
  name: 'IndexDocument',
  components: {
    Navigation,
    Console,
  },
  data: () => ({
    show: false,
    indexAccountRecord: `POST /account/_doc
{
  "account_num": "12345",
  "country": "Singapore"
}`,
    indexAccountRecordWithID: `PUT /account/_doc/100
{
  "account_num": "100",
  "country": "Indonesia"
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
