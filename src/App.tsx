import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import ClientRoutes from "./routes/ClientRoutes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RepositoryIocProvider } from "./services/config/context";

function App() {
  return (
    <Provider store={store}>
      <RepositoryIocProvider>
        <Router>
          <Layout>
            <ClientRoutes />
          </Layout>
        </Router>
      </RepositoryIocProvider>
    </Provider>
  );
}

export default App;
