
import "./App.css";
import NavBar from "./componentes/NavBar";
import "https://kit.fontawesome.com/b3e3212614.js";
import ItemListContainer from "./componentes/ItemListContainer";
import "./scss/style.scss";
import Footer from "./componentes/Footer";
import "./js/script.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ItemListContainer />
      </main>
      <Footer />
    </div>
  );
  }

export default App;
