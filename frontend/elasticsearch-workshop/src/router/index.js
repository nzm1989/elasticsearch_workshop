import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/introduction',
    name: 'Introduction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/GettingStarted/Introduction.vue'
      ),
  },
  {
    path: '/architecture',
    name: 'Architecture',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/GettingStarted/Architecture.vue'
      ),
  },
  {
    path: '/inspecting_cluster',
    name: 'Inspecting Cluster',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/GettingStarted/InspectingCluster.vue'
      ),
  },
  {
    path: '/sharding',
    name: 'Sharding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/GettingStarted/Sharding.vue'
      ),
  },
  {
    path: '/replication',
    name: 'Replication',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/GettingStarted/Replication.vue'
      ),
  },
  {
    path: '/create_and_delete_indices',
    name: 'Create and Delete Indices',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/Documents/CreateAndDeleteIndices.vue'
      ),
  },
  {
    path: '/index_document',
    name: 'Index Document',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/Documents/IndexDocument.vue'
      ),
  },
  {
    path: '/update_document',
    name: 'Update Document',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/Documents/UpdateDocument.vue'
      ),
  },
  {
    path: '/replace_and_delete_document',
    name: 'Replace and Delete Document',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/Documents/ReplaceAndDeleteDocument.vue'
      ),
  },
  {
    path: '/optimistic_concurrency_control',
    name: 'Optimistic Concurrency Control',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/Documents/OptimisticConcurrencyControl.vue'
      ),
  },
  {
    path: '/update_and_delete_document_by_query',
    name: 'Update and Delete Document by Query',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/Documents/UpdateAndDeleteDocumentByQuery.vue'
      ),
  },
  {
    path: '/batch_processing',
    name: 'Batch Processing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/Documents/BatchProcessing.vue'
      ),
  },
  {
    path: '/text_analysis',
    name: 'Text Analysis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/MappingAndAnalysis/TextAnalysis.vue'
      ),
  },
  {
    path: '/inverted_index',
    name: 'Inverted Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/MappingAndAnalysis/InvertedIndex.vue'
      ),
  },
  {
    path: '/mapping_and_data_type',
    name: 'Mapping and Data Type',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/MappingAndAnalysis/MappingAndDataType.vue'
      ),
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/SearchAndQueries/Search.vue'
      ),
  },
  {
    path: '/term_level_query',
    name: 'Term Level Query',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/SearchAndQueries/TermLevelQuery.vue'
      ),
  },
  {
    path: '/full_text_query',
    name: 'Full Text Query',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/SearchAndQueries/FullTextQuery.vue'
      ),
  },
  {
    path: '/compound_query',
    name: 'Compound Query',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/SearchAndQueries/CompoundQuery.vue'
      ),
  },
  {
    path: '/fuzzy_query',
    name: 'Fuzzy Query',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/SearchAndQueries/FuzzyQuery.vue'
      ),
  },
  {
    path: '/pagination',
    name: 'Pagination',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/SearchAndQueries/Pagination.vue'
      ),
  },
  {
    path: '/highlighting',
    name: 'Highlighting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/SearchAndQueries/Highlighting.vue'
      ),
  },
  {
    path: '/integration_with_django',
    name: 'Integration with Django',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/Bonus/IntegrationWithDjango.vue'
      ),
  },
  {
    path: '/indexing_attachment',
    name: 'Indexing Attachment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/Bonus/IndexingAttachment.vue'
      ),
  },
  {
    path: '/the_end',
    name: 'The End',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/TheEnd.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
