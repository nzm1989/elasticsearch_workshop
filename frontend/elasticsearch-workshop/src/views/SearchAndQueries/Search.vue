<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Search</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <div class="d-flex justify-center text-left">
          <ul>
            <li class="text-body-1">
              Elasticsearch has 2 different ways of querying Documents.
            </li>
            <ol>
              <li>
                <a
                  href="https://www.elastic.co/guide/en/elasticsearch/reference/7.13/search-search.html"
                  >Request URI</a
                >
              </li>
              <li>
                <a
                  href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html"
                  >Query DSL</a
                >
              </li>
            </ol>
            <li>We will only be using the Query DSL in this workshop.</li>
            <li class="text-body-1">
              The Query DSL allows you to specify a Leaf Query or a Compound
              Query.
              <ol>
                <li>
                  Leaf Query - A single query which look for a particular value
                  in a particular field.
                </li>
                <li>
                  Compound Query - A query which wraps multiple Leaf Queries in
                  a logical manner.
                </li>
              </ol>
            </li>
            <li>
              The Query DSL also has 2 different context:
              <ol>
                <li>
                  Query Context - This refers to how well does the Document
                  match the query.
                  <br />
                  The results will be calculated with a Relevance scoring using
                  an algorithm called Okapi BM25.
                </li>
                <li>
                  Filter Context - This refers filtering on Dates, Status or
                  Number Range.
                  <br />
                  This does not affect the Relevance scoring the results.
                </li>
              </ol>
            </li>
            <li>
              There are 2 important Search query types which is commonly used in
              Elasticsearch
              <ol>
                <li>Term Level Query</li>
                <li>Full Text Query</li>
              </ol>
            </li>
            <li>
              All queries will be searching through the
              <strong>Inverted Index</strong>.
            </li>
          </ul>
        </div>
      </v-card>
    </div>
    <Navigation
      class="main-content"
      previous="Text Analysis"
      next="Term Level Query"
    ></Navigation>
  </v-sheet>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'Search',
  components: {
    Navigation,
  },
  data: () => ({}),
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
