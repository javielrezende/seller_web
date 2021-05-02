<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Cadastrar vendedor</h4>
        <p class="category"></p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nome</label>
              <md-input v-model="username" type="text" required></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Email</label>
              <md-input v-model="emailadress" type="email" required></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button
              @click="submit"
              class="md-raised md-success"
              :disabled="
                !username ||
                username.length < 5 ||
                !emailadress ||
                emailadress.length < 5
              "
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
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      username: null,
      emailadress: null,
    };
  },
  methods: {
    submit() {
      const form = new FormData();
      form.append("name", this.username);
      form.append("email", this.emailadress);

      this.$http
        .post("seller", form)
        .then((response) => {
          this.username = null;
          this.emailadress = null;

          this.$swal({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: "success",
            title: "Vendedor cadastrado com sucesso",
          });
          this.$router.push("/sellers");
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
