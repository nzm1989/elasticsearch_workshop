<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Replace and Delete Document</span>
    </div>

    <div class="main-content">
      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Activity</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ol>
              <li class="text-body-1">
                Create a Account Document with id 101
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createAccountRecord }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Replace the Account Document with id 101
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ replaceAccountRecord }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Retrieve the replaced Account Document of id 101
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ retrieveAccountRecordByID }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">You should see the document replaced.</li>
              <li class="text-body-1">
                Delete the Account Document of id 101
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ deleteAccountRecordByID }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Retrieve the deleted Account Document of id 101
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ retrieveAccountRecordByID }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                You should see that the Document is no longer found.
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
                Create a Person Document with your <strong>first_name</strong>,
                <strong>last_name</strong> and <strong>age</strong> using id 201
              </li>
              <li class="text-body-1">
                Replace the Person Document you have created by adding a new
                field <strong>country</strong>.
              </li>
              <li class="text-body-1">
                Retrieve the Document and ensure it is replaced.
              </li>
              <li class="text-body-1">
                Delete the Person Document you have created.
              </li>
              <li class="text-body-1">
                Ensure the Document is no longer found.
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
      next="Optimistic Concurrency Control"
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
    createAccountRecord: `PUT /account/_doc/101
{
  "account_num": "12345",
  "country": "Singapore"

}`,
    replaceAccountRecord: `PUT /account/_doc/101
{
  "account_num": "54321",
  "country": "Australia"
}`,
    retrieveAccountRecordByID: 'GET /account/_doc/101',
    deleteAccountRecordByID: 'DELETE /account/_doc/101',
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
