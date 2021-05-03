<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Lista de Vendas</h4>
            <p class="category">Encontre as vendas selecionando um vendedor</p>
          </md-card-header>

          <div class="md-layout-item md-size-100 text-left">
            <md-button to="/seller" class="md-raised md-lightgreen"
              >Lançar nova venda</md-button
            >
          </div>

          <div class="md-autocomplete md-layout-item md-size-30">
            <md-autocomplete
              class="search"
              v-model="selectedSeller"
              :md-options="
                sellers.map((el) => ({
                  ...el,
                  toLowerCase: () => el.name.toLowerCase(),
                  toString: () => el.name,
                }))
              "
              @md-selected="getSales"
            >
              <template slot="md-autocomplete-item" slot-scope="{ item }">
                {{ item.name }}
              </template>
              <label>Procure pelo vendedor...</label>
            </md-autocomplete>
          </div>

          <md-card-content>
            <simple-table
              table-header-color="green"
              :data="sales"
              :columns="columns"
            ></simple-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable } from "@/components";

export default {
  components: {
    SimpleTable,
  },
  data() {
    return {
      sellers: [],
      sales: [],
      selectedSeller: null,
      columns: [
        { name: "name", label: "Nome" },
        { name: "email", label: "Email" },
        { name: "commission_paid", label: "Comissão" },
        { name: "price", label: "Valor da venda" },
        { name: "created_at", label: "Data da venda" },
      ],
    };
  },
  beforeMount() {
    this.$http
      .get("seller")
      .then((response) => {
        this.sellers = response.data.data;
      })
      .catch(function (error) {});
  },
  methods: {
    formatData(data) {
      const formatedData = data.map((el) => {
        if (!el.total_commission) el.total_commission = 0.0;
        el.total_commission = "R$ " + el.total_commission;
        el.name = el.seller.name;
        el.email = el.seller.email;

        return el;
      });

      return formatedData;
    },
    getSales(data) {
      this.$http
        .get(`sale/seller/${data.id}`)
        .then((response) => {
          this.sales = this.formatData(response.data.data);
        })
        .catch(function (error) {});
    },
  },
};
</script>
