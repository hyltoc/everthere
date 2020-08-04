<template>
  <div class="filter-container">
    <div class="filter-tags-container">
      <Button v-for="(filter, index) of filters" 
      :label="filter" class="filter-tag p-button-outlined p-button-rounded" :key="filter" 
      :class="'color-'+index"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "FilterPanel",
  props: {
    filters: Array
  }
};
</script>

<style scoped>
.filter-container {
  display: flex;
  width: 100%;
  height: 70px;
  line-height: 70px;
}
.filter-tag {
    margin-right: 16px;
    border: none !important;
    background-color: #FFFFFF !important;
}
.filter-tags-container {
    height: 36px;
}
.color-1 {
    color: orange !important;
}
.color-2 {
    color: purple !important;
}
.color-3 {
    color: blue !important;
}
.color-4 {
    color: lightgreen !important;
}

</style>