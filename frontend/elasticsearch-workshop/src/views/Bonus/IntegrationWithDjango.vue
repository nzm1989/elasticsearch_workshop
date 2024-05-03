<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Integration with Django</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <v-img
          width="30vw"
          class="mb-5 border"
          src="../../assets/workshop_architecture.png"
        ></v-img>
        <div class="d-flex justify-center text-left">
          <ul>
            <li>
              This workshop architecture is setup as 4 Docker containers in the
              same network.
              <ol>
                <li>Frontend - VueJS</li>
                <li>Backend - Django Rest Framework</li>
                <li>Elasticsearch single node cluster</li>
                <li>Kibana</li>
              </ol>
            </li>
            <li>
              The ports access and mapping from your host to the individual
              containers in the Docker network are as above.
            </li>
            <li>
              In this section, we will be configuring Backend to communicate
              with Elasticsearch instead of Kibana.
            </li>
            <li>
              Python has a number of library wrappers which allows us to
              communicated to the Elasticsearch server.
            </li>
            <li>
              The library we are going to use is called the
              <a href="https://elasticsearch-dsl.readthedocs.io/"
                >elasticsearch-dsl</a
              >.
            </li>
          </ul>
        </div>
      </v-card>

      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Activity</span>
        <v-expansion-panels align="left">
          <v-expansion-panel @click="clearResult()">
            <v-expansion-panel-header>
              Create a Person Index with mapping using elasticsearch-dsl
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-sheet class="mb-6">
                <v-btn
                  rounded
                  width="100%"
                  color="primary"
                  @click="submitTaskOne"
                >
                  Submit
                </v-btn>
              </v-sheet>
              <span class="text-body-1"><strong>Result:</strong></span>
              <v-sheet
                min-height="10vh"
                align="left"
                class="text-body-2 code-color"
              >
                <pre class="text--primary"><span>{{ taskResult }}</span></pre>
              </v-sheet>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel @click="clearResult()">
            <v-expansion-panel-header>
              Create a Person Document using elasticsearch-dsl
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-sheet class="mb-6">
                <v-btn
                  rounded
                  width="100%"
                  color="primary"
                  @click="submitTaskTwo"
                >
                  Submit
                </v-btn>
              </v-sheet>
              <span class="text-body-1"><strong>Result:</strong></span>
              <v-sheet
                min-height="10vh"
                align="left"
                class="text-body-2 code-color"
              >
                <pre class="text--primary"><span>{{ taskResult }}</span></pre>
              </v-sheet>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel @click="clearResult()">
            <v-expansion-panel-header>
              Retrieve a Person Index using elasticsearch-dsl
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-sheet class="mb-6">
                <v-btn
                  rounded
                  width="100%"
                  color="primary"
                  @click="submitTaskThree"
                >
                  Submit
                </v-btn>
              </v-sheet>
              <span class="text-body-1"><strong>Result:</strong></span>
              <v-sheet
                min-height="10vh"
                align="left"
                class="text-body-2 code-color"
              >
                <pre class="text--primary"><span>{{ taskResult }}</span></pre>
              </v-sheet>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel @click="clearResult()">
            <v-expansion-panel-header>
              Update a Person Document using elasticsearch-dsl
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-sheet class="mb-6">
                <v-btn
                  rounded
                  width="100%"
                  color="primary"
                  @click="submitTaskFour"
                >
                  Submit
                </v-btn>
              </v-sheet>
              <span class="text-body-1"><strong>Result:</strong></span>
              <v-sheet
                min-height="10vh"
                align="left"
                class="text-body-2 code-color"
              >
                <pre class="text--primary"><span>{{ taskResult }}</span></pre>
              </v-sheet>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel @click="clearResult()">
            <v-expansion-panel-header>
              Do a Bulk indexing of Documents using elasticsearch-dsl
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-sheet class="mb-6">
                <v-btn
                  rounded
                  width="100%"
                  color="primary"
                  @click="submitTaskFive"
                >
                  Submit
                </v-btn>
              </v-sheet>
              <span class="text-body-1"><strong>Result:</strong></span>
              <v-sheet
                min-height="10vh"
                align="left"
                class="text-body-2 code-color"
              >
                <pre class="text--primary"><span>{{ taskResult }}</span></pre>
              </v-sheet>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel @click="clearResult()">
            <v-expansion-panel-header>
              Delete a Person Document using elasticsearch-dsl
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-sheet class="mb-6">
                <v-btn
                  rounded
                  width="100%"
                  color="primary"
                  @click="submitTaskSix"
                >
                  Submit
                </v-btn>
              </v-sheet>
              <span class="text-body-1"><strong>Result:</strong></span>
              <v-sheet
                min-height="10vh"
                align="left"
                class="text-body-2 code-color"
              >
                <pre class="text--primary"><span>{{ taskResult }}</span></pre>
              </v-sheet>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel @click="clearResult()">
            <v-expansion-panel-header>
              Perform a Term Level Query using elasticsearch-dsl
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-sheet class="mb-6">
                <v-btn
                  rounded
                  width="100%"
                  color="primary"
                  @click="submitTaskSeven"
                >
                  Submit
                </v-btn>
              </v-sheet>
              <span class="text-body-1"><strong>Result:</strong></span>
              <v-sheet
                min-height="10vh"
                align="left"
                class="text-body-2 code-color"
              >
                <pre class="text--primary"><span>{{ taskResult }}</span></pre>
              </v-sheet>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel @click="clearResult()">
            <v-expansion-panel-header>
              Perform a Full Text Query using elasticsearch-dsl
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-sheet class="mb-6">
                <v-btn
                  rounded
                  width="100%"
                  color="primary"
                  @click="submitTaskEight"
                >
                  Submit
                </v-btn>
              </v-sheet>
              <span class="text-body-1"><strong>Result:</strong></span>
              <v-sheet
                min-height="10vh"
                align="left"
                class="text-body-2 code-color"
              >
                <pre class="text--primary"><span>{{ taskResult }}</span></pre>
              </v-sheet>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel @click="clearResult()">
            <v-expansion-panel-header>
              Perform a Compound Query using elasticsearch-dsl
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-sheet class="mb-6">
                <v-btn
                  rounded
                  width="100%"
                  color="primary"
                  @click="submitTaskNine"
                >
                  Submit
                </v-btn>
              </v-sheet>
              <span class="text-body-1"><strong>Result:</strong></span>
              <v-sheet
                min-height="10vh"
                align="left"
                class="text-body-2 code-color"
              >
                <pre class="text--primary"><span>{{ taskResult }}</span></pre>
              </v-sheet>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
      previous="Highlighting"
      next="Indexing Attachment"
    ></Navigation>
  </v-sheet>
</template>

<script>
import axios from 'axios';
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
    taskResult: '',
  }),
  mounted() {
    axios.defaults.baseURL = 'http://localhost:8001/';
  },
  methods: {
    clearResult() {
      this.taskResult = '';
    },
    async submitTaskOne() {
      try {
        const response = await axios.get('api/v1/create_index');
        this.taskResult = response.data;
      } catch (e) {
        this.taskResult = e;
      }
    },
    async submitTaskTwo() {
      try {
        const response = await axios.get('api/v1/create_document');
        this.taskResult = response.data;
      } catch (e) {
        this.taskResult = e;
      }
    },
    async submitTaskThree() {
      try {
        const response = await axios.get('api/v1/get_document');
        this.taskResult = response.data;
      } catch (e) {
        this.taskResult = e;
      }
    },
    async submitTaskFour() {
      try {
        const response = await axios.get('api/v1/update_document');
        this.taskResult = response.data;
      } catch (e) {
        this.taskResult = e;
      }
    },
    async submitTaskFive() {
      try {
        const response = await axios.get('api/v1/bulk_index_document');
        this.taskResult = response.data;
      } catch (e) {
        this.taskResult = e;
      }
    },
    async submitTaskSix() {
      try {
        const response = await axios.get('api/v1/delete_document');
        this.taskResult = response.data;
      } catch (e) {
        this.taskResult = e;
      }
    },
    async submitTaskSeven() {
      try {
        const response = await axios.get('api/v1/term_level_query');
        this.taskResult = response.data;
      } catch (e) {
        this.taskResult = e;
      }
    },
    async submitTaskEight() {
      try {
        const response = await axios.get('api/v1/full_text_query');
        this.taskResult = response.data;
      } catch (e) {
        this.taskResult = e;
      }
    },
    async submitTaskNine() {
      try {
        const response = await axios.get('api/v1/compound_query');
        this.taskResult = response.data;
      } catch (e) {
        this.taskResult = e;
      }
    },
  },
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
