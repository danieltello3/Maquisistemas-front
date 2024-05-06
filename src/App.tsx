import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import ClientRoutes from "./routes/ClientRoutes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <ClientRoutes />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
