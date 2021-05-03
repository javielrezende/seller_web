<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Lançar venda</h4>
        <p class="category"></p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-autocomplete md-layout-item md-size-30">
            <md-autocomplete
              required
              class="search"
              v-model="selectedSeller"
              :md-options="
                sellers.map((el) => ({
                  ...el,
                  toLowerCase: () => el.name.toLowerCase(),
                  toString: () => el.name,
                }))
              "
            >
              <template slot="md-autocomplete-item" slot-scope="{ item }">
                {{ item.name }}
              </template>
              <label>Procure pelo vendedor...</label>
            </md-autocomplete>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Preço</label>
              <md-input v-model="price" type="number" required></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button
              @click="submit"
              class="md-raised md-success"
              :disabled="!selectedSeller || !price"
              >Cadastrar</md-button
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "register-sale-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      price: null,
      selectedSeller: null,
      sellers: [],
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
    submit() {
      const form = new FormData();
      form.append("price", this.price);
      form.append("sellerId", this.selectedSeller.id);

      this.$http
        .post("sale", form)
        .then((response) => {
          this.price = null;
          this.selectedSeller = null;

          this.$swal({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: "success",
            title: "Venda lançada com sucesso",
          });

          this.$router.push("/sales");
        })
        .catch((error) => {
          let errKey = Object.keys(error.response.data.errors)[0];

          const messageError = JSON.parse(error.response.data.errors[errKey])
            .message;

          this.$swal({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: "error",
            title: messageError,
          });
        });
    },
  },
};
</script>
<style></style>
