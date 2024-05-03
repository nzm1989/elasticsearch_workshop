<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Create and Delete Indices</span>
    </div>

    <div class="main-content">
      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Activity</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ol>
              <li class="text-body-1">
                Create Person Index
                <br />
                <code class="text--primary">{{ createPersonIndex }}</code>
              </li>
              <li class="text-body-1">
                You should see the Index created successfully
              </li>
              <li class="text-body-1">
                Delete Person Index
                <br />
                <code class="text--primary">{{ deletePersonIndex }}</code>
              </li>
              <li class="text-body-1">
                Create Person Index with settings
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createPersonIndexWithSetting }}</span></pre>
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
                Create Account Index
                <br />
                <v-expansion-panels class="mt-2 mb-2" align="left">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Suggested answer
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <code class="text--primary">{{
                        createAccountIndex
                      }}</code>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </li>
              <li class="text-body-1">
                Delete Account Index
                <v-expansion-panels class="mt-2 mb-2" align="left">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Suggested answer
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <code class="text--primary">{{
                        deleteAccountIndex
                      }}</code>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </li>
              <li class="text-body-1">
                Create Account Index with 3 shards and 2 replicas
                <v-expansion-panels class="mt-2 mb-2" align="left">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Suggested answer
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-sheet align="left" class="text-body-2 code-color">
                        <pre
                          class="text--primary"
                        ><span>{{ createAccountIndexWithSetting }}</span></pre>
                      </v-sheet>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
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
      previous="Sharding"
      next="Index Document"
    ></Navigation>
  </v-sheet>
</template>

<script>
import Navigation from '@/components/Navigation';
import Console from '@/components/Console';

export default {
  name: 'CreateAndDeleteIndices',
  components: {
    Navigation,
    Console,
  },
  data: () => ({
    show: false,
    createPersonIndex: 'PUT /person',
    deletePersonIndex: 'DELETE /person',
    createPersonIndexWithSetting: `PUT /person
{
  "settings": {
    "number_of_shards": 2,
    "number_of_replicas": 1
  }
}`,
    createAccountIndex: 'PUT /account',
    deleteAccountIndex: 'DELETE /account',
    createAccountIndexWithSetting: `PUT /account
{
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 2
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
