<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Optimistic Concurrency Control</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <v-img
          width="50vw"
          class="mb-5 border"
          src="../../assets/optimistic_concurrency_control.png"
        ></v-img>
        <div class="d-flex justify-center text-left">
          <ul>
            <li class="text-body-1">
              Optimistic Concurrency Control is a mechanism which does a series
              of <strong>transactions</strong>, then checks if the transaction
              is able to <strong>commit</strong>.
            </li>
            <li class="text-body-1">
              The example above shows that when an a document has already been
              updated by another transaction, the stale data should not be
              allowed to commit.
              <ol>
                <li>User 1 retrieves the Account information.</li>
                <li>User 2 retrieves the same Account amount.</li>
                <li>User 1 updates the Account amount.</li>
                <li>
                  User 2 tries to update the Account amount but this transaction
                  should be rejected due to stale data.
                </li>
              </ol>
            </li>
            <li>
              Elasticsearch also has the mechanism to deal with Optimistic
              Concurrency Control using the <strong>_version</strong> or
              <strong>Primary Term and Sequence Number</strong>.
            </li>
            <li>
              <strong>_version</strong> is used in legacy version of
              Elasticsearch so we will only be focusing on
              <strong>Primary Term and Sequence Number</strong> in this section.
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
                Create a Account Document with id 103
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createAccountRecord }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Retrieve the Account Document with id 103
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ retrieveAccountRecord }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Update the Account Document using the Primary Term and Sequence
                Number.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ updateAccountRecord }}</span></pre>
                </v-sheet>
              </li>
              <li>You should see the Update is successful.</li>
              <li class="text-body-1">
                Update the Account Document again using the same Primary Term
                and same Sequence Number.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ updateAccountRecord }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">You should see a conflict error.</li>
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
      previous="Replace and Delete Document"
      next="Update and Delete Document by Query"
    ></Navigation>
  </v-sheet>
</template>

<script>
import Navigation from '@/components/Navigation';
import Console from '@/components/Console';

export default {
  name: 'Replication',
  components: {
    Navigation,
    Console,
  },
  data: () => ({
    show: false,
    createAccountRecord: `PUT /account/_doc/103
{
  "account_num": "103",
  "country": "Singapore"
}`,
    retrieveAccountRecord: 'GET /account/_doc/103',
    updateAccountRecord: `POST /account/_update/103?if_primary_term=X&if_seq_no=Y
{
  "doc": {
    "account_num": "203",
    "country": "Australia"
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
