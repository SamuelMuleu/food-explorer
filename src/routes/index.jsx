import { BrowserRouter } from "react-router-dom";


import { AdminRoutes } from "./admin.routes";
import { CustomerRoutes } from "./customer.routes";
import { AuthRoute } from "./auth.route";

import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";


export function Routes() {
  const { user } = useAuth();

  function AcessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;

      default:
        return <CustomerRoutes />;

    }


  }

  return (
    <BrowserRouter>{user ? <AcessRoute /> : <AuthRoute />}</BrowserRouter>
  );
}

