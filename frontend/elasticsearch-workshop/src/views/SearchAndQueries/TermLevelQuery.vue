<template>
  <v-sheet class="pt-6 pb-6" align="center">
    <div class="d-flex justify-center text-left">
      <span class="workshop-title">Term Level Query</span>
    </div>

    <div class="main-content">
      <v-card class="pt-5 pb-5">
        <div class="d-flex justify-center text-left">
          <ul>
            <li>
              Term level query is commonly used to search through keywords,
              range and booleans.
            </li>
            <li>
              As the queries are performed on the Inverted Index, Term level
              query is usually search on exact value types.
            </li>
            <li>Term level query do not analyze the search term.</li>
          </ul>
        </div>
      </v-card>

      <v-sheet class="mt-6 mb-6">
        <span class="text-h4">Activity</span>
        <v-card class="pt-5 pb-5">
          <div class="d-flex justify-center text-left">
            <ol>
              <li class="text-body-1">
                Create a Person Index.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createPersonIndex }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Create a two different Person Document.
                <br />
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createPersonOne }}</span></pre>
                </v-sheet>
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ createPersonTwo }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Execute a Term level query on the <strong>email</strong> field.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ termQuerySingle }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Execute a Term level query on the <strong>email</strong> field
                with multiple values.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ termQueryMulti }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Execute a Term level query on the <strong>email</strong> field
                using prefix.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ termQueryPrefix }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Execute a Term level query on the <strong>email</strong> field
                using exist.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ termQueryExist }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Execute a Term level query on the <strong>email</strong> field
                using wildcard.
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ termQueryWildcard }}</span></pre>
                </v-sheet>
              </li>
              <li class="text-body-1">
                Execute a Term level query on the <strong>age</strong> field
                with range 22 to 24 inclusive
                <v-sheet align="left" class="text-body-2 code-color">
                  <pre
                    class="text--primary"
                  ><span>{{ termQueryRange }}</span></pre>
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
                Execute a Term level query to find Person Document with
                is_active <strong>true</strong>.
              </li>
              <li class="text-body-1">
                Execute a Term level query to find Person Document with age
                between <strong>10 to 22</strong> non-inclusive.
              </li>
              <li class="text-body-1">
                Execute a Term level query to find Person Document with email
                starting with <strong>John</strong>.
              </li>
              <li class="text-body-1">
                Execute a Term level query to find Person Document with email
                that contains <strong>mail.com</strong>.
              </li>
              <li class="text-body-1">
                Execute a Term level query to find Person with full_name
                <strong>James Wong</strong>.
              </li>
              <li class="text-body-1">
                Execute a Term level query to find Person with full_name
                <strong>James Wong</strong> or <strong>John Lee</strong>.
              </li>
            </ol>
          </div>
        </v-card>
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
      previous="Search"
      next="Full Text Query"
    ></Navigation>
  </v-sheet>
</template>

<script>
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
    getPersonIndexMapping: 'GET /person/_mapping',
    createPersonIndex: `PUT /person
{
  "mappings": {
    "properties": {
      "full_name": { "type": "text" },
      "email": { "type": "keyword" },
      "age": { "type": "integer" },
      "is_active": { "type": "boolean" }
    }
  }
}`,
    createPersonOne: `PUT /person/_doc/601
{
  "full_name": "James Wong",
  "email": "James.Wong@mail.com",
  "age": 23,
  "is_active": true
}`,
    createPersonTwo: `PUT /person/_doc/602
{
  "full_name": "John Lee",
  "email": "John.Lee@mail.com",
  "age": 21,
  "is_active": false
}`,
    termQuerySingle: `GET /person/_search
{
  "query": {
    "term": {
      "email": "James.Wong@mail.com"
    }
  }
}`,
    termQueryRange: `GET /person/_search
{
  "query": {
    "range": {
      "age": {
        "gte": 22,
        "lte": 24
      }
    }
  }
}`,
    termQueryMulti: `GET /person/_search
{
  "query": {
    "terms": {
      "email": ["James.Wong@mail.com", "John.Lee@mail.com"]
    }
  }
}`,
    termQueryPrefix: `GET /person/_search
{
  "query": {
    "prefix": {
      "email": "James"
    }
  }
}`,
    termQueryExist: `GET /person/_search
{
  "query": {
    "exists": {
      "field": "full_name"
    }
  }
}`,
    termQueryWildcard: `GET /person/_search
{
  "query": {
    "wildcard": {
      "email": "Ja*@mail.com"
    }
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
