<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" width="350px" app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Menu </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          @click="
            $router.push({ name: 'Home' });
            scrollToTop();
          "
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group
          :value="false"
          prepend-icon="mdi-account-circle"
          v-for="item in menuItem"
          :key="item.title"
        >
          <template v-slot:activator>
            <v-list-item-title> {{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="subItem in item.subItems"
            :key="subItem.title"
            @click="
              $router.push({ name: subItem.target });
              scrollToTop();
            "
            link
          >
            <v-list-item-icon>
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Elasticsearch Workshop</v-toolbar-title>
    </v-app-bar>
    <v-main :class="shrinkContent">
      <v-scroll-x-transition mode="out-in">
        <router-view></router-view>
      </v-scroll-x-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  computed: {
    shrinkContent() {
      return this.currentView !== 'Banner' ? 'main-content' : '';
    },
  },
  data: () => ({
    drawer: null,
    // options: {
    //   duration: 1200,
    //   easing: 'easeInOutQuart',
    // },
    menuItem: [
      {
        title: 'Get Started',
        subItems: [
          {
            icon: 'mdi-chevron-right',
            title: 'What is Elasticsearch',
            target: 'Introduction',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Architecture',
            target: 'Architecture',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Inspecting Cluster',
            target: 'Inspecting Cluster',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Sharding',
            target: 'Sharding',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Replication',
            target: 'Replication',
          },
        ],
      },
      {
        title: 'Documents',
        subItems: [
          {
            icon: 'mdi-chevron-right',
            title: 'Create and Delete Indices',
            target: 'Create and Delete Indices',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Index Document',
            target: 'Index Document',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Update Document',
            target: 'Update Document',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Replace and Delete Document',
            target: 'Replace and Delete Document',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Optimistic Concurrency Control',
            target: 'Optimistic Concurrency Control',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Update and Delete Document by Query',
            target: 'Update and Delete Document by Query',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Batch Processing',
            target: 'Batch Processing',
          },
        ],
      },
      {
        title: 'Mapping and Analysis',
        subItems: [
          {
            icon: 'mdi-chevron-right',
            title: 'Mapping and Data Type',
            target: 'Mapping and Data Type',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Text Analysis',
            target: 'Text Analysis',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Inverted Index',
            target: 'Inverted Index',
          },
        ],
      },
      {
        title: 'Search and Queries',
        subItems: [
          {
            icon: 'mdi-chevron-right',
            title: 'Search',
            target: 'Search',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Term Level Query',
            target: 'Term Level Query',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Full Text Query',
            target: 'Full Text Query',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Compound Query',
            target: 'Compound Query',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Fuzzy Query',
            target: 'Fuzzy Query',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Pagination',
            target: 'Pagination',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Highlighting',
            target: 'Highlighting',
          },
        ],
      },
      {
        title: 'Bonus Content',
        subItems: [
          {
            icon: 'mdi-chevron-right',
            title: 'Integration with Django',
            target: 'Integration with Django',
          },
          {
            icon: 'mdi-chevron-right',
            title: 'Indexing Attachment',
            target: 'Indexing Attachment',
          },
        ],
      },
    ],
    currentView: 'Banner',
  }),
  methods: {
    scrollToTop: () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Roboto Flex', 'Roboto', 'Helvetica ', 'Arial', sans-serif;
}

.main-content {
  margin-left: 15vw;
  margin-right: 15vw;
  margin-bottom: 15vh;
  padding-top: 3vh;
}

.sub-content {
  min-height: 75vh;
}

li {
  margin-bottom: 10px;
}

ol {
  margin-top: 10px;
}
</style>
