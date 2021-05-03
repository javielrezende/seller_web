<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <register-sale-form data-background-color="green"> </register-sale-form>
      </div>
    </div>
  </div>
</template>

<script>
import { RegisterSaleForm } from "@/pages";

export default {
  components: {
    RegisterSaleForm,
  },
};
</script>
