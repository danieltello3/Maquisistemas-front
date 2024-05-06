import { Route, Routes } from "react-router-dom";
import ClientsCatalog from "../pages/ClientsCatalog/ClientsCatalog";
import ClientDetail from "../pages/ClientDetail/ClientDetail";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/clients" Component={ClientsCatalog} />
      <Route path="/clients/:id" Component={ClientDetail} />
    </Routes>
  );
};

export default ClientRoutes;
