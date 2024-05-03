<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="justify-content-center">
      <span class="workshop-title">Sharding</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <v-img
          width="25vw"
          class="mb-5 border"
          src="../../assets/sharding.png"
        ></v-img>
        <div class="d-flex justify-center text-left">
          <ul>
            <li class="text-body-1">
              Elasticsearch employs a technique call
              <a
                href="https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-cluster.html#cluster-shard-allocation-settings"
              >
                <strong>Sharding</strong>
              </a>
              to enable <strong>horizontal scaling</strong>.
            </li>
            <li class="text-body-1">
              <strong>Documents</strong> within the index are split into
              <strong>shards</strong> to be deployed into multiple nodes for
              scaling.
            </li>
            <li class="text-body-1">
              Improve performance through <strong>parallelization</strong> and
              increase throughput of queries
            </li>
            <li class="text-body-1">
              By default, Elasticsearch creates
              <strong>1 shard per index</strong>
            </li>
          </ul>
        </div>
      </v-card>
    </div>
    <Navigation
      class="main-content"
      previous="Inspecting Cluster"
      next="Replication"
    ></Navigation>
  </v-sheet>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'Sharding',
  components: {
    Navigation,
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
