<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Inspecting Cluster</span>
    </div>

    <div class="main-content">
      <div class="d-flex justify-center text-left">
        <span class="text--primary text-body-1">
          Elasticsearch exposes REST Api to communicate with the Elasticsearch
          cluster.
          <br />
          You can use any client to fire the REST Api calls but we will be using
          <strong>Kibana Dev Tools</strong> to help us.
        </span>
      </div>
      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Activity</span>
        <v-expansion-panels align="left">
          <v-expansion-panel>
            <v-expansion-panel-header>
              Get the Cluster health
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code class="text--primary">GET /_cluster/health</code>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              List the node(s) info in the cluster
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code class="text--primary">GET /_cat/nodes?v</code>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              List the full node(s) info in the cluster (Usually used for
              debugging)
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code class="text--primary">GET /_nodes</code>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              List the indices info in the nodes
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <code class="text--primary">GET /_cat/indices?v</code>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-sheet>
      <v-btn rounded width="500px" color="primary" @click="show = !show">
        Open Console
      </v-btn>
    </div>
    <console v-if="show"></console>
    <Navigation
      class="main-content"
      previous="Architecture"
      next="Sharding"
    ></Navigation>
  </v-sheet>
</template>

<script>
import Navigation from '@/components/Navigation';
import Console from '@/components/Console';

export default {
  name: 'InspectingCluster',
  components: {
    Navigation,
    Console,
  },
  data: () => ({
    show: false,
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
