<template>
  <div class="main-content">
    <v-sheet align="center">
      <div class="justify-content-center">
        <span class="workshop-title">Elasticsearch Architecture</span>
      </div>

      <div class="content-class">
        <v-card class="pt-5">
          <v-img
            width="20vw"
            class="mb-5 border"
            src="../../assets/cluster_and_nodes.png"
          ></v-img>
          <div class="d-flex justify-center text-left">
            <ul>
              <li class="text-body-1">
                When you start up the Elasticsearch instance, you are starting a
                <a
                  href="https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html"
                  ><strong>node</strong></a
                >.
                <br />
              </li>
              <li class="text-body-1">
                You can start up multiple nodes and form them into a
                <a
                  href="https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-cluster.html"
                >
                  <strong>cluster</strong>
                </a>
                of nodes.
              </li>
              <li class="text-body-1">
                Each node can fulfil a specific or multiple roles
              </li>
            </ul>
            <span class="text-body-1"></span>
          </div>
        </v-card>
      </div>

      <div class="content-class">
        <v-card class="pt-5">
          <v-img
            width="20vw"
            class="mb-5 border"
            src="../../assets/index_and_document.png"
          ></v-img>
          <div class="d-flex justify-center text-left">
            <ul>
              <li class="text-body-1">
                All data passed into Elasticsearch will be stored in a
                <a
                  href="https://www.elastic.co/guide/en/elasticsearch/reference/current/docs.html"
                >
                  <strong>Document</strong>
                </a>
              </li>
              <li class="text-body-1">
                Multiple Documents are group together in an
                <a
                  href="https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html"
                >
                  <strong>Index</strong>
                </a>
              </li>
            </ul>
          </div>

          <div class="mt-3 pb-5 d-flex justify-center">
            <v-sheet align="left" width="30vw" class="text-body-2 code-color">
              <span class="text-h6">Raw Data</span>
              <pre
                class="text--primary"
              ><span>{{ sampleInputJson }}</span></pre>
            </v-sheet>
            <v-icon class="ml-4 mr-4">mdi-chevron-right</v-icon>
            <v-sheet align="left" width="35vw" class="text-body-2 code-color">
              <span class="text-h6">Document</span>
              <pre
                class="text--primary"
              ><span>{{ sampleOutputJson }}</span></pre>
            </v-sheet>
          </div>
        </v-card>
      </div>
    </v-sheet>
    <Navigation previous="Introduction" next="Inspecting Cluster"></Navigation>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'ArchitectureAndTerminology',
  components: {
    Navigation,
  },
  data: () => ({
    show: false,
    terms: [
      {
        term: 'Cluster',
        description: 'asdasd',
        url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-cluster.html',
      },
      {
        term: 'Node',
        description: 'asdasd',
        url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html',
      },
      {
        term: 'Document',
        description: 'asdasd',
        url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html',
      },
    ],
    sampleInputJson:
      '{\n' +
      '   "unique_id": "ACC22",\n' +
      '   "iconcolour": null,\n' +
      '   "account_number": "49122100",\n' +
      '   "bsb_field": "067777",\n' +
      '   "financial_institution": "Bank of Australia"\n' +
      '}',
    sampleOutputJson:
      '{\n' +
      '  "_index" : "ib_account",\n' +
      '  "_type" : "_doc",\n' +
      '  "_id" : "ACC22",\n' +
      '  "_version" : 1,\n' +
      '  "_seq_no" : 289,\n' +
      '  "_primary_term" : 1,\n' +
      '  "found" : true,\n' +
      '  "_source" : {\n' +
      '      "unique_id": "ACC22",\n' +
      '      "iconcolour": null,\n' +
      '      "account_number": "49122100",\n' +
      '      "bsb_field": "067777",\n' +
      '      "financial_institution": "Bank of Australia"\n' +
      '  }\n' +
      '}',
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
