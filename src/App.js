
import "./App.css";
import NavBar from "./componentes/NavBar";
import "https://kit.fontawesome.com/b3e3212614.js";
import ItemListContainer from "./componentes/ItemListContainer";
import "./scss/style.scss";
import Footer from "./componentes/Footer";
import { useState } from "react";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function App() {
  const [selectItem, setSelectItem] = useState(null);
  return (
    <div className="App">
      <NavBar />
      <main>
        {selectItem == null ? (
          <ItemListContainer setSelectItem={setSelectItem} />
        ) : (
          <ItemDetailContainer id={selectItem} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
