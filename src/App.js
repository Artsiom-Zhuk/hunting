import { BrowserRouter } from "react-router-dom";

import Router from "./router";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => (
  <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>
);

export default App;
