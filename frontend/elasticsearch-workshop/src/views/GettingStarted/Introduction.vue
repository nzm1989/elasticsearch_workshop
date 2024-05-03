<template>
  <div class="main-content">
    <v-sheet align="center">
      <div>
        <v-img
          height="50"
          width="50"
          src="../../assets/elasticsearch_logo.png"
        ></v-img>
        <span class="workshop-title">What is Elasticsearch?</span>
      </div>
      <div class="workshop-content">
        <span
          >Elasticsearch is a core product of the
          <a
            href="https://www.elastic.co/elastic-stack?elektra=home&storm=stack"
            >ELK stack</a
          >
          which allows search, analysis, and visualization it in real time</span
        >
      </div>

      <v-card class="mt-9">
        <v-card-title class="text-center">ELK stack</v-card-title>
        <div class="d-flex">
          <v-card-text>
            <v-img
              height="50"
              width="50"
              src="../../assets/elasticsearch_logo.png"
              class="mb-3"
            />
            <div class="mb-2">
              <span class="text-h6">Elasticsearch</span>
            </div>
            <span class="text-body-1"
              >Elasticsearch is a distributed, RESTful search and analytics
              engine capable performing analytics and
              <strong>full-text-search</strong>.
            </span>
          </v-card-text>

          <v-card-text>
            <v-img
              height="50"
              width="50"
              src="../../assets/kibana.png"
              class="mb-3"
            />
            <div class="mb-2">
              <span class="text-h6">Kibana</span>
            </div>
            <span class="text-body-1"
              >Kibana sits on top of the Elastic Stack, providing
              <strong>search</strong>, <strong>debugging</strong>,
              <strong>data visualization</strong> capabilities for data indexed
              in Elasticsearch
            </span>
          </v-card-text>

          <v-card-text>
            <v-img
              height="50"
              width="50"
              src="../../assets/logstash.png"
              class="mb-3"
            />
            <div class="mb-2">
              <span class="text-h6">Logstash</span>
            </div>
            <span class="text-body-1"
              >Logstash is a server-side data processing pipeline that
              <strong>ingests data</strong> from a multitude of sources, perform
              <strong>data transformation</strong> and output it in multiple
              formats
            </span>
          </v-card-text>
        </div>
      </v-card>

      <!--    <iframe-->
      <!--      class="iframe"-->
      <!--      src="http://localhost:5601/app/dev_tools#/console"-->
      <!--    ></iframe>-->
    </v-sheet>
    <Navigation previous="Home" next="Architecture"></Navigation>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'Introduction',
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

.workshop-content {
  font-size: 1.3rem;
}

.iframe {
  height: 1400px;
  width: 100%;
}
</style>
