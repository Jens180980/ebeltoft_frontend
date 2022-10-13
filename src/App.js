import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./Components/Partials/AllRoutes";
import { Header } from "./Components/Partials/Header";
import { Main } from "./Components/Partials/Main";
import { Footer } from "./Components/Partials/Footer";
import "./Assets/scss/app.scss";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Header />
        <Main>
          <AllRoutes />
        </Main>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
