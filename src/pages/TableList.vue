<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Vendedores cadastrados</h4>
            <p class="category"></p>
          </md-card-header>

          <div class="md-layout-item md-size-100 text-left">
            <md-button to="/seller" class="md-raised md-lightgreen"
              >Cadastrar</md-button
            >
          </div>

          <md-card-content>
            <simple-table
              table-header-color="green"
              :data="sellers"
              :columns="columns"
            ></simple-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";

export default {
  components: {
    SimpleTable,
  },
  data() {
    return {
      sellers: [],
      columns: [
        { name: "name", label: "Nome" },
        { name: "email", label: "Email" },
        { name: "total_commission", label: "Comissão" },
      ],
    };
  },
  beforeMount() {
    this.$http
      .get("seller")
      .then((response) => {
        this.formatData(response.data.data);
      })
      .catch(function (error) {});
  },
  methods: {
    formatData(data) {
      const formatedData = [];

      data.map((el) => {
        if (!el.total_commission) el.total_commission = 0.0;
        el.total_commission = "R$ " + el.total_commission;
        formatedData.push(el);
      });

      this.sellers = formatedData;
    },
  },
};
</script>
