<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Replication</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <v-img
          width="25vw"
          class="mb-5 border"
          src="../../assets/replica.png"
        ></v-img>
        <div class="d-flex justify-center text-left">
          <ul>
            <li class="text-body-1">
              <a
                href="https://www.elastic.co/guide/en/elasticsearch/reference/current/scalability.html"
                ><strong>Replication</strong></a
              >
              is Elasticsearch solution for <strong>Fault Tolerance</strong> and
              <strong>High Availability</strong>.
            </li>
            <li class="text-body-1">
              A <strong>Primary Shard</strong> is created for each Index.
            </li>
            <li class="text-body-1">
              <strong>Replica Shards</strong> are created as a
              <strong>complete copy</strong> of a Primary Shard.
            </li>
            <li class="text-body-1">
              Replica Shards can also help increase the
              <strong>throughput</strong> of queries
            </li>
            <li class="text-body-1">
              By default, Elasticsearch creates
              <strong>a Primary Shard and a Replica Shard</strong> for each
              Index if there are multiple Nodes available
            </li>
            <li class="text-body-1">
              A Replica Shard is
              <strong>never stored in the same Node</strong> as a Primary Shard
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
                Create a test replica Index
                <br />
                <code class="text--primary">PUT /test_replica</code>
              </li>
              <li class="text-body-1">
                You should see the Index created successfully
              </li>
              <li class="text-body-1">
                Check the Cluster health now and you should see the status is
                now yellow.
                <br />
                This is due to only a Single Node is available and Replica
                shards must be stored in a different Node from the Primary
                Shard.
                <br />
                <code class="text--primary">GET /_cluster/health</code>
              </li>
              <li class="text-body-1">
                Check the Index information and you should see a Primary Node
                and Replica Node created.
                <br />
                <code class="text--primary">GET /_cat/indices?v</code>
              </li>
              <li class="text-body-1">
                Check the Shard information and you should see the Replica Shard
                being Unassigned as there is one a Single Node available.
                <br />
                <code class="text--primary">GET /_cat/shards?v</code>
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
      next="Create and Delete Indices"
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
