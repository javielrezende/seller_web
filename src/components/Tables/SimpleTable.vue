<template>
  <div>
    <md-table v-model="data" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell
          v-for="column in columns"
          :md-label="column.label"
          :key="column.label"
          >{{ item[column.name] }}</md-table-cell
        >
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
    },
    columns: {
      type: Array,
    },
  },
  data() {
    return {
      selected: [],
    };
  },
};
</script>
