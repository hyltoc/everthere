<template>
  <div class="table-container">
    <DataTable
      :scrollable="true"
      scrollHeight="flex"
      :value="data"
      class="datatable-thought-leaders p-datatable-lg"
      data-key="id"
      :rowHover="true"
    >
      <Column
        field="rank"
        header="Rank"
        sortable
        headerStyle="width: 60px; text-align: center"
        bodyStyle="text-align: center"
      ></Column>

      <Column field="name" header="Name" sortable headerStyle="width: 15%;"></Column>

      <Column
        field="linkedin_url"
        header="Profile"
        sortable
        headerStyle="width: 80px; text-align: center"
        bodyStyle="text-align: center"
      >
        <template #body="slotProps">
          <a v-bind:href="slotProps.data.linkedin_url">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
        </template>
      </Column>

      <Column field="job_title" header="Title" sortable headerStyle="width: 20%;"></Column>
      <Column field="company_name" header="Name" sortable headerStyle="width: 20%;"></Column>
      <Column field="industry" header="Industry" sortable headerStyle="width: 20%;"></Column>
      <Column field="relevancy_score" header="Relevancy" sortable>
        <template #body="slotProps">
          <ProgressBar :value="slotProps.data.relevancy_score * 100" :showValue="false" />
        </template>
      </Column>
      <Column field="exposure_score" header="Exposure" sortable>
        <template #body="slotProps">
          <ProgressBar :value="slotProps.data.exposure_score * 100" :showValue="false" />
        </template>
      </Column>
      <Column field="label" header="Type" sortable></Column>
    </DataTable>
  </div>
</template>

<script>

export default {
  name: "ETDataTable",
  component: {},
  props: {
    data: Array
  }
};
</script>
<style scoped>
.table-container {
  height: 600px;
}
</style>