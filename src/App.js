
import "./App.css";
import NavBar from "./componentes/NavBar";
import "https://kit.fontawesome.com/b3e3212614.js";
import ItemListContainer from "./componentes/ItemListContainer";
import "./scss/style.scss";
import Footer from "./componentes/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
            <Route path="/category/:cat" element={<ItemListContainer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
