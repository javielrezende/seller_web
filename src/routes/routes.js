import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import SellerProfile from "@/pages/SellerProfile.vue";
import Sale from "@/pages/Sale.vue";
import SellersList from "@/pages/SellersList.vue";
import SalesList from "@/pages/SalesList.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/sellers",
    children: [
      {
        path: "seller",
        name: "Seller Profile",
        component: SellerProfile
      },
      {
        path: "sellers",
        name: "Vendedores",
        component: SellersList
      },
      {
        path: "sale",
        name: "Lançar Venda",
        component: Sale
      },
      {
        path: "sales",
        name: "Vendas",
        component: SalesList
      },
    ]
  }
];

export default routes;
