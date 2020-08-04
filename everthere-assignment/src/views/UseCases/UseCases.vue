<template>
  <div class="page-container">
    <div v-if="error" class="error">{{ error }}</div>

    <div class="page-header">{{ entityTypes[selectedEntity].label }}</div>

    <div v-if="data">
      <ETDataTable
        v-if="selectedEntity === entityTypes.THOUGHT_LEADERS.enumStr "
        v-bind:data="data"
      />
    </div>

  </div>
</template>
<script>

import ETDataTable from "./ThoughtLeaders/BaseThoughtLeadersTable.vue";

// Define a enum of entitytypes for the Use Cases page to handle the different 
// entity types. This can facilitate rendering, i18N if translation libraries 
// like Izumi are used, etc 
const entityTypes = Object.freeze({
  COMPANIES: {
    enumStr: "COMPANIES",
    label: "Companies" // could be replaced by key for Izumi tranlsation
  },
  EVENTS: {
    enumStr: "EVENTS",
    label: "Live/Virtual Events"
  },
  PUBLICATIONS: {
    enumStr: "PUBLICATIONS",
    label: "Publications"
  },
  THOUGHT_LEADERS: {
    enumStr: "THOUGHT_LEADERS",
    label: "Thought Leaders"
  },
  PODCASTS: {
    enumStr: "PODCASTS",
    label: "Podcasts"
  },
  WEBINARS: {
    enumStr: "WEBINARS",
    label: "Webinars"
  }
});

export default {
  name: "UseCases",
  components: {
    ETDataTable
  },
  props: {
    message: String
  },
  data() {
    return {
      entityTypes: entityTypes,
      selectedEntity: entityTypes.THOUGHT_LEADERS.enumStr,
      error: null,
      data: []
    };
  },
  mounted() {
    const url = "/api/thought-leaders"; // url replaced depending on entity
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.data = json;
      })
      .catch(error => {
        this.error = error;
      });
  },
  methods: {}
};
</script>

<style scoped>
.page-container {
  padding: 14px;
  background-color: #f6f7f9;
  height: 100vh;
}
.error {
  color: #c41c33;
}
</style>