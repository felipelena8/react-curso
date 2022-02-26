import logo from "./logo.svg";
import "./App.css";
import "./css/style.css";
import NavBar from "./componentes/NavBar";
import "https://kit.fontawesome.com/b3e3212614.js";
import ItemListContainer from "./componentes/ItemListContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
