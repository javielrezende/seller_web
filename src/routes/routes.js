import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import SellerProfile from "@/pages/SellerProfile.vue";
import SellersList from "@/pages/SellersList.vue";
import SalesList from "@/pages/SalesList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
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
        path: "sales",
        name: "Vendas",
        component: SalesList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
